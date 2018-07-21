package br.com.sococo.resumo.services;

import br.com.sococo.resumo.envio.Mailer;
import br.com.sococo.resumo.model.FiltroBusca;
import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.repository.ResumoDiarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
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

    public List<String> findByMeses(String ano) {
        return resumoDiarioRepository.findByMeses(ano);
    }

    public List<String> findByDias(String mes) {
        return resumoDiarioRepository.findByDias(mes);
    }

    public List<ResumoDiario> fingResumoDiario() {
        return resumoDiarioRepository.findResumoDiario();

    }

    public List<ResumoDiario> buscaPorData(FiltroBusca filter) {
        System.out.println("FILTER "+filter.getDataLancamento());
        List<ResumoDiario> lista = new ArrayList<>();
        if (filter.getDataLancamento() != null) {
            lista = resumoDiarioRepository.findByDataLancamento(filter.getDataLancamento());
        } else {
            lista = resumoDiarioRepository.findAll();
        }
        return lista;

    }

    public List<ResumoDiario> buscaPorMes(FiltroBusca filter) {
        //System.out.println("FILTER "+filter.getDataLancamento());

        filter.setMesLancamento(String.valueOf(filter.getDataLancamento().getMonthValue()));
        filter.setAnoLancamento(String.valueOf(filter.getDataLancamento().getYear()));

        System.out.println("Filter :" + filter.toString());

        List<ResumoDiario> lista = new ArrayList<>();
        if (filter.getDataLancamento() != null) {
            lista = resumoDiarioRepository.findByMesLancamento(filter.getMesLancamento(), filter.getAnoLancamento());
        } else {

            // fazer logica buscar mes atual
            lista = resumoDiarioRepository.findAll();
        }
        return lista;

    }
}