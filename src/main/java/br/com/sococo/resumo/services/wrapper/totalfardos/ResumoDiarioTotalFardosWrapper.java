package br.com.sococo.resumo.services.wrapper.totalfardos;

import br.com.sococo.resumo.services.wrapper.MesLancamentoWrapper;

import java.util.ArrayList;
import java.util.List;

public class ResumoDiarioTotalFardosWrapper {

    private List<MesLancamentoWrapper> mesLancamentoWrappers = new ArrayList<>();
    private List<TotalFardosWrapper> totalFardosWrapper = new ArrayList<>();

    public List<MesLancamentoWrapper> getMesLancamentoWrappers() {
        return mesLancamentoWrappers;
    }

    public void setMesLancamentoWrappers(List<MesLancamentoWrapper> mesLancamentoWrappers) {
        this.mesLancamentoWrappers = mesLancamentoWrappers;
    }

    public List<TotalFardosWrapper> getTotalFardosWrapper() {
        return totalFardosWrapper;
    }

    public void setTotalFardosWrapper(List<TotalFardosWrapper> totalFardosWrapper) {
        this.totalFardosWrapper = totalFardosWrapper;
    }
}
