package br.com.sococo.resumo.services;

import br.com.sococo.resumo.model.Destinatario;
import br.com.sococo.resumo.model.Usuario;
import br.com.sococo.resumo.repository.DestinatarioRepository;
import br.com.sococo.resumo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class DestinatarioService {

    @Autowired
    private DestinatarioRepository destinatarioRepository;

    public Destinatario insert(Destinatario obj) {
        return destinatarioRepository.save(obj);
    }
    public List<Destinatario> findAll() {
        return destinatarioRepository.findAll();
    }

    public void deleteById(Long id) {
        destinatarioRepository.deleteById(id);
    }
}
