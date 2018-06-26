package br.com.sococo.resumo.services.wrapper.coco;

import br.com.sococo.resumo.services.wrapper.MesLancamentoWrapper;

import java.util.ArrayList;
import java.util.List;

public class ResumoDiarioCocoWrapper {

    private List<MesLancamentoWrapper> mesLancamentoWrappers = new ArrayList<>();
    private List<CocoDesfibradoWrapper> cocoDesfibradoWrappers = new ArrayList<>();
    private List<CocoProcessadoWrapper> cocoProcessadoWrappers = new ArrayList<>();


    public List<MesLancamentoWrapper> getMesLancamentoWrappers() {
        return mesLancamentoWrappers;
    }

    public void setMesLancamentoWrappers(List<MesLancamentoWrapper> mesLancamentoWrappers) {
        this.mesLancamentoWrappers = mesLancamentoWrappers;
    }

    public List<CocoDesfibradoWrapper> getCocoDesfibradoWrappers() {
        return cocoDesfibradoWrappers;
    }

    public void setCocoDesfibradoWrappers(List<CocoDesfibradoWrapper> cocoDesfibradoWrappers) {
        this.cocoDesfibradoWrappers = cocoDesfibradoWrappers;
    }

    public List<CocoProcessadoWrapper> getCocoProcessadoWrappers() {
        return cocoProcessadoWrappers;
    }

    public void setCocoProcessadoWrappers(List<CocoProcessadoWrapper> cocoProcessadoWrappers) {
        this.cocoProcessadoWrappers = cocoProcessadoWrappers;
    }


}
