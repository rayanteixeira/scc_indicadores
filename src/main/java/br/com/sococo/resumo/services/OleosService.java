package br.com.sococo.resumo.services;

import br.com.sococo.resumo.repository.ResumoDiarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OleosService {

    @Autowired
    private ResumoDiarioRepository repository;

    public List<Double> findOleoIndustrialETEPorAno(String ano) {
        List<Double> lists = new ArrayList<>();
        repository.findOleoIndustrialETEPorAno(ano).forEach(list -> {
            lists.add(list);
        });

        return lists;
    }

    public List<Double> findOleoIndustrialTipoAPorAno(String ano) {
        List<Double> lists = new ArrayList<>();
        repository.findCocoDesfibradosAno(ano).forEach(list -> {
            lists.add(list);
        });
        return lists;
    }

    public List<Double> findOleoIndustrialETEPorMes(String mes) {
        List<Double> lists = new ArrayList<>();
        repository.findOleoIndustrialETEPorMes(mes).forEach(list -> {
            lists.add(list);
        });

        return lists;
    }

    public List<Double> findOleoIndustrialTipoAPorMes(String mes) {
        List<Double> lists = new ArrayList<>();
        repository.findOleoIndustrialTipoAPorMes(mes).forEach(list -> {
            lists.add(list);
        });

        return lists;
    }

}
