package br.com.sococo.resumo.resource;

import br.com.sococo.resumo.model.FiltroBusca;
import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.resource.util.HeaderUtil;
import br.com.sococo.resumo.services.DashboardService;
import br.com.sococo.resumo.services.ResumoDiarioService;
import br.com.sococo.resumo.services.dto.LancamentoDTO;
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
public class ResumoDiarioResource {

    private static final String ENTITY_NAME = "resumo-diario";

    private final Logger log = LoggerFactory.getLogger(ResumoDiarioResource.class);

    @Autowired
    private ResumoDiarioService resumoDiarioService;

    /**
     *POST - Usado para cadastrar um resumo diário
     * @return
     */
    @PostMapping(value = "/salva-resumo") //salva resumo
    public ResponseEntity<ResumoDiario> insert(@RequestBody ResumoDiario resumoDiario) throws URISyntaxException {
        log.debug("REST request to save Resumo Diario : {}", resumoDiario);

        if (resumoDiario.getId() != null) {
            return ResponseEntity.badRequest()
                    .headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "O id ja consta na base de dados"))
                    .body(null);
        }

        ResumoDiario obj = resumoDiarioService.insert(resumoDiario);
        URI uri = new URI("/api/lancamento-do-dia/" + obj.getId());


        return ResponseEntity.created(uri)
                .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, obj.getId().toString()))
                .body(obj);
    }

    /**
     * Lista com Resumos Diários Cadastrados
     * @return
     */
    @GetMapping(value = "/lista-resumo") //lista de resumos
    public ResponseEntity<List<ResumoDiario>> findAll() {

        log.debug("REST request findAll() Resumo Diario");

        List<ResumoDiario> list = resumoDiarioService.findAll();

        return ResponseEntity
                .ok()
                .body(list);
    }

    /**
     * É usado para mostra na tabela de resumo diário o último resumo cadastrado,
     * @return
     */
    @GetMapping(value = "/resumo-do-dia")
    public ResponseEntity<List<ResumoDiario>> fingResumoDiario() {

        log.debug("REST request fingResumoDiario() Resumo Diario");

        List<ResumoDiario> resumoDoDia = resumoDiarioService.fingResumoDoDia();

        return ResponseEntity
                .ok()
                .body(resumoDoDia);
    }

    @GetMapping("/resumo-diario")
    public LancamentoDTO buscaResumoDiario(FiltroBusca filter) {
        // return resumoDiarioService.buscaPorSemana(filter);
        return resumoDiarioService.buscaResumo(filter);
    }

    @GetMapping("/busca-por-data")
    public List<ResumoDiario> buscaPorData(FiltroBusca filter) {
      // return resumoDiarioService.buscaPorSemana(filter);
       return resumoDiarioService.buscaPorData(filter);
    }

    @GetMapping("/busca-por-semana")
    public List<Object[]> buscaPorSemana(FiltroBusca filter) {
        // return resumoDiarioService.buscaPorSemana(filter);
        return resumoDiarioService.buscaPorSemana(filter);
    }

  /*  @GetMapping("/buscaPorMes")
    public List<ResumoDiario> buscaPorMes(FiltroBusca filter) {
        return resumoDiarioService.buscaPorMes(filter);
    }*/

    /*@GetMapping(value = "/resumo-diario/{id}")
    public ResponseEntity<?> find(@PathVariable Long id) {
        ResumoDiario obj = resumoDiarioService.find(id);
        return ResponseEntity
                .ok(obj);
    }*/
}
