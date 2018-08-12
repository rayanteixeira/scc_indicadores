package br.com.sococo.resumo.services;

import br.com.sococo.resumo.model.Usuario;
import br.com.sococo.resumo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    //@Autowired
    //private BCryptPasswordEncoder bCrypt;

    public Usuario insert(Usuario obj) {

        //String passwordEncoder = bCrypt.encode(obj.getPassword());

        //obj.setPassword(passwordEncoder);

        return usuarioRepository.save(obj);
    }

}
