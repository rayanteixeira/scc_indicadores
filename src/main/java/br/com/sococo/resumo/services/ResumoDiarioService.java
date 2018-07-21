package br.com.sococo.resumo.services;

import br.com.sococo.resumo.envio.Mailer;
import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.model.ResumoDiarioFilter;
import br.com.sococo.resumo.repository.ResumoDiarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public List<ResumoDiario> buscaPorData(ResumoDiarioFilter filter) {
        System.out.println("FILTER "+filter.getDataLancamento());
        List<ResumoDiario> lista = new ArrayList<>();
        if (filter.getDataLancamento() != null) {
            lista = resumoDiarioRepository.findByDataLancamento(filter.getDataLancamento());
        } else {
            lista = resumoDiarioRepository.findAll();
        }
        return lista;

    }
}