package br.com.sococo.resumo.services.dto;

import br.com.sococo.resumo.model.ResumoDiario;

import java.text.DateFormatSymbols;

public class TortaDTO {

    private String mesLancamento;
    private String diaLancamento;
    private String torta;


    public TortaDTO() {
    }

    public TortaDTO(String mesLancamento, String diaLancamento, String torta) {
        this.mesLancamento = mesLancamento;
        this.diaLancamento = diaLancamento;
        this.torta = torta;
    }

    public TortaDTO(String mesLancamento, String torta) {
        this.mesLancamento = mesLancamento;
        this.torta = torta;
    }

    public TortaDTO(ResumoDiario resumoDiario) {
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

    public String getTorta() {
        return torta;
    }

    public void setTorta(String torta) {
        this.torta = torta;
    }
}


