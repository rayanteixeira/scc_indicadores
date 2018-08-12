package br.com.sococo.resumo.resource;

import br.com.sococo.resumo.model.FiltroBusca;
import br.com.sococo.resumo.model.Dashboard;
import br.com.sococo.resumo.services.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "api/dashboard")
@CrossOrigin(maxAge = 10, origins = {"*"})
public class DashboardResource {

    @Autowired
    private DashboardService dashiboardService;

    @GetMapping(value = "/ano")
    public ResponseEntity<List<Dashboard>> findAno(FiltroBusca filter) {
        List<Dashboard> lists = dashiboardService.findAno(filter);
        return ResponseEntity
                .ok()
                .body(lists);
    }

    @GetMapping(value = "/mes")
    public ResponseEntity<List<Dashboard>> findMes(FiltroBusca filter) {
        List<Dashboard> lists = dashiboardService.findMes(filter);
        return ResponseEntity
                .ok()
                .body(lists);
    }
}
