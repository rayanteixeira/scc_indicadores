package br.com.sococo.resumo.services.dto;

import br.com.sococo.resumo.model.ResumoDiario;
import org.springframework.util.StringUtils;

import java.text.DateFormatSymbols;

public class CocoDTO {
    private String mesLancamento;
    private String diaLancamento;
    private String cocoDesfibrados;
    private String cocoProcessados;

    public CocoDTO() {
    }

    public CocoDTO(String mesLancamento, String diaLancamento, String cocoDesfibrados, String cocoProcessados) {
        this.mesLancamento = mesLancamento;
        this.diaLancamento = diaLancamento;
        this.cocoDesfibrados = cocoDesfibrados;
        this.cocoProcessados = cocoProcessados;
    }

    public CocoDTO(String mesLancamento, String cocoDesfibrados, String cocoProcessados) {
        this.mesLancamento = mesLancamento;
        this.cocoDesfibrados = cocoDesfibrados;
        this.cocoProcessados = cocoProcessados;
    }

    public CocoDTO(ResumoDiario resumoDiario){
        this(resumoDiario.getMesLancamento(), resumoDiario.getDiaLancamento(), resumoDiario.getCocosDesfibrados(), resumoDiario.getCocosProcessados());
    }

    public String getMesLancamento() {
        if (StringUtils.isEmpty(mesLancamento)) {
            return null;
        }
        //converto o numero para o nome do mês
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

    public String getCocoDesfibrados() {
        return cocoDesfibrados;
    }

    public void setCocoDesfibrados(String cocoDesfibrados) {
        this.cocoDesfibrados = cocoDesfibrados;
    }

    public String getCocoProcessados() {
        return cocoProcessados;
    }

    public void setCocoProcessados(String cocoProcessados) {
        this.cocoProcessados = cocoProcessados;
    }
}

