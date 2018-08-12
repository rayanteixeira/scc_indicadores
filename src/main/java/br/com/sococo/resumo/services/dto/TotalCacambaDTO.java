package br.com.sococo.resumo.services.dto;

import br.com.sococo.resumo.model.ResumoDiario;
import org.springframework.util.StringUtils;

import java.text.DateFormatSymbols;

public class TotalCacambaDTO {

    private String mesLancamento;
    private String diaLancamento;
    private String totalCacamba;

    public TotalCacambaDTO() {
    }

    public TotalCacambaDTO(String mesLancamento, String totalCacamba) {
        this.mesLancamento = mesLancamento;
        this.totalCacamba = totalCacamba;
    }

    public TotalCacambaDTO(String mesLancamento, String diaLancamento, String totalCacamba) {
        this.mesLancamento = mesLancamento;
        this.diaLancamento = diaLancamento;
        this.totalCacamba = totalCacamba;
    }

    public TotalCacambaDTO(ResumoDiario resumoDiario) {
        this(resumoDiario.getMesLancamento(), resumoDiario.getDiaLancamento(), resumoDiario.getTotalDeCacambas());
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

    public String getTotalCacamba() {
        return totalCacamba;
    }

    public void setTotalCacamba(String totalCacamba) {
        this.totalCacamba = totalCacamba;
    }
}
