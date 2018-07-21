package br.com.sococo.resumo.resource;

import br.com.sococo.resumo.model.FiltroBusca;
import br.com.sococo.resumo.model.dashboard.EntidadesDias;
import br.com.sococo.resumo.model.dashboard.EntidadesMeses;
import br.com.sococo.resumo.services.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/dashboard")
@CrossOrigin(maxAge = 10, origins = {"*"})
public class DashboardResource {

    @Autowired
    private DashboardService dashiboardService;

    @GetMapping(value = "/mes")
    public ResponseEntity<List<EntidadesMeses>> findAno(FiltroBusca filter) {
        List<EntidadesMeses> lists = dashiboardService.findAno(filter);
        return ResponseEntity
                .ok()
                .body(lists);
    }

    @GetMapping(value = "/dia")
    public ResponseEntity<List<EntidadesDias>> findMes(FiltroBusca filter) {
        List<EntidadesDias> lists = dashiboardService.findMes(filter);
        return ResponseEntity
                .ok()
                .body(lists);
    }
}
