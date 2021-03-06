package br.com.sococo.resumo.services.dto;

import br.com.sococo.resumo.model.Usuario;

import java.io.Serializable;


public class UsuarioDTO implements Serializable {

    private Long id;

    private String nome;

    private String sobrenome;

    private String username;

    private String email;

    private boolean enabled = true;

    public UsuarioDTO() {
    }

    public UsuarioDTO(Long id, String nome, String sobrenome, String username) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.username = username;
    }

    public UsuarioDTO(Usuario usuario) {
        this(usuario.getId(), usuario.getNome(), usuario.getSobrenome(),usuario.getUsername());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
}
