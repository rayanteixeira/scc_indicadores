package br.com.sococo.resumo.services.resumo.mes;

import br.com.sococo.resumo.model.FiltroBusca;
import br.com.sococo.resumo.model.dashboard.DadosMes;
import br.com.sococo.resumo.model.dashboard.EntidadesMeses;
import br.com.sococo.resumo.repository.DashboardMesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ResumoPorMes {

    @Autowired
    private DashboardMesRepository repository;

    public List<EntidadesMeses> listar(FiltroBusca filter) {
        List<EntidadesMeses> entidades = new ArrayList<>();

        filter.setAnoLancamento(String.valueOf(filter.getDataLancamento().getYear()));

        List<DadosMes> cocosProcessados = listaCocosProcessados(filter);
        List<DadosMes> cocosDesfibrados = listaCocosDesfibrados(filter);
        List<DadosMes> cris = listaCris(filter);
        List<DadosMes> flococos = listaFlococo(filter);
        List<DadosMes> oleosTipoA = listaoleosTipoA(filter);
        List<DadosMes> oleosTipoETE = listaoleosTipoETE(filter);
        List<DadosMes> tortas = listaTortas(filter);
        List<DadosMes> aguasCocos = listaAguasCocos(filter);
        List<DadosMes> aguasVerde = listaAguasVerde(filter);
        List<DadosMes> percentGerminado = listaPercentGerminado(filter);
        List<DadosMes> totalCacambas = listaTotalCacambas(filter);
        List<DadosMes> caixasPadraos = listaCaixasPadraos(filter);
        List<DadosMes> numFados = listaNumFados(filter);

        EntidadesMeses entidade = new EntidadesMeses(
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

    private List<DadosMes> listaNumFados(FiltroBusca filter) {
        List<DadosMes> obj = new ArrayList<>();
        List<Object[]> objects = repository.findNumFardosAno(filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosMes(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosMes> listaCaixasPadraos(FiltroBusca filter) {
        List<DadosMes> obj = new ArrayList<>();
        List<Object[]> objects = repository.findCaixaPadraoAno(filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosMes(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosMes> listaTotalCacambas(FiltroBusca filter) {
        List<DadosMes> obj = new ArrayList<>();
        List<Object[]> objects = repository.findTotalCacambasAno(filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosMes(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosMes> listaPercentGerminado(FiltroBusca filter) {
        List<DadosMes> obj = new ArrayList<>();
        List<Object[]> objects = repository.findPercentGerminadoAno(filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosMes(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosMes> listaAguasVerde(FiltroBusca filter) {
        List<DadosMes> obj = new ArrayList<>();
        List<Object[]> objects = repository.findAguaVerdeAno(filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosMes(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosMes> listaAguasCocos(FiltroBusca filter) {
        List<DadosMes> obj = new ArrayList<>();
        List<Object[]> objects = repository.findAguaCocoAno(filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosMes(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosMes> listaTortas(FiltroBusca filter) {
        List<DadosMes> obj = new ArrayList<>();
        List<Object[]> objects = repository.findTortaAno(filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosMes(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosMes> listaoleosTipoETE(FiltroBusca filter) {
        List<DadosMes> obj = new ArrayList<>();
        List<Object[]> objects = repository.findOleoETEAno(filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosMes(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosMes> listaoleosTipoA(FiltroBusca filter) {
        List<DadosMes> obj = new ArrayList<>();
        List<Object[]> objects = repository.findOleoTipoAAno(filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosMes(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosMes> listaFlococo(FiltroBusca filter) {
        List<DadosMes> obj = new ArrayList<>();
        List<Object[]> objects = repository.findFlococoAno(filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosMes(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosMes> listaCris(FiltroBusca filter) {
        List<DadosMes> obj = new ArrayList<>();
        List<Object[]> objects = repository.findCriAno(filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosMes(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosMes> listaCocosDesfibrados(FiltroBusca filter) {
        List<DadosMes> obj = new ArrayList<>();
        List<Object[]> objects = repository.findCocoDesfribadosoAno(filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosMes(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

    private List<DadosMes> listaCocosProcessados(FiltroBusca filter) {
        List<DadosMes> obj = new ArrayList<>();
        List<Object[]> objects = repository.findCocoProcessadoAno(filter.getAnoLancamento());

        for (Object[] dado : objects) {
            obj.add(new DadosMes(dado[0].toString(), dado[1].toString()));
        }
        return obj;
    }

}
