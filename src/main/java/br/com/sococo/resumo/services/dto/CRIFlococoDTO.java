package br.com.sococo.resumo.services.dto;

import br.com.sococo.resumo.model.ResumoDiario;

import java.text.DateFormatSymbols;

public class CRIFlococoDTO {
    private String mesLancamento;
    private String diaLancamento;
    private String cri;
    private String flococo;

    public CRIFlococoDTO() {
    }

    public CRIFlococoDTO(String mesLancamento, String diaLancamento, String cli, String flococo) {
        this.mesLancamento = mesLancamento;
        this.diaLancamento = diaLancamento;
        this.cri = cli;
        this.flococo = flococo;
    }

    public CRIFlococoDTO(ResumoDiario resumoDiario){
        this(resumoDiario.getMesLancamento(), resumoDiario.getDiaLancamento(),resumoDiario.getCri(), resumoDiario.getFlococo());
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

    public String getCri() {
        return cri;
    }

    public void setCri(String cri) {
        this.cri = cri;
    }

    public String getFlococo() {
        return flococo;
    }

    public void setFlococo(String flococo) {
        this.flococo = flococo;
    }
}
