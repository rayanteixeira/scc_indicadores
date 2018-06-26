package br.com.sococo.resumo.services.wrapper.totalcacambas;

import br.com.sococo.resumo.services.wrapper.MesLancamentoWrapper;

import java.util.ArrayList;
import java.util.List;

public class ResumoDiarioTotalCacambaWrapper {

    private List<MesLancamentoWrapper> mesLancamentoWrappers = new ArrayList<>();
    private List<TotalCacambaWrapper> totalCacambaWrapper = new ArrayList<>();

    public List<MesLancamentoWrapper> getMesLancamentoWrappers() {
        return mesLancamentoWrappers;
    }

    public void setMesLancamentoWrappers(List<MesLancamentoWrapper> mesLancamentoWrappers) {
        this.mesLancamentoWrappers = mesLancamentoWrappers;
    }

    public List<TotalCacambaWrapper> getTotalCacambaWrapper() {
        return totalCacambaWrapper;
    }

    public void setTotalCacambaWrapper(List<TotalCacambaWrapper> totalCacambaWrapper) {
        this.totalCacambaWrapper = totalCacambaWrapper;
    }
}
