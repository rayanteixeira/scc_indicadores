package br.com.sococo.resumo.services;

import br.com.sococo.resumo.model.Permissao;
import br.com.sococo.resumo.model.Usuario;
import br.com.sococo.resumo.repository.PermissapRepository;
import br.com.sococo.resumo.repository.UsuarioRepository;
import br.com.sococo.resumo.security.UserSS;
import br.com.sococo.resumo.services.dto.UsuarioDTO;
import br.com.sococo.resumo.services.dto.UsuarioNewDTO;
import br.com.sococo.resumo.services.exceptions.AuthorizationException;
import br.com.sococo.resumo.services.exceptions.DataIntegrityException;
import br.com.sococo.resumo.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PermissapRepository permissapRepository;

    @Autowired
    private BCryptPasswordEncoder bCrypt;

    public Usuario find(Long id) {

        UserSS user = UserService.authenticated();

        if (user == null || !user.isAdmin() && !id.equals(user.getId())) {
            throw new AuthorizationException("Acesso Negado");
        }

        Optional<Usuario> obj = usuarioRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException(
                "Objeto não encontrado! Id: " + id + ", tipo: " + Usuario.class.getName()));
    }

    public Usuario insert(Usuario obj) {
        obj.setId(null);
        obj.setEnabled(Boolean.TRUE);
        obj.setPermissoes(addPermissaoUser());
        Usuario objsalvo = usuarioRepository.save(obj);
        return objsalvo;
    }

    private List<Permissao> addPermissaoUser() {
        List<Permissao> list = new ArrayList<>();
        list.add(permissapRepository.findByDescricao("ROLE_USER"));
        return list;
    }

    public Usuario update(Usuario obj) {
        Usuario newObj = find(obj.getId());
        updateData(newObj, obj);
        return usuarioRepository.save(newObj);
    }

    public List<Usuario> findAll() {
        UserSS user = UserService.authenticated();

        if (user == null || !user.isAdmin()) {
            throw new AuthorizationException("Acesso Negado");
        }
        return usuarioRepository.findAll();
    }

    private void updateData(Usuario newObj, Usuario obj) {
        newObj.setNome(obj.getNome());
        newObj.setSobrenome(obj.getSobrenome());
    }

    public void delete(Long id) {
        find(id);
        try {
            usuarioRepository.deleteById(id);
        } catch (DataIntegrityViolationException e) {
            throw new DataIntegrityException("Não é possível excluir o Usuário");
        }
    }

    public Usuario fromDTO(UsuarioDTO objDto) {
        return new Usuario(objDto.getId(), objDto.getNome(), objDto.getSobrenome(), objDto.getUsername(), objDto.getEmail());
    }

    public Usuario fromDTO(UsuarioNewDTO objDto) {
        return new Usuario(objDto.getNome(), objDto.getSobrenome(), objDto.getUsername(), objDto.getEmail(), bCrypt.encode(objDto.getPassword()));
    }
}
