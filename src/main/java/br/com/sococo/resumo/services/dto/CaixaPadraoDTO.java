package br.com.sococo.resumo.services.dto;

import br.com.sococo.resumo.model.ResumoDiario;
import org.springframework.util.StringUtils;

import java.text.DateFormatSymbols;

public class CaixaPadraoDTO {

    private String mesLancamento;
    private String diaLancamento;
    private String caixaPadrao;

    public CaixaPadraoDTO() {
    }

    public CaixaPadraoDTO(String mesLancamento, String caixaPadrao) {
        this.mesLancamento = mesLancamento;
        this.caixaPadrao = caixaPadrao;
    }

    public CaixaPadraoDTO(String mesLancamento, String diaLancamento, String caixaPadrao) {
        this.mesLancamento = mesLancamento;
        this.diaLancamento = diaLancamento;
        this.caixaPadrao = caixaPadrao;
    }

    public CaixaPadraoDTO(ResumoDiario resumoDiario) {
        this(resumoDiario.getMesLancamento(), resumoDiario.getDiaLancamento(), resumoDiario.getCaixaPadrao());
    }

    public String getMesLancamento() {
        if (StringUtils.isEmpty(mesLancamento)) {
            return null;
        }
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

    public String getCaixaPadrao() {
        return caixaPadrao;
    }

    public void setCaixaPadrao(String caixaPadrao) {
        this.caixaPadrao = caixaPadrao;
    }
}


