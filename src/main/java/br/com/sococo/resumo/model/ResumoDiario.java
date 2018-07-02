package br.com.sococo.resumo.model;

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
    @Column(name = "data_lancamento")
    private LocalDate dataLancamento;

    @Column(name = "cocos_processados")
    private String cocosProcessados;

    @Column(name = "cocos_desfibrados")
    private String cocosDesfibrados;

    private String cri;

    private String flococo;

    @Column(name = "oleo_industrial_tipo_a")
    private String oleoIndustrialTipoA;

    @Column(name = "oleo_industrial_ete")
    private String oleoIndustrialETE;

    private String torta;

    // ACQUA
    @Column(name = "agua_coco_sococo")
    private String aguaDeCocoSococo;

    @Column(name = "agua_coco_verde")
    private String aguaDeCocoVerde;

    @Column(name = "porcentagem_coco_germinado")
    private Double porcentagemCocoGerminado;

    @Column(name = "total_cacambas")
    private String totalDeCacambas;

    @Column(name = "caixa_padrao")
    private String caixaPadrao;

    //AMAFIBRA
    @Column(name = "numero_fardos")
    private String numeroDeFardos;

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

    public ResumoDiario(LocalDate dataLancamento, String cocosProcessados, String cocosDesfibrados, String cri, String flococo, String oleoIndustrialTipoA, String oleoIndustrialETE, String torta, String aguaDeCocoSococo, String aguaDeCocoVerde, String totalDeCacambas, String caixaPadrao, String numeroDeFardos, Double porcentagemCocoGerminado) {
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

    public String getCocosProcessados() {
        return cocosProcessados;
    }

    public void setCocosProcessados(String cocosProcessados) {
        this.cocosProcessados = cocosProcessados;
    }

    public String getCocosDesfibrados() {
        return cocosDesfibrados;
    }

    public void setCocosDesfibrados(String cocosDesfibrados) {
        this.cocosDesfibrados = cocosDesfibrados;
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

    public String getOleoIndustrialTipoA() {
        return oleoIndustrialTipoA;
    }

    public void setOleoIndustrialTipoA(String oleoIndustrialTipoA) {
        this.oleoIndustrialTipoA = oleoIndustrialTipoA;
    }

    public String getOleoIndustrialETE() {
        return oleoIndustrialETE;
    }

    public void setOleoIndustrialETE(String oleoIndustrialETE) {
        this.oleoIndustrialETE = oleoIndustrialETE;
    }

    public String getTorta() {
        return torta;
    }

    public void setTorta(String torta) {
        this.torta = torta;
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

    public Double getPorcentagemCocoGerminado() {
        return porcentagemCocoGerminado;
    }

    public void setPorcentagemCocoGerminado(Double porcentagemCocoGerminado) {
        this.porcentagemCocoGerminado = porcentagemCocoGerminado;
    }

    public String getTotalDeCacambas() {
        return totalDeCacambas;
    }

    public void setTotalDeCacambas(String totalDeCacambas) {
        this.totalDeCacambas = totalDeCacambas;
    }

    public String getNumeroDeFardos() {
        return numeroDeFardos;
    }

    public void setNumeroDeFardos(String numeroDeFardos) {
        this.numeroDeFardos = numeroDeFardos;
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

    public String getCaixaPadrao() {
        return caixaPadrao;
    }

    public void setCaixaPadrao(String caixaPadrao) {
        this.caixaPadrao = caixaPadrao;
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