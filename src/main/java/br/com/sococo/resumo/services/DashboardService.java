package br.com.sococo.resumo.services;

import br.com.sococo.resumo.model.FiltroBusca;
import br.com.sococo.resumo.model.dashboard.EntidadesDias;
import br.com.sococo.resumo.model.dashboard.EntidadesMeses;
import br.com.sococo.resumo.services.resumo.dia.ResumoPorDia;
import br.com.sococo.resumo.services.resumo.mes.ResumoPorMes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {

    @Autowired
    private ResumoPorMes resumoPorMes;

    @Autowired
    private ResumoPorDia resumoPorDia;

    public List<EntidadesMeses> findAno(FiltroBusca filter) {
        return resumoPorMes.listar(filter);
    }

    public List<EntidadesDias> findMes(FiltroBusca filter) {
        return resumoPorDia.listar(filter);
    }


}
