package br.com.sococo.resumo.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.Objects;

@Entity
public class DataResumoDiario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "data_lancamento")
    private LocalDate dataLancamento;

    @NotNull
    @Column(name = "dia_lancamento")
    private String diaLancamento;

    @NotNull
    @Column(name = "mes_lancamento")
    private String mesLancamento;

    @NotNull
    @Column(name = "ano_lancamento")
    private String anoLancamento;

    @NotNull
    @Column(name = "dia_mes_lancamento")
    private String diaMesLancamento;


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
        DataResumoDiario that = (DataResumoDiario) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(dataLancamento, that.dataLancamento);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, dataLancamento);
    }

    @Override
    public String toString() {
        return "DataResumoDiario{" +
                "id=" + id +
                ", dataLancamento=" + dataLancamento +
                ", diaLancamento='" + diaLancamento + '\'' +
                ", mesLancamento='" + mesLancamento + '\'' +
                ", anoLancamento='" + anoLancamento + '\'' +
                ", diaMesLancamento='" + diaMesLancamento + '\'' +
                '}';
    }
}
