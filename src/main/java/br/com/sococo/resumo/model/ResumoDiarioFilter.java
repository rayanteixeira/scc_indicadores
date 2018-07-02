package br.com.sococo.resumo.model;

import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

public class ResumoDiarioFilter {

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dataLancamento;

    public LocalDate getDataLancamento() {
        return dataLancamento;
    }

    public void setDataLancamento(LocalDate dataLancamento) {
        this.dataLancamento = dataLancamento;
    }
}
