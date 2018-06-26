package br.com.sococo.resumo.services.wrapper.torta;

import br.com.sococo.resumo.services.wrapper.MesLancamentoWrapper;
import br.com.sococo.resumo.services.wrapper.totalfardos.TotalFardosWrapper;

import java.util.ArrayList;
import java.util.List;

public class ResumoDiarioTortaWrapper {

    private List<MesLancamentoWrapper> mesLancamentoWrappers = new ArrayList<>();
    private List<TortaWrapper> tortaWrapper = new ArrayList<>();

    public List<MesLancamentoWrapper> getMesLancamentoWrappers() {
        return mesLancamentoWrappers;
    }

    public void setMesLancamentoWrappers(List<MesLancamentoWrapper> mesLancamentoWrappers) {
        this.mesLancamentoWrappers = mesLancamentoWrappers;
    }

    public List<TortaWrapper> getTortaWrapper() {
        return tortaWrapper;
    }

    public void setTortaWrapper(List<TortaWrapper> tortaWrapper) {
        this.tortaWrapper = tortaWrapper;
    }
}
