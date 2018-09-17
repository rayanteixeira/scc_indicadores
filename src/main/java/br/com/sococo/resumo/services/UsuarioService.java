package br.com.sococo.resumo.services;

import br.com.sococo.resumo.model.Usuario;
import br.com.sococo.resumo.repository.UsuarioRepository;
import br.com.sococo.resumo.services.dto.UsuarioDTO;
import br.com.sococo.resumo.services.dto.UsuarioNewDTO;
import br.com.sococo.resumo.services.exceptions.DataIntegrityException;
import br.com.sococo.resumo.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private BCryptPasswordEncoder bCrypt;

    public Usuario find(Long id) {

        //UserSS user = UserService.authenticated();

//        if (user == null || !user.hasRole(Perfil.ADMIN) && !id.equals(user.getId())) {
//            throw new AuthorizationException("Acesso Negado");
//        }

        Optional<Usuario> obj = usuarioRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException(
                "Objeto não encontrado! Id: " + id + ", tipo: " + Usuario.class.getName()));
    }

    public Usuario insert(Usuario obj) {
        obj.setId(null);
        usuarioRepository.save(obj);
        return obj;
    }

    public Usuario update(Usuario obj) {
        Usuario newObj = find(obj.getId());
        updateData(newObj, obj);
        return usuarioRepository.save(newObj);
    }

    public List<Usuario> findAll() {
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
        return new Usuario(objDto.getId(), objDto.getNome(), objDto.getSobrenome(), null);
    }

    public Usuario fromDTO(UsuarioNewDTO objDto) {
        return new Usuario(null, objDto.getNome(), objDto.getSobrenome(), bCrypt.encode(objDto.getPassword()));
    }
}
