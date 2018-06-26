package br.com.sococo.resumo.services.wrapper.aguacoco;

import br.com.sococo.resumo.services.wrapper.MesLancamentoWrapper;

import java.util.ArrayList;
import java.util.List;

public class ResumoDiarioAguaCocoWrapper {

    private List<MesLancamentoWrapper> mesLancamentoWrappers = new ArrayList<>();
    private List<AguaCocoSococoWrapper> aguaCocoSococoWrappers = new ArrayList<>();
    private List<AguaCocoVerdeWrapper> aguaCocoVerdeWrappers = new ArrayList<>();


    public List<MesLancamentoWrapper> getMesLancamentoWrappers() {
        return mesLancamentoWrappers;
    }

    public void setMesLancamentoWrappers(List<MesLancamentoWrapper> mesLancamentoWrappers) {
        this.mesLancamentoWrappers = mesLancamentoWrappers;
    }

    public List<AguaCocoSococoWrapper> getAguaCocoSococoWrappers() {
        return aguaCocoSococoWrappers;
    }

    public void setAguaCocoSococoWrappers(List<AguaCocoSococoWrapper> aguaCocoSococoWrappers) {
        this.aguaCocoSococoWrappers = aguaCocoSococoWrappers;
    }

    public List<AguaCocoVerdeWrapper> getAguaCocoVerdeWrappers() {
        return aguaCocoVerdeWrappers;
    }

    public void setAguaCocoVerdeWrappers(List<AguaCocoVerdeWrapper> aguaCocoVerdeWrappers) {
        this.aguaCocoVerdeWrappers = aguaCocoVerdeWrappers;
    }
}
