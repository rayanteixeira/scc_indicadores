package br.com.sococo.resumo.model.dashboard;

import java.util.List;

public class EntidadesDias {

    List<DadosDia> processados;
    List<DadosDia> desfibrados;
    List<DadosDia> cris;
    List<DadosDia> flococos;
    List<DadosDia> oleosTipoA;
    List<DadosDia> oleosETE;
    List<DadosDia> tortas;
    List<DadosDia> aguasSococo;
    List<DadosDia> aguasVerde;
    List<DadosDia> percentGerminados;
    List<DadosDia> totalCacambas;
    List<DadosDia> caixasPadraos;
    List<DadosDia> numFados;


    public EntidadesDias() {
    }

    public EntidadesDias(List<DadosDia> processados, List<DadosDia> desfibrados, List<DadosDia> cris, List<DadosDia> flococos, List<DadosDia> oleosTipoA, List<DadosDia> oleosETE, List<DadosDia> tortas, List<DadosDia> aguasSococo, List<DadosDia> aguasVerde, List<DadosDia> percentGerminados, List<DadosDia> totalCacambas, List<DadosDia> caixasPadraos, List<DadosDia> numFados) {
        this.processados = processados;
        this.desfibrados = desfibrados;
        this.cris = cris;
        this.flococos = flococos;
        this.oleosTipoA = oleosTipoA;
        this.oleosETE = oleosETE;
        this.tortas = tortas;
        this.aguasSococo = aguasSococo;
        this.aguasVerde = aguasVerde;
        this.percentGerminados = percentGerminados;
        this.totalCacambas = totalCacambas;
        this.caixasPadraos = caixasPadraos;
        this.numFados = numFados;
    }

    public List<DadosDia> getProcessados() {
        return processados;
    }

    public void setProcessados(List<DadosDia> processados) {
        this.processados = processados;
    }

    public List<DadosDia> getDesfibrados() {
        return desfibrados;
    }

    public void setDesfibrados(List<DadosDia> desfibrados) {
        this.desfibrados = desfibrados;
    }

    public List<DadosDia> getCris() {
        return cris;
    }

    public void setCris(List<DadosDia> cris) {
        this.cris = cris;
    }

    public List<DadosDia> getFlococos() {
        return flococos;
    }

    public void setFlococos(List<DadosDia> flococos) {
        this.flococos = flococos;
    }

    public List<DadosDia> getOleosTipoA() {
        return oleosTipoA;
    }

    public void setOleosTipoA(List<DadosDia> oleosTipoA) {
        this.oleosTipoA = oleosTipoA;
    }

    public List<DadosDia> getOleosETE() {
        return oleosETE;
    }

    public void setOleosETE(List<DadosDia> oleosETE) {
        this.oleosETE = oleosETE;
    }

    public List<DadosDia> getTortas() {
        return tortas;
    }

    public void setTortas(List<DadosDia> tortas) {
        this.tortas = tortas;
    }

    public List<DadosDia> getAguasSococo() {
        return aguasSococo;
    }

    public void setAguasSococo(List<DadosDia> aguasSococo) {
        this.aguasSococo = aguasSococo;
    }

    public List<DadosDia> getAguasVerde() {
        return aguasVerde;
    }

    public void setAguasVerde(List<DadosDia> aguasVerde) {
        this.aguasVerde = aguasVerde;
    }

    public List<DadosDia> getPercentGerminados() {
        return percentGerminados;
    }

    public void setPercentGerminados(List<DadosDia> percentGerminados) {
        this.percentGerminados = percentGerminados;
    }

    public List<DadosDia> getTotalCacambas() {
        return totalCacambas;
    }

    public void setTotalCacambas(List<DadosDia> totalCacambas) {
        this.totalCacambas = totalCacambas;
    }

    public List<DadosDia> getCaixasPadraos() {
        return caixasPadraos;
    }

    public void setCaixasPadraos(List<DadosDia> caixasPadraos) {
        this.caixasPadraos = caixasPadraos;
    }

    public List<DadosDia> getNumFados() {
        return numFados;
    }

    public void setNumFados(List<DadosDia> numFados) {
        this.numFados = numFados;
    }
}
