package br.com.sococo.resumo.resource;

import br.com.sococo.resumo.model.Destinatario;
import br.com.sococo.resumo.resource.util.HeaderUtil;
import br.com.sococo.resumo.services.DestinatarioService;
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
@CrossOrigin(maxAge = 10, origins = {"*"})
public class DestinatarioResource {

    @Autowired
    private DestinatarioService destinatarioService;

    private static final String ENTITY_NAME = "destinatario";

    private final Logger log = LoggerFactory.getLogger(DestinatarioResource.class);

    @PostMapping(value = "/destinatario")
    public ResponseEntity<Destinatario> insert(@RequestBody Destinatario destinatario) throws URISyntaxException {

        if (destinatario.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A id ja consta na base de dados")).body(null);
        }

        Destinatario obj = destinatarioService.insert(destinatario);
        URI uri = new URI("/api/usuario/"+ obj.getId());

        return ResponseEntity.created(uri)
                .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, obj.getId().toString()))
                .body(obj);
    }

    @GetMapping(value = "/destinatario")
    public ResponseEntity<List<Destinatario>> findAll(){

        log.debug("REST request findAll() Usuario");

        List<Destinatario> list = destinatarioService.findAll();

        return ResponseEntity.ok().body(list);
    }

    @DeleteMapping(value = "/destinatario/{id}")
    public void deleteDestinatario(@PathVariable  Long id) {
        if(id != null) {
            destinatarioService.deleteById(id);
        }
    }


}
