package br.com.sococo.resumo.services;

import br.com.sococo.resumo.envio.Mailer;
import br.com.sococo.resumo.model.FiltroBusca;
import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.repository.ResumoDiarioRepository;
import br.com.sococo.resumo.services.dto.LancamentoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ResumoDiarioService {

    @Autowired
    private ResumoDiarioRepository resumoDiarioRepository;

    @Autowired
    private Mailer mailer;


    public ResumoDiario insert(ResumoDiario obj) {

        obj.setDataLancamento(LocalDate.now());
        LocalDate date = obj.getDataLancamento();
        // separando os valores de data_lancamento
        obj.setDiaLancamento(String.valueOf(date.getDayOfMonth()));
        obj.setMesLancamento(String.valueOf(date.getMonthValue()));
        obj.setAnoLancamento(String.valueOf(date.getYear()));
        obj.setDiaMesLancamento(String.valueOf(date.getDayOfMonth() + "-" + date.getMonthValue()));


        ResumoDiario objSave = resumoDiarioRepository.save(obj);

        mailer.enviarEmail(objSave);

        return objSave;
    }

    public List<ResumoDiario> findAll() {
        return resumoDiarioRepository.findAll();
    }

    public ResumoDiario find(Long id) {
        Optional<ResumoDiario> obj = resumoDiarioRepository.findById(id);
        return obj.orElse(null);
    }

    public List<ResumoDiario> fingResumoDoDia() {
        return resumoDiarioRepository.findResumoDoDia();
    }

    public List<ResumoDiario> buscaPorData(FiltroBusca filter) {

        return resumoDiarioRepository.findByDataLancamento(filter.getDataLancamento());
    }

    public List<Object[]> buscaPorSemana(FiltroBusca filter) {
        return resumoDiarioRepository.findByDiasDaSemana(filter.getDataLancamento());
    }

    public LancamentoDTO buscaResumo(FiltroBusca filter) {
        LancamentoDTO lancamentoDTO = new LancamentoDTO();

        filter.setMesLancamento(String.valueOf(filter.getDataLancamento().getMonthValue()));
        filter.setAnoLancamento(String.valueOf(filter.getDataLancamento().getYear()));
        System.out.println("buscaResumo : " +filter);
        System.out.println("buscaResumo : " +filter.getDataLancamento());
        System.out.println("mes : " + filter.getMesLancamento());
        System.out.println("ano : " +filter.getAnoLancamento());



        lancamentoDTO.setResumosDiarios(resumoDiarioRepository.findByDataLancamento(filter.getDataLancamento()));
        lancamentoDTO.setResumosMensal(resumoDiarioRepository.findByMesLancamento(filter.getMesLancamento(), filter.getAnoLancamento()));
        lancamentoDTO.setBuscaSemanal(resumoDiarioRepository.findByDiasDaSemana(filter.getDataLancamento()));

        return lancamentoDTO;
    }

}