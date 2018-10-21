package br.com.sococo.resumo.services;

import br.com.sococo.resumo.envio.Mailer;
import br.com.sococo.resumo.model.FiltroBusca;
import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.repository.ResumoDiarioRepository;
import br.com.sococo.resumo.services.converter.ConverterUtil;
import br.com.sococo.resumo.services.dto.LancamentoDTO;
import br.com.sococo.resumo.services.dto.ResumoDiarioDTO;
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

    public ResumoDiario insert(ResumoDiarioDTO resumoDiarioDTO) {
        LocalDate date = resumoDiarioDTO.getDataLancamento();
        // separando os valores de data_lancamento
        ResumoDiario resumoDiario = resumoDiarioDTO.toEntity(resumoDiarioDTO);
        resumoDiario.setDiaLancamento(String.valueOf(date.getDayOfMonth()));
        resumoDiario.setMesLancamento(String.valueOf(date.getMonthValue()));
        resumoDiario.setAnoLancamento(String.valueOf(date.getYear()));
        resumoDiario.setDiaMesLancamento(String.valueOf(date.getDayOfMonth() + "-" + date.getMonthValue()));

        resumoDiario.setId(resumoDiarioRepository.save(resumoDiario).getId());

        mailer.enviarEmail(resumoDiario);

        return resumoDiario;
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

    public List<ResumoDiario> buscaPorAnoMes(FiltroBusca filter) {

        return resumoDiarioRepository.findByDataLancamento(filter.getDataLancamento());
    }

    public LancamentoDTO buscaResumo(FiltroBusca filter) {
        LancamentoDTO lancamentoDTO = new LancamentoDTO();

        filter.setMesLancamento(String.valueOf(filter.getDataLancamento().getMonthValue()));
        filter.setAnoLancamento(String.valueOf(filter.getDataLancamento().getYear()));

        lancamentoDTO.setResumosDiarios(resumoDiarioRepository.findByDataLancamento(filter.getDataLancamento()));
        lancamentoDTO.setResumosMensal(resumoDiarioRepository.findByMesLancamento(filter.getMesLancamento(), filter.getAnoLancamento()));
        lancamentoDTO.setBuscaSemanal(resumoDiarioRepository.findByDiasDaSemana(filter.getDataLancamento()));

        return lancamentoDTO;
    }

}