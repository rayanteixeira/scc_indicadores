package br.com.sococo.resumo.services.wrapper.caixapadrao;

import br.com.sococo.resumo.services.wrapper.MesLancamentoWrapper;
import br.com.sococo.resumo.services.wrapper.totalfardos.TotalFardosWrapper;

import java.util.ArrayList;
import java.util.List;

public class ResumoDiarioCaixaPadraoWrapper {

    private List<MesLancamentoWrapper> mesLancamentoWrappers = new ArrayList<>();
    private List<CaixaPadraoWrapper> caixaPadraoWrapper = new ArrayList<>();

    public List<MesLancamentoWrapper> getMesLancamentoWrappers() {
        return mesLancamentoWrappers;
    }

    public void setMesLancamentoWrappers(List<MesLancamentoWrapper> mesLancamentoWrappers) {
        this.mesLancamentoWrappers = mesLancamentoWrappers;
    }

    public List<CaixaPadraoWrapper> getCaixaPadraoWrapper() {
        return caixaPadraoWrapper;
    }

    public void setCaixaPadraoWrapper(List<CaixaPadraoWrapper> caixaPadraoWrapper) {
        this.caixaPadraoWrapper = caixaPadraoWrapper;
    }
}
