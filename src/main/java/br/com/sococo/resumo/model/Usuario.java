package br.com.sococo.resumo.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

import br.com.sococo.resumo.services.dto.UsuarioDTO;
import br.com.sococo.resumo.model.enums.Perfil;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Usuario implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "O nome é obrigatório")
    @Column(nullable = false)
    private String nome;

    private String sobrenome;

    @NotEmpty(message = "O código é obrigatório")
    @Column(name = "codigo", nullable = false, unique = true)
    private String codigo;

    @NotEmpty(message = "O username é obrigatório")
    @Column(nullable = false, unique = true)
    private String username;

    //@NotEmpty(message = "A senha é obrigatória")
    @JsonIgnore
    @Column(name = "password", nullable = false)
    private String password;

    // pattern = "dd/MM/yyyy HH:mm:ss"
    //@DateTimeFormat(pattern = "dd/MM/yyyy")
    //@Temporal(TemporalType.DATE)
    @Column(name = "data_cadastro", nullable = false)
    private LocalDate dataCadastro;

    @Column(name = "enabled")
    private boolean enabled = true;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "PERFIS")
    private Set<Integer> perfis = new HashSet<>();

    public Usuario() {
        addPerfil(Perfil.USER);
    }

    public Usuario(Long id, String nome, String sobrenome, String password) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.password = password;
        addPerfil(Perfil.USER);
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
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

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDate getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(LocalDate dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public Set<Perfil> getPerfis() {

        return perfis.stream().map(x -> Perfil.toEnum(x)).collect(Collectors.toSet());
    }

    public void addPerfil(Perfil perfil) {
        perfis.add(perfil.getCod());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Usuario usuario = (Usuario) o;
        return Objects.equals(id, usuario.id);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", sobrenome='" + sobrenome + '\'' +
                ", codigo='" + codigo + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", dataCadastro=" + dataCadastro +
                ", enabled=" + enabled +
                '}';
    }
}
