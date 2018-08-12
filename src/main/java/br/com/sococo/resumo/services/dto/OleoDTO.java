package br.com.sococo.resumo.services.dto;

import br.com.sococo.resumo.model.ResumoDiario;
import org.springframework.util.StringUtils;

import java.text.DateFormatSymbols;

public class OleoDTO {
    private String mesLancamento;
    private String diaLancamento;
    private String oleoIndustrialTipoA;
    private String oleoIndustrialETE;

    public OleoDTO() {
    }

    public OleoDTO(String mesLancamento, String oleoIndustrialTipoA, String oleoIndustrialETE) {
        this.mesLancamento = mesLancamento;
        this.oleoIndustrialTipoA = oleoIndustrialTipoA;
        this.oleoIndustrialETE = oleoIndustrialETE;
    }

    public OleoDTO(String mesLancamento, String diaLancamento, String oleoIndustrialTipoA, String oleoIndustrialETE) {
        this.mesLancamento = mesLancamento;
        this.diaLancamento = diaLancamento;
        this.oleoIndustrialTipoA = oleoIndustrialTipoA;
        this.oleoIndustrialETE = oleoIndustrialETE;
    }

    public OleoDTO(ResumoDiario resumoDiario) {
        this(resumoDiario.getMesLancamento(), resumoDiario.getDiaLancamento(), resumoDiario.getOleoIndustrialTipoA(), resumoDiario.getOleoIndustrialETE());
    }


    public String getMesLancamento() {
        if (StringUtils.isEmpty(mesLancamento)) {
            return null;
        }
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

    public String getOleoIndustrialTipoA() {
        return oleoIndustrialTipoA;
    }

    public void setOleoIndustrialTipoA(String oleoIndustrialTipoA) {
        this.oleoIndustrialTipoA = oleoIndustrialTipoA;
    }

    public String getOleoIndustrialETE() {
        return oleoIndustrialETE;
    }

    public void setOleoIndustrialETE(String getOleoIndustrialETE) {
        this.oleoIndustrialETE = getOleoIndustrialETE;
    }
}