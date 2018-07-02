package br.com.sococo.resumo.repository.impl;

import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.model.ResumoDiarioFilter;

import java.time.LocalDate;
import java.util.List;

public interface ResumoDiarioRepositoryQuery {

    public List<ResumoDiario> buscarPorData(ResumoDiarioFilter filter);
}
