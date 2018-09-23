package br.com.sococo.resumo.repository;

import br.com.sococo.resumo.model.Permissao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PermissapRepository extends JpaRepository<Permissao, Long> {
    public Permissao findByDescricao(String nome);
}
