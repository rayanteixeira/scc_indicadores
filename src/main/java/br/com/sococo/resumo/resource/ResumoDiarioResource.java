package br.com.sococo.resumo.resource;

import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.model.ResumoDiarioFilter;
import br.com.sococo.resumo.resource.util.HeaderUtil;
import br.com.sococo.resumo.services.CocosService;
import br.com.sococo.resumo.services.CriFlococoService;
import br.com.sococo.resumo.services.OleosService;
import br.com.sococo.resumo.services.ResumoDiarioService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;


@RestController
@RequestMapping(value = "api")
@CrossOrigin(maxAge = 10, origins = {"*"})
public class ResumoDiarioResource {

    private static final String ENTITY_NAME = "resumo-diario";

    private final Logger log = LoggerFactory.getLogger(ResumoDiarioResource.class);
    @Autowired
    private ResumoDiarioService resumoDiarioService;

    @Autowired
    private CocosService cocosService;

    @Autowired
    private OleosService oleosService;

    @Autowired
    private CriFlococoService criFlococoService;

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping(value = "/lancamento-do-dia")
    public ResponseEntity<ResumoDiario> insert(@RequestBody ResumoDiario resumoDiario) throws URISyntaxException {
        log.debug("REST request to save Resumo Diario : {}", resumoDiario);

        if (resumoDiario.getId() != null) {
            return ResponseEntity.badRequest()
                    .headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "O id ja consta na base de dados"))
                    .body(null);
        }

        resumoDiario.setDataLancamento(LocalDate.now());
        LocalDate date = resumoDiario.getDataLancamento();


        // separando os valores de data_lancamento
        resumoDiario.setDiaLancamento(String.valueOf(date.getDayOfMonth()));
        resumoDiario.setMesLancamento(String.valueOf(date.getMonthValue()));
        resumoDiario.setAnoLancamento(String.valueOf(date.getYear()));
        resumoDiario.setDiaMesLancamento(String.valueOf(date.getDayOfMonth() + "-" + date.getMonthValue()));

        ResumoDiario obj = resumoDiarioService.insert(resumoDiario);
        URI uri = new URI("/api/lancamento-do-dia/" + obj.getId());

        SimpleMailMessage message = new SimpleMailMessage();

        System.out.println("RESUMO"+ resumoDiario);
        message.setTo("jaironsousa@gmail.com");
        message.setFrom("jaironsousa@gmail.com");
        message.setText("Hello...estou funcionando");
        message.setSubject("Teste envio de e-mail");


        try {
            mailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return ResponseEntity.created(uri)
                .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, obj.getId().toString()))
                .body(obj);
    }

    @GetMapping(value = "/lancamentos")
    public ResponseEntity<List<ResumoDiario>> findAll() {

        log.debug("REST request findAll() Resumo Diario");

        List<ResumoDiario> list = resumoDiarioService.findAll();

        return ResponseEntity
                .ok()
                .body(list);
    }
    @GetMapping(value = "/resumo-do-dia")
    public ResponseEntity<List<ResumoDiario>> fingResumoDiario() {

        log.debug("REST request fingResumoDiario() Resumo Diario");

        List<ResumoDiario> resumoDoDia = resumoDiarioService.fingResumoDiario();

        return ResponseEntity
                .ok()
                .body(resumoDoDia);
    }

    @GetMapping(value = "/resumo-diario/{id}")
    public ResponseEntity<?> find(@PathVariable Long id) {
        ResumoDiario obj = resumoDiarioService.find(id);
        return ResponseEntity
                .ok(obj);
    }

    @GetMapping(value = "/dashboard/resumo-coco-processados-por-ano/{ano}")
    public ResponseEntity<List<Double>> findCococoProcessadosAno(@PathVariable String ano) {
        List<Double> lists = cocosService.findCocoProcessadoAno(ano);
        return ResponseEntity
                .ok()
                .body(lists);
    }

    @GetMapping(value = "/dashboard/resumo-coco-processados-por-mes/{mes}")
    public ResponseEntity<List<Double>> findCococoProcessadosMes(@PathVariable String mes) {
        List<Double> lists = cocosService.findCocoProcessadoMes(mes);
        return ResponseEntity
                .ok()
                .body(lists);
    }

    @GetMapping(value = "/dashboard/resumo-coco-desfibrados-por-ano/{ano}")
    public ResponseEntity<List<Double>> findCococoDesfibradosAno(@PathVariable String ano) {
        List<Double> lists = cocosService.findCocoDesfibradosAno(ano);
        return ResponseEntity
                .ok()
                .body(lists);
    }

    @GetMapping(value = "/dashboard/resumo-coco-desfibrados-por-mes/{mes}")
    public ResponseEntity<List<Double>> findCococoDesfibradosMes(@PathVariable String mes) {
        List<Double> lists = cocosService.findCocoDesfibradosMes(mes);
        return ResponseEntity
                .ok()
                .body(lists);
    }

    @GetMapping(value = "/dashboard/resumo-oleo-industrial-ete-por-ano/{ano}")
    public ResponseEntity<List<Double>> findOleoIndustrialETEPorAno(@PathVariable String ano) {
        List<Double> lists = oleosService.findOleoIndustrialETEPorAno(ano);
        return ResponseEntity
                .ok()
                .body(lists);
    }

    @GetMapping(value = "/dashboard/resumo-oleo-industrial-ete-por-mes/{mes}")
    public ResponseEntity<List<Double>> findOleoIndustrialETEPorMes(@PathVariable String mes) {
        List<Double> lists = oleosService.findOleoIndustrialETEPorMes(mes);
        return ResponseEntity
                .ok()
                .body(lists);
    }

    @GetMapping(value = "/dashboard/resumo-oleo-industrial-tipoA-por-ano/{ano}")
    public ResponseEntity<List<Double>> findOleoIndustrialTipoAPorAno(@PathVariable String ano) {
        List<Double> lists = oleosService.findOleoIndustrialTipoAPorAno(ano);
        return ResponseEntity
                .ok()
                .body(lists);
    }

    @GetMapping(value = "/dashboard/resumo-oleo-industrial-tipoA-por-mes/{mes}")
    public ResponseEntity<List<Double>> findOleoIndustrialTipoAPorMes(@PathVariable String mes) {
        List<Double> lists = oleosService.findOleoIndustrialTipoAPorMes(mes);
        return ResponseEntity
                .ok()
                .body(lists);
    }

    @GetMapping(value = "/dashboard/resumo-cri-por-ano/{ano}")
    public ResponseEntity<List<Double>> findResumoDiarioCRIPorAno(@PathVariable String ano) {
        List<Double> lists = criFlococoService.findResumoDiarioCRIPorAno(ano);
        return ResponseEntity
                .ok()
                .body(lists);
    }

    @GetMapping(value = "/dashboard/resumo-cri-por-mes/{mes}")
    public ResponseEntity<List<Double>> findResumoDiarioCRIPorMes(@PathVariable String mes) {
        List<Double> lists = criFlococoService.findResumoDiarioCRIPorMes(mes);
        return ResponseEntity
                .ok()
                .body(lists);
    }

    @GetMapping(value = "/dashboard/resumo-flococo-por-ano/{ano}")
    public ResponseEntity<List<Double>> findResumoDiarioFlococoPorAno(@PathVariable String ano) {
        List<Double> lists = criFlococoService.findResumoDiarioFlococoPorAno(ano);
        return ResponseEntity
                .ok()
                .body(lists);
    }

    @GetMapping(value = "/dashboard/resumo-flococo-por-mes/{mes}")
    public ResponseEntity<List<Double>> findResumoDiarioFlococoPorMes(@PathVariable String mes) {
        List<Double> lists = criFlococoService.findResumoDiarioFlococoPorMes(mes);
        return ResponseEntity
                .ok()
                .body(lists);
    }

    @GetMapping(value = "/dashboard/ano/{ano}")
    public ResponseEntity<List<String>> findResumoDiarioMeses(@PathVariable String ano) {
        List<String> lists = resumoDiarioService.findByMeses(ano);
        return ResponseEntity
                .ok()
                .body(lists);
    }

    @GetMapping(value = "/dashboard/mes/{mes}")
    public ResponseEntity<List<String>> findResumoDiarioDias(@PathVariable String mes) {
        List<String> lists = resumoDiarioService.findByDias(mes);
        return ResponseEntity
                .ok()
                .body(lists);
    }

    @GetMapping("/buscaPorData")
    public List<ResumoDiario> buscaPorData(ResumoDiarioFilter filter) {
        return resumoDiarioService.buscaPorData(filter);
    }

}
