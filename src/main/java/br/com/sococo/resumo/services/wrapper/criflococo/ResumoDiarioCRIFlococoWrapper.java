package br.com.sococo.resumo.services.wrapper.criflococo;

import br.com.sococo.resumo.services.wrapper.MesLancamentoWrapper;

import java.util.ArrayList;
import java.util.List;

public class ResumoDiarioCRIFlococoWrapper {

    private List<MesLancamentoWrapper> mesLancamentoWrappers = new ArrayList<>();
    private List<CRIWrapper> criWrappers = new ArrayList<>();
    private List<FlococoWrapper> flococoWrappers = new ArrayList<>();


    public List<MesLancamentoWrapper> getMesLancamentoWrappers() {
        return mesLancamentoWrappers;
    }

    public void setMesLancamentoWrappers(List<MesLancamentoWrapper> mesLancamentoWrappers) {
        this.mesLancamentoWrappers = mesLancamentoWrappers;
    }

    public List<CRIWrapper> getCriWrappers() {
        return criWrappers;
    }

    public void setCriWrappers(List<CRIWrapper> criWrappers) {
        this.criWrappers = criWrappers;
    }

    public List<FlococoWrapper> getFlococoWrappers() {
        return flococoWrappers;
    }

    public void setFlococoWrappers(List<FlococoWrapper> flococoWrappers) {
        this.flococoWrappers = flococoWrappers;
    }
}
