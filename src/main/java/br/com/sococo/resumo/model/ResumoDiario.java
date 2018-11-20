package br.com.sococo.resumo.model;

import br.com.sococo.resumo.services.converter.ConverterUtil;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

@Entity
public class ResumoDiario implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // SOCOCO
    @NotNull
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Column(name = "data_lancamento")
    private LocalDate dataLancamento;

    @Column(name = "cocos_processados")
    private Double cocosProcessados;

    @Column(name = "cocos_desfibrados")
    private Double cocosDesfibrados;

    private Double cri;

    private Double flococo;

    @Column(name = "oleo_industrial_tipo_a")
    private Double oleoIndustrialTipoA;

    @Column(name = "oleo_industrial_ete")
    private Double oleoIndustrialETE;

    private Double torta;

    // ACQUA
    @Column(name = "agua_coco_sococo")
    private Double aguaDeCocoSococo;

    @Column(name = "agua_coco_verde")
    private Double aguaDeCocoVerde;

    @Column(name = "caixa_padrao")
    private Double caixaPadrao;

    @Column(name = "porcentagem_coco_germinado")
    private Double porcentagemCocoGerminado;

    @Column(name = "total_cacambas")
    private Double totalDeCacambas;
    //AMAFIBRA
    @Column(name = "numero_fardos")
    private Double numeroDeFardos;
    //DATAS
    @Column(name = "dia_lancamento")
    private String diaLancamento;
    @Column(name = "mes_lancamento")
    private String mesLancamento;
    @Column(name = "ano_lancamento")
    private String anoLancamento;
    @Column(name = "dia_mes_lancamento")
    private String diaMesLancamento;

    public ResumoDiario() {
    }

    public ResumoDiario(LocalDate dataLancamento, Double cocosProcessados, Double cocosDesfibrados, Double cri, Double flococo, Double oleoIndustrialTipoA, Double oleoIndustrialETE, Double torta, Double aguaDeCocoSococo, Double aguaDeCocoVerde, Double caixaPadrao, Double porcentagemCocoGerminado, Double totalDeCacambas, Double numeroDeFardos) {
        this.dataLancamento = dataLancamento;
        this.cocosProcessados = cocosProcessados;
        this.cocosDesfibrados = cocosDesfibrados;
        this.cri = cri;
        this.flococo = flococo;
        this.oleoIndustrialTipoA = oleoIndustrialTipoA;
        this.oleoIndustrialETE = oleoIndustrialETE;
        this.torta = torta;
        this.aguaDeCocoSococo = aguaDeCocoSococo;
        this.aguaDeCocoVerde = aguaDeCocoVerde;
        this.totalDeCacambas = totalDeCacambas;
        this.caixaPadrao = caixaPadrao;
        this.numeroDeFardos = numeroDeFardos;
        this.porcentagemCocoGerminado = porcentagemCocoGerminado;
    }

    public ResumoDiario(Double cocosProcessados, Double cocosDesfibrados, Double cri, Double flococo, Double oleoIndustrialTipoA, Double oleoIndustrialETE, Double torta, Double aguaDeCocoSococo, Double aguaDeCocoVerde,  Double caixaPadrao, Double porcentagemCocoGerminado, Double totalDeCacambas, Double numeroDeFardos) {
        this.cocosProcessados = cocosProcessados;
        this.cocosDesfibrados = cocosDesfibrados;
        this.cri = cri;
        this.flococo = flococo;
        this.oleoIndustrialTipoA = oleoIndustrialTipoA;
        this.oleoIndustrialETE = oleoIndustrialETE;
        this.torta = torta;
        this.aguaDeCocoSococo = aguaDeCocoSococo;
        this.aguaDeCocoVerde = aguaDeCocoVerde;
        this.totalDeCacambas = totalDeCacambas;
        this.caixaPadrao = caixaPadrao;
        this.numeroDeFardos = numeroDeFardos;
        this.porcentagemCocoGerminado = porcentagemCocoGerminado;
    }

    public Double getRendimento() {
        //DecimalFormat fmt = new DecimalFormat("#.##");
        return ConverterUtil.converterDoubleDoisDecimais(Double.valueOf(getTotalCriFlococo() / cocosProcessados));
    }

    public Double getTotalCriFlococo() {
        //DecimalFormat fmt = new DecimalFormat("#.##");
        return ConverterUtil.converterDoubleDoisDecimais(Double.valueOf(cri + flococo));
    }

    public Double getTotalAguaCocos() {
        //DecimalFormat fmt = new DecimalFormat("#.##");
        return ConverterUtil.converterDoubleDoisDecimais(Double.valueOf(aguaDeCocoSococo + aguaDeCocoVerde));
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDataLancamento() {
        return dataLancamento;
    }

    public void setDataLancamento(LocalDate dataLancamento) {
        this.dataLancamento = dataLancamento;
    }

    public Double getCocosProcessados() {
        return ConverterUtil.converterDoubleDoisDecimais(cocosProcessados);
    }

    public void setCocosProcessados(Double cocosProcessados) {
        this.cocosProcessados = cocosProcessados;
    }

    public Double getCocosDesfibrados() { return ConverterUtil.converterDoubleDoisDecimais(cocosDesfibrados); }

    public void setCocosDesfibrados(Double cocosDesfibrados) {
        this.cocosDesfibrados = cocosDesfibrados;
    }

    public Double getCri() {
        return ConverterUtil.converterDoubleDoisDecimais(cri);
    }

    public void setCri(Double cri) {
        this.cri = cri;
    }

    public Double getFlococo() {
        return ConverterUtil.converterDoubleDoisDecimais(flococo);
    }

    public void setFlococo(Double flococo) {
        this.flococo = flococo;
    }

    public Double getOleoIndustrialTipoA() {
        return ConverterUtil.converterDoubleDoisDecimais(oleoIndustrialTipoA); }

    public void setOleoIndustrialTipoA(Double oleoIndustrialTipoA) {
        this.oleoIndustrialTipoA = oleoIndustrialTipoA;
    }

    public Double getOleoIndustrialETE() {
        return ConverterUtil.converterDoubleDoisDecimais(oleoIndustrialETE);
    }

    public void setOleoIndustrialETE(Double oleoIndustrialETE) {
        this.oleoIndustrialETE = oleoIndustrialETE;
    }

    public Double getTorta() {
        return ConverterUtil.converterDoubleDoisDecimais(torta);
    }

    public void setTorta(Double torta) {
        this.torta = torta;
    }

    public Double getAguaDeCocoSococo() {
        return ConverterUtil.converterDoubleDoisDecimais(aguaDeCocoSococo);
    }

    public void setAguaDeCocoSococo(Double aguaDeCocoSococo) {
        this.aguaDeCocoSococo = aguaDeCocoSococo;
    }

    public Double getAguaDeCocoVerde() {
        return ConverterUtil.converterDoubleDoisDecimais(aguaDeCocoVerde); }

    public void setAguaDeCocoVerde(Double aguaDeCocoVerde) {
        this.aguaDeCocoVerde = aguaDeCocoVerde;
    }

    public Double getPorcentagemCocoGerminado() {
        return ConverterUtil.converterDoubleDoisDecimais(porcentagemCocoGerminado); }

    public void setPorcentagemCocoGerminado(Double porcentagemCocoGerminado) {
        this.porcentagemCocoGerminado = porcentagemCocoGerminado;
    }

    public Double getTotalDeCacambas() {
        return ConverterUtil.converterDoubleDoisDecimais(totalDeCacambas);
    }

    public void setTotalDeCacambas(Double totalDeCacambas) {
        this.totalDeCacambas = totalDeCacambas;
    }

    public Double getNumeroDeFardos() {
        return ConverterUtil.converterDoubleDoisDecimais(numeroDeFardos);
    }

    public void setNumeroDeFardos(Double numeroDeFardos) {
        this.numeroDeFardos = numeroDeFardos;
    }

    public Double getCaixaPadrao() {
        return ConverterUtil.converterDoubleDoisDecimais(caixaPadrao);
    }

    public void setCaixaPadrao(Double caixaPadrao) {
        this.caixaPadrao = caixaPadrao;
    }

    public String getDiaLancamento() {
        return diaLancamento;
    }

    public void setDiaLancamento(String diaLancamento) {
        this.diaLancamento = diaLancamento;
    }

    public String getMesLancamento() {
        return mesLancamento;
    }

    public void setMesLancamento(String mesLancamento) {
        this.mesLancamento = mesLancamento;
    }

    public String getAnoLancamento() {
        return anoLancamento;
    }

    public void setAnoLancamento(String anoLancamento) {
        this.anoLancamento = anoLancamento;
    }

    public String getDiaMesLancamento() {
        return diaMesLancamento;
    }

    public void setDiaMesLancamento(String diaMesLancamento) {
        this.diaMesLancamento = diaMesLancamento;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ResumoDiario that = (ResumoDiario) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(dataLancamento, that.dataLancamento);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, dataLancamento);
    }


    @Override
    public String toString() {
        return "ResumoDiario{" +
                "id=" + id +
                ", dataLancamento=" + dataLancamento +
                ", cocosProcessados='" + cocosProcessados + '\'' +
                ", cocosDesfibrados='" + cocosDesfibrados + '\'' +
                ", cri='" + cri + '\'' +
                ", flococo='" + flococo + '\'' +
                ", oleoIndustrialTipoA='" + oleoIndustrialTipoA + '\'' +
                ", oleoIndustrialETE='" + oleoIndustrialETE + '\'' +
                ", torta='" + torta + '\'' +
                ", caixaPadrao='" + caixaPadrao + '\'' +
                ", aguaDeCocoSococo='" + aguaDeCocoSococo + '\'' +
                ", aguaDeCocoVerde='" + aguaDeCocoVerde + '\'' +
                ", porcentagemCocoGerminado='" + porcentagemCocoGerminado + '\'' +
                ", totalDeCacambas='" + totalDeCacambas + '\'' +
                ", numeroDeFardos='" + numeroDeFardos + '\'' +
                ", diaLancamento='" + diaLancamento + '\'' +
                ", mesLancamento='" + mesLancamento + '\'' +
                ", anoLancamento='" + anoLancamento + '\'' +
                ", diaMesLancamento='" + diaMesLancamento + '\'' +
                '}';
    }
}