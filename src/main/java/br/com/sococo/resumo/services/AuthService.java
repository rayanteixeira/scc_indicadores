package br.com.sococo.resumo.services;

import br.com.sococo.resumo.envio.Mailer;
import br.com.sococo.resumo.model.Usuario;
import br.com.sococo.resumo.repository.UsuarioRepository;
import br.com.sococo.resumo.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class AuthService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private BCryptPasswordEncoder bCrypt;

    @Autowired
    private Mailer mailerService;

    private Random rand = new Random();

    public void sendNewPassword(String email) {

        Usuario usuario = usuarioRepository.findByEmail(email);

        if (usuario == null) {
            throw new ObjectNotFoundException("Email não encontrado!");
        }

        String newPassword = newPassword();
        usuario.setPassword(bCrypt.encode(newPassword));

        usuarioRepository.save(usuario);

        mailerService.sendNewPasswordEmail(usuario, newPassword);

    }

    private String newPassword() {
        char[] vet = new char[6];
        for (int i = 0; i < vet.length; i++) {
            vet[i] = ramdomChar();
        }
        return new String(vet);
    }

    private char ramdomChar() {
        int opt = rand.nextInt(3);
        if (opt == 0) {// Gera um digito
            return (char) (rand.nextInt(10) + 48);
        } else if (opt == 1) {// Gera letra Maiuscula
            return (char) (rand.nextInt(26) + 65);
        } else {// Gera letra Minuscula
            return (char) (rand.nextInt(26) + 97);
        }
    }
}
