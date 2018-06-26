package br.com.sococo.resumo.services;

import br.com.sococo.resumo.repository.ResumoDiarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CriFlococoService {

    @Autowired
    private ResumoDiarioRepository repository;

    public List<Double> findResumoDiarioCRIPorAno(String ano) {
        List<Double> lists = new ArrayList<>();
        repository.findResumoDiarioCRIPorAno(ano).forEach(list -> {
            lists.add(list);
        });

        return lists;
    }

    public List<Double> findResumoDiarioCRIPorMes(String mes) {
        List<Double> lists = new ArrayList<>();
        repository.findResumoDiarioCRIPorMes(mes).forEach(list -> {
            lists.add(list);
        });

        return lists;
    }

    public List<Double> findResumoDiarioFlococoPorAno(String ano) {
        List<Double> lists = new ArrayList<>();
        repository.findResumoDiarioFlococoPorAno(ano).forEach(list -> {
            lists.add(list);
        });
        return lists;
    }

    public List<Double> findResumoDiarioFlococoPorMes(String mes) {
        List<Double> lists = new ArrayList<>();
        repository.findResumoDiarioFlococoPorMes(mes).forEach(list -> {
            lists.add(list);
        });

        return lists;
    }

}
