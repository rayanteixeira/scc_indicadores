package br.com.sococo.resumo.resource;

import br.com.sococo.resumo.model.Usuario;
import br.com.sococo.resumo.resource.util.HeaderUtil;
import br.com.sococo.resumo.services.UsuarioService;
import br.com.sococo.resumo.services.dto.UsuarioNewDTO;
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
public class UsuarioResource {

    @Autowired
    private UsuarioService usuarioService;

    private static final String ENTITY_NAME = "usuario";

    private final Logger log = LoggerFactory.getLogger(UsuarioResource.class);

    @PostMapping(value = "/usuario")
    public ResponseEntity<Usuario> insert(@RequestBody UsuarioNewDTO usuarioDTO) throws URISyntaxException {
        log.debug("REST request to save Usuario : {}", usuarioDTO);
//        if (usuarioDTO.getId() != null) {
//            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A id ja consta na base de dados")).body(null);
//        }

        Usuario obj = usuarioService.fromDTO(usuarioDTO);

        obj = usuarioService.insert(obj);
        URI uri = new URI("/api/usuario/" + obj.getId());

        return ResponseEntity.created(uri)
                .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, obj.getId().toString()))
                .body(obj);
    }

    @GetMapping(value = "/usuario")
    public ResponseEntity<List<Usuario>> findAll() {

        log.debug("REST request findAll() Usuario");

        return ResponseEntity.ok().body(usuarioService.findAll());
    }

    @GetMapping(value = "/usuario/{id}")
    public ResponseEntity<?> find(@PathVariable Long id) {
        Usuario obj = usuarioService.find(id);
        return ResponseEntity.ok().body(obj);
    }

    @GetMapping("/")
    public String inicio() {
        return "redirect:/login";
    }

}
