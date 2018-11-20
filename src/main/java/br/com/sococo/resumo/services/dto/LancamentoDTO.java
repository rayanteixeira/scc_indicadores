package br.com.sococo.resumo.services.dto;

import br.com.sococo.resumo.model.ResumoDiario;

import java.util.List;

public class LancamentoDTO {

    private List<ResumoDiario> resumosDiarios;

    private List<ResumoDiario> resumosMensal;

    private List<ResumoDiario> buscaSemanal;

    public List<ResumoDiario> getResumosDiarios() {
        return resumosDiarios;
    }

    public void setResumosDiarios(List<ResumoDiario> resumosDiarios) {
        this.resumosDiarios = resumosDiarios;
    }

    public List<ResumoDiario> getResumosMensal() {
        return resumosMensal;
    }

    public void setResumosMensal(List<ResumoDiario> resumosMensal) {
        this.resumosMensal = resumosMensal;
    }

    public List<ResumoDiario> getBuscaSemanal() {
        return buscaSemanal;
    }

    public void setBuscaSemanal(List<ResumoDiario> buscaSemanal) {
        this.buscaSemanal = buscaSemanal;
    }
}
