package br.com.sococo.resumo.model.dashboard;

import java.util.List;

public class EntidadesMeses {

    List<DadosMes> processados;
    List<DadosMes> desfibrados;
    List<DadosMes> cris;
    List<DadosMes> flococos;
    List<DadosMes> oleosTipoA;
    List<DadosMes> oleosETE;
    List<DadosMes> tortas;
    List<DadosMes> aguasSococo;
    List<DadosMes> aguasVerde;
    List<DadosMes> percentGerminados;
    List<DadosMes> totalCacambas;
    List<DadosMes> caixasPadraos;
    List<DadosMes> numFados;


    public EntidadesMeses() {
    }

    public EntidadesMeses(List<DadosMes> processados, List<DadosMes> desfibrados, List<DadosMes> cris, List<DadosMes> flococos, List<DadosMes> oleosTipoA, List<DadosMes> oleosETE, List<DadosMes> tortas, List<DadosMes> aguasSococo, List<DadosMes> aguasVerde, List<DadosMes> percentGerminados, List<DadosMes> totalCacambas, List<DadosMes> caixasPadraos, List<DadosMes> numFados) {
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

    public List<DadosMes> getProcessados() {
        return processados;
    }

    public void setProcessados(List<DadosMes> processados) {
        this.processados = processados;
    }

    public List<DadosMes> getDesfibrados() {
        return desfibrados;
    }

    public void setDesfibrados(List<DadosMes> desfibrados) {
        this.desfibrados = desfibrados;
    }

    public List<DadosMes> getCris() {
        return cris;
    }

    public void setCris(List<DadosMes> cris) {
        this.cris = cris;
    }

    public List<DadosMes> getFlococos() {
        return flococos;
    }

    public void setFlococos(List<DadosMes> flococos) {
        this.flococos = flococos;
    }

    public List<DadosMes> getOleosTipoA() {
        return oleosTipoA;
    }

    public void setOleosTipoA(List<DadosMes> oleosTipoA) {
        this.oleosTipoA = oleosTipoA;
    }

    public List<DadosMes> getOleosETE() {
        return oleosETE;
    }

    public void setOleosETE(List<DadosMes> oleosETE) {
        this.oleosETE = oleosETE;
    }

    public List<DadosMes> getTortas() {
        return tortas;
    }

    public void setTortas(List<DadosMes> tortas) {
        this.tortas = tortas;
    }

    public List<DadosMes> getAguasSococo() {
        return aguasSococo;
    }

    public void setAguasSococo(List<DadosMes> aguasSococo) {
        this.aguasSococo = aguasSococo;
    }

    public List<DadosMes> getAguasVerde() {
        return aguasVerde;
    }

    public void setAguasVerde(List<DadosMes> aguasVerde) {
        this.aguasVerde = aguasVerde;
    }

    public List<DadosMes> getPercentGerminados() {
        return percentGerminados;
    }

    public void setPercentGerminados(List<DadosMes> percentGerminados) {
        this.percentGerminados = percentGerminados;
    }

    public List<DadosMes> getTotalCacambas() {
        return totalCacambas;
    }

    public void setTotalCacambas(List<DadosMes> totalCacambas) {
        this.totalCacambas = totalCacambas;
    }

    public List<DadosMes> getCaixasPadraos() {
        return caixasPadraos;
    }

    public void setCaixasPadraos(List<DadosMes> caixasPadraos) {
        this.caixasPadraos = caixasPadraos;
    }

    public List<DadosMes> getNumFados() {
        return numFados;
    }

    public void setNumFados(List<DadosMes> numFados) {
        this.numFados = numFados;
    }
}
