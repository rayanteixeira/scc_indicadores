package br.com.sococo.resumo.services;

import br.com.sococo.resumo.services.dto.UsuarioDTO;
// import br.com.sococo.resumo.services.mapper.UsuarioMapper;
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

  //  @Autowired
   // private UsuarioMapper usuarioMapper;

    //@Autowired
    //private BCryptPasswordEncoder bCrypt;

    public Usuario insert(Usuario obj) {

        //String passwordEncoder = bCrypt.encode(obj.getPassword());

        //obj.setPassword(passwordEncoder);

        return usuarioRepository.save(obj);
    }

  /*  public List<UsuarioDTO> findAll() {

        List<UsuarioDTO> listObjDTO = usuarioMapper.toDTO(usuarioRepository.findAll());

       return listObjDTO;
    }

    public UsuarioDTO find(Long id) {
        Optional<Usuario> obj = usuarioRepository.findById(id);
        UsuarioDTO objDTO = usuarioMapper.toDTO(obj.orElse(null));
        return objDTO;

//        Usuario obj = usuarioRepository.findOne(id);
//        if (obj.getId() == null) {
//            return null;
//        }

//        UsuarioDTO objDTO = usuarioMapper.toDto(obj);
//        return objDTO;
    }

    */
}
