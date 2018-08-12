package br.com.sococo.resumo.services.dto;

import br.com.sococo.resumo.model.ResumoDiario;

import java.text.DateFormatSymbols;

public class TotalFardosDTO {

    private String mesLancamento;
    private String diaLancamento;
    private String numeroFardos;

    public TotalFardosDTO() {
    }

    public TotalFardosDTO(String mesLancamento, String numeroFardos) {
        this.mesLancamento = mesLancamento;
        this.numeroFardos = numeroFardos;
    }

    public TotalFardosDTO(String mesLancamento, String diaLancamento, String numeroFardos) {
        this.mesLancamento = mesLancamento;
        this.diaLancamento = diaLancamento;
        this.numeroFardos = numeroFardos;
    }

    public TotalFardosDTO(ResumoDiario resumoDiario){
        this(resumoDiario.getMesLancamento(), resumoDiario.getDiaLancamento(), resumoDiario.getNumeroDeFardos());
    }


    public String getMesLancamento() {
        String nomeMesCompleto = new DateFormatSymbols().getMonths()[Integer.parseInt(mesLancamento)-1];
        return nomeMesCompleto.substring(0,3);
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

    public String getNumeroFardos() {
        return numeroFardos;
    }

    public void setNumeroFardos(String numeroFardos) {
        this.numeroFardos = numeroFardos;
    }
}
