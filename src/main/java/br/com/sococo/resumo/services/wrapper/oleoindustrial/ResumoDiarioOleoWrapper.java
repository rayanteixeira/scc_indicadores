package br.com.sococo.resumo.services.wrapper.oleoindustrial;

import br.com.sococo.resumo.services.wrapper.MesLancamentoWrapper;

import java.util.ArrayList;
import java.util.List;

public class ResumoDiarioOleoWrapper {

    private List<MesLancamentoWrapper> mesLancamentoWrappers = new ArrayList<>();
    private List<OleoIndustrialETEWrapper> oleoIndustrialETEWrappers = new ArrayList<>();
    private List<OleoIndustrialTipoAWrapper> oleoIndustrialTipoAWrapper = new ArrayList<>();


    public List<MesLancamentoWrapper> getMesLancamentoWrappers() {
        return mesLancamentoWrappers;
    }

    public void setMesLancamentoWrappers(List<MesLancamentoWrapper> mesLancamentoWrappers) {
        this.mesLancamentoWrappers = mesLancamentoWrappers;
    }

    public List<OleoIndustrialETEWrapper> getOleoIndustrialETEWrappers() {
        return oleoIndustrialETEWrappers;
    }

    public void setOleoIndustrialETEWrappers(List<OleoIndustrialETEWrapper> oleoIndustrialETEWrappers) {
        this.oleoIndustrialETEWrappers = oleoIndustrialETEWrappers;
    }

    public List<OleoIndustrialTipoAWrapper> getOleoIndustrialTipoAWrapper() {
        return oleoIndustrialTipoAWrapper;
    }

    public void setOleoIndustrialTipoAWrapper(List<OleoIndustrialTipoAWrapper> oleoIndustrialTipoAWrapper) {
        this.oleoIndustrialTipoAWrapper = oleoIndustrialTipoAWrapper;
    }
}
