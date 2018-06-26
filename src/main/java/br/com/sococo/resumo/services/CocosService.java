package br.com.sococo.resumo.services;

import br.com.sococo.resumo.repository.ResumoDiarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CocosService {

    @Autowired
    private ResumoDiarioRepository repository;

    public List<Double> findCocoProcessadoAno(String ano) {
        List<Double> cocos = new ArrayList<>();
        repository.findCocoProcessadoAno(ano).forEach(coco -> {

            cocos.add(coco);
        });

        return cocos;
    }

    public List<Double> findCocoDesfibradosAno(String ano) {
        List<Double> cocos = new ArrayList<>();
        repository.findCocoDesfibradosAno(ano).forEach(coco -> {
            cocos.add(coco);
        });
        return cocos;
    }

    public List<Double> findCocoProcessadoMes(String mes) {
        List<Double> cocos = new ArrayList<>();
        repository.findCocoProcessadoMes(mes).forEach(coco -> {
            cocos.add(coco);
        });

        return cocos;
    }

    public List<Double> findCocoDesfibradosMes(String mes) {
        List<Double> cocos = new ArrayList<>();
        repository.findCocoDesfibradosMes(mes).forEach(coco -> {
            cocos.add(coco);
        });

        return cocos;
    }


}
