package br.com.sococo.resumo.services.dto;

import br.com.sococo.resumo.model.ResumoDiario;

import java.text.DateFormatSymbols;

public class AguaCocoDTO {

    private String mesLancamento;
    private String diaLancamento;
    private String aguaDeCocoSococo;
    private String aguaDeCocoVerde;

    public AguaCocoDTO() {
    }

    public AguaCocoDTO(String mesLancamento, String diaLancamento, String aguaDeCocoSococo, String aguaDeCocoVerde) {
        this.mesLancamento = mesLancamento;
        this.diaLancamento = diaLancamento;
        this.aguaDeCocoSococo = aguaDeCocoSococo;
        this.aguaDeCocoVerde = aguaDeCocoVerde;
    }

    public AguaCocoDTO(ResumoDiario resumoDiario) {
        this(resumoDiario.getMesLancamento(), resumoDiario.getDiaLancamento(), resumoDiario.getAguaDeCocoSococo(), resumoDiario.getAguaDeCocoVerde());
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

    public String getAguaDeCocoSococo() {
        return aguaDeCocoSococo;
    }

    public void setAguaDeCocoSococo(String aguaDeCocoSococo) {
        this.aguaDeCocoSococo = aguaDeCocoSococo;
    }

    public String getAguaDeCocoVerde() {
        return aguaDeCocoVerde;
    }

    public void setAguaDeCocoVerde(String aguaDeCocoVerde) {
        this.aguaDeCocoVerde = aguaDeCocoVerde;
    }
}
