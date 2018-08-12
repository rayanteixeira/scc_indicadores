package br.com.sococo.resumo.services.dto;

import br.com.sococo.resumo.model.ResumoDiario;

import java.text.DateFormatSymbols;

public class CocoGerminadoDTO {

    private String mesLancamento;
    private String diaLancamento;
    private String cocoGerminado;


    public CocoGerminadoDTO() {
    }

    public CocoGerminadoDTO(String mesLancamento, String cocoGerminado) {
        this.mesLancamento = mesLancamento;
        this.cocoGerminado = cocoGerminado;
    }

    public CocoGerminadoDTO(String mesLancamento, String diaLancamento, String cocoGerminado) {
        this.mesLancamento = mesLancamento;
        this.diaLancamento = diaLancamento;
        this.cocoGerminado = cocoGerminado;
    }

    public CocoGerminadoDTO(ResumoDiario resumoDiario) {
        this(resumoDiario.getMesLancamento(), resumoDiario.getDiaLancamento(), resumoDiario.getTorta());
    }

    public String getMesLancamento() {
        String nomeMesCompleto = new DateFormatSymbols().getMonths()[Integer.parseInt(mesLancamento) - 1];
        return nomeMesCompleto.substring(0, 3);
    }

    public void setMesLancamento(String mesLancamento) {
        this.mesLancamento = mesLancamento;
    }

    public String getDiaLancamento() {
        return diaLancamento;
    }

    public void setDiaLancamento(String diaLancamento) {
        this.diaLancamento = diaLancamento;
    }

    public String getCocoGerminado() {
        return cocoGerminado;
    }

    public void setCocoGerminado(String cocoGerminado) {
        this.cocoGerminado = cocoGerminado;
    }
}


