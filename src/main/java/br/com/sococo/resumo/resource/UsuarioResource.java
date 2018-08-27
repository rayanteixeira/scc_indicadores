package br.com.sococo.resumo.resource;

import br.com.sococo.resumo.services.UsuarioService;
import br.com.sococo.resumo.services.dto.UsuarioDTO;
import br.com.sococo.resumo.model.Usuario;
import br.com.sococo.resumo.resource.util.HeaderUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping(value = "api")
//@CrossOrigin(maxAge = 10, origins = {"http://localhost:4200"})
public class UsuarioResource {

    @Autowired
    private UsuarioService usuarioService;

    private static final String ENTITY_NAME = "usuario";

    private final Logger log = LoggerFactory.getLogger(UsuarioResource.class);

    @PostMapping(value = "/usuario")
    public ResponseEntity<Usuario> insert(@RequestBody Usuario usuario) throws URISyntaxException {

        log.debug("REST request to save Usuario : {}", usuario);

        if (usuario.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A id ja consta na base de dados")).body(null);
        }

        Usuario obj = usuarioService.insert(usuario);
        URI uri = new URI("/api/usuario/"+ obj.getId());

        return ResponseEntity.created(uri)
                .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, obj.getId().toString()))
                .body(obj);
    }

//    @GetMapping(value = "/usuario")
//    public ResponseEntity<List<UsuarioDTO>> findAll(){
//
//        log.debug("REST request findAll() Usuario");
//
//        List<UsuarioDTO> list = usuarioService.findAll();
//
//        return ResponseEntity.ok().body(list);
//    }

//    @GetMapping(value = "/usuario/{id}")
//    public ResponseEntity<?> find(@PathVariable Long id) {
//        UsuarioDTO obj = usuarioService.find(id);
//
//        return ResponseEntity.ok(obj);
//    }



}
