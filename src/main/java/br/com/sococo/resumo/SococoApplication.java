package br.com.sococo.resumo;

import br.com.sococo.resumo.model.Usuario;
import br.com.sococo.resumo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Optional;

@SpringBootApplication
public class SococoApplication implements CommandLineRunner {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public static void main(String[] args) {
        SpringApplication.run(SococoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        Optional<Usuario> usuario = usuarioRepository.findByUsername("admin");

        if (usuario.isPresent()) {
            System.out.println(usuario.get().getNome());
        } else System.out.println("ERRO");

    }
}
