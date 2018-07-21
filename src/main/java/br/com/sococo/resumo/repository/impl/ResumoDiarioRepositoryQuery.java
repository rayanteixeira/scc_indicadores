package br.com.sococo.resumo.repository.impl;

import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.model.FiltroBusca;

import java.util.List;

public interface ResumoDiarioRepositoryQuery {

    public List<ResumoDiario> buscarPorData(FiltroBusca filter);
}
