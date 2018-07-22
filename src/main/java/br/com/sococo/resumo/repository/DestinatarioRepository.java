package br.com.sococo.resumo.repository;

import br.com.sococo.resumo.model.Destinatario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DestinatarioRepository extends JpaRepository<Destinatario, Long> {
}
