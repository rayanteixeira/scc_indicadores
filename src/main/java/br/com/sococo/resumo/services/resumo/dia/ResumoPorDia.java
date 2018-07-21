package br.com.sococo.resumo.services.resumo.dia;

import br.com.sococo.resumo.model.FiltroBusca;
import br.com.sococo.resumo.model.dashboard.DadosDia;
import br.com.sococo.resumo.model.dashboard.EntidadesDias;
import br.com.sococo.resumo.repository.DashboardDiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ResumoPorDia {

    @Autowired
    private DashboardDiaRepository repository;

    public List<EntidadesDias> listar(FiltroBusca filter) {
        List<EntidadesDias> entidades = new ArrayList<>();

        filter.setAnoLancamento(String.valueOf(filter.getDataLancamento().getYear()));
        filter.setMesLancamento(String.valueOf(filter.getDataLancamento().getMonthValue()));

        System.out.println(filter);

        List<DadosDia> cocosProcessados = listaCocosProcessados(filter);
        List<DadosDia> cocosDesfibrados = listaCocosDesfibrados(filter);
        List<DadosDia> cris = listaCris(filter);
        List<DadosDia> flococos = listaFlococo(filter);
        List<DadosDia> oleosTipoA = listaoleosTipoA(filter);
        List<DadosDia> oleosTipoETE = listaoleosTipoETE(filter);
        List<DadosDia> tortas = listaTortas(filter);
        List<DadosDia> aguasCocos = listaAguasCocos(filter);
        List<DadosDia> aguasVerde = listaAguasVerde(filter);
        List<DadosDia> percentGerminado = listaPercentGerminado(filter);
        List<DadosDia> totalCacambas = listaTotalCacambas(filter);
        List<DadosDia> caixasPadraos = listaCaixasPadraos(filter);
        List<DadosDia> numFados = listaNumFados(filter);

        EntidadesDias entidade = new EntidadesDias(
                cocosProcessados,
                cocosDesfibrados,
                cris,
                flococos,
                oleosTipoA,
                oleosTipoETE,
                tortas,
                aguasCocos,
                aguasVerde,
                percentGerminado,
                totalCacambas,
                caixasPadraos,
                numFados
        );

        entidades.add(entidade);
        return entidades;
    }

    private List<DadosDia> listaNumFados(FiltroBusca filter) {
        List<DadosDia> obj = new ArrayList<>();
        List<Object[]> objects = repository.findNumFardosDia(filter.getMesLancamento(), filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosDia(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosDia> listaCaixasPadraos(FiltroBusca filter) {
        List<DadosDia> obj = new ArrayList<>();
        List<Object[]> objects = repository.findCaixaPadraoDia(filter.getMesLancamento(), filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosDia(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosDia> listaTotalCacambas(FiltroBusca filter) {
        List<DadosDia> obj = new ArrayList<>();
        List<Object[]> objects = repository.findTotalCacambasDia(filter.getMesLancamento(), filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosDia(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosDia> listaPercentGerminado(FiltroBusca filter) {
        List<DadosDia> obj = new ArrayList<>();
        List<Object[]> objects = repository.findPercentGerminadoDia(filter.getMesLancamento(), filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosDia(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosDia> listaAguasVerde(FiltroBusca filter) {
        List<DadosDia> obj = new ArrayList<>();
        List<Object[]> objects = repository.findAguaVerdeDia(filter.getMesLancamento(), filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosDia(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosDia> listaAguasCocos(FiltroBusca filter) {
        List<DadosDia> obj = new ArrayList<>();
        List<Object[]> objects = repository.findAguaCocoDia(filter.getMesLancamento(), filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosDia(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosDia> listaTortas(FiltroBusca filter) {
        List<DadosDia> obj = new ArrayList<>();
        List<Object[]> objects = repository.findTortaDia(filter.getMesLancamento(), filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosDia(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosDia> listaoleosTipoETE(FiltroBusca filter) {
        List<DadosDia> obj = new ArrayList<>();
        List<Object[]> objects = repository.findOleoETEDia(filter.getMesLancamento(), filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosDia(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosDia> listaoleosTipoA(FiltroBusca filter) {
        List<DadosDia> obj = new ArrayList<>();
        List<Object[]> objects = repository.findOleoTipoADia(filter.getMesLancamento(), filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosDia(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosDia> listaFlococo(FiltroBusca filter) {
        List<DadosDia> obj = new ArrayList<>();
        List<Object[]> objects = repository.findFlococoDia(filter.getMesLancamento(), filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosDia(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosDia> listaCris(FiltroBusca filter) {
        List<DadosDia> obj = new ArrayList<>();
        List<Object[]> objects = repository.findCriDia(filter.getMesLancamento(), filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosDia(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosDia> listaCocosDesfibrados(FiltroBusca filter) {
        List<DadosDia> obj = new ArrayList<>();
        List<Object[]> objects = repository.findCocoDesfribadosoDia(filter.getMesLancamento(), filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosDia(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosDia> listaCocosProcessados(FiltroBusca filter) {
        List<DadosDia> obj = new ArrayList<>();
        List<Object[]> objects = repository.findCocoProcessadoDia(filter.getMesLancamento(), filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosDia(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

}
