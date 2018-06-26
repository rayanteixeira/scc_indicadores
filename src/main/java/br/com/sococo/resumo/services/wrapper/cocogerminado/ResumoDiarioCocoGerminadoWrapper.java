package br.com.sococo.resumo.services.wrapper.cocogerminado;

import br.com.sococo.resumo.services.wrapper.MesLancamentoWrapper;
import br.com.sococo.resumo.services.wrapper.totalfardos.TotalFardosWrapper;

import java.util.ArrayList;
import java.util.List;

public class ResumoDiarioCocoGerminadoWrapper {

    private List<MesLancamentoWrapper> mesLancamentoWrappers = new ArrayList<>();
    private List<CocoGerminadoWrapper> cocoGerminadoWrapper = new ArrayList<>();

    public List<MesLancamentoWrapper> getMesLancamentoWrappers() {
        return mesLancamentoWrappers;
    }

    public void setMesLancamentoWrappers(List<MesLancamentoWrapper> mesLancamentoWrappers) {
        this.mesLancamentoWrappers = mesLancamentoWrappers;
    }

    public List<CocoGerminadoWrapper> getCocoGerminadoWrapper() {
        return cocoGerminadoWrapper;
    }

    public void setCocoGerminadoWrapper(List<CocoGerminadoWrapper> cocoGerminadoWrapper) {
        this.cocoGerminadoWrapper = cocoGerminadoWrapper;
    }
}
