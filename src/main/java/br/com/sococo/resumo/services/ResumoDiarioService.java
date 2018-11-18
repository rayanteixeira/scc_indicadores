package br.com.sococo.resumo.services;

import br.com.sococo.resumo.envio.Mailer;
import br.com.sococo.resumo.model.FiltroBusca;
import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.repository.ResumoDiarioRepository;
import br.com.sococo.resumo.services.converter.ConverterUtil;
import br.com.sococo.resumo.services.dto.LancamentoDTO;
import br.com.sococo.resumo.services.dto.ResumoDiarioDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ResumoDiarioService {

    @Autowired
    private ResumoDiarioRepository resumoDiarioRepository;

    @Autowired
    private Mailer mailer;

    public ResumoDiario insert(ResumoDiario resumoDiario) {
        LocalDate date = resumoDiario.getDataLancamento();
        // separando os valores de data_lancamento
        //ResumoDiario resumoDiario = resumoDiarioDTO.toEntity(resumoDiarioDTO);
        resumoDiario.setDiaLancamento(String.valueOf(date.getDayOfMonth()));
        resumoDiario.setMesLancamento(String.valueOf(date.getMonthValue()));
        resumoDiario.setAnoLancamento(String.valueOf(date.getYear()));
        resumoDiario.setDiaMesLancamento(String.valueOf(date.getDayOfMonth() + "-" + date.getMonthValue()));

        //resumoDiario.setId(
                resumoDiarioRepository.save(resumoDiario);//.getId());

        mailer.enviarEmail(resumoDiario);

        return resumoDiario;
    }

    public List<ResumoDiario> findAll() {
        return resumoDiarioRepository.findAll();
    }

    public ResumoDiario find(Long id) {
        Optional<ResumoDiario> obj = resumoDiarioRepository.findById(id);
        return obj.orElse(null);
    }

    public List<ResumoDiario> fingResumoDoDia() {
        return resumoDiarioRepository.findResumoDoDia();
    }

    public List<ResumoDiario> buscaPorAnoMes(FiltroBusca filter) {

        return resumoDiarioRepository.findByDataLancamento(filter.getDataLancamento());
    }

    public LancamentoDTO buscaResumo(FiltroBusca filter) {
        LancamentoDTO lancamentoDTO = new LancamentoDTO();

        filter.setMesLancamento(String.valueOf(filter.getDataLancamento().getMonthValue()));
        filter.setAnoLancamento(String.valueOf(filter.getDataLancamento().getYear()));


        lancamentoDTO.setResumosDiarios(resumoDiarioRepository.findByDataLancamento(filter.getDataLancamento()));
        lancamentoDTO.setResumosMensal(resumoDiarioRepository.findByMesLancamento(filter.getMesLancamento(), filter.getAnoLancamento()));
        //lancamentoDTO.setBuscaSemanal(resumoDiarioRepository.findByDiasDaSemana(filter.getDataLancamento()));
        ResumoDiario resumoDiario = new ResumoDiario();
        List<ResumoDiario> listaResumoDiario = new ArrayList<>();

        for ( Object[] object : resumoDiarioRepository.findByDiasDaSemana(filter.getDataLancamento())) {
            if(object[0] == null && object[1] == null && object[2] == null && object[3] == null
                    && object[4] == null && object[5] == null && object[6] == null && object[7] == null && object[8] == null
                    && object[9] == null && object[10] == null && object[11] == null && object[12] == null){

                lancamentoDTO.setBuscaSemanal(new ArrayList<>());
            }else {

                resumoDiario.setCocosProcessados(object[0].toString());
                resumoDiario.setCocosDesfibrados(object[1].toString());
                resumoDiario.setCri(object[2].toString());
                resumoDiario.setFlococo(object[3].toString());
                resumoDiario.setOleoIndustrialTipoA(object[4].toString());
                resumoDiario.setOleoIndustrialETE(object[5].toString());
                resumoDiario.setTorta(object[6].toString());
                resumoDiario.setAguaDeCocoSococo(object[7].toString());
                resumoDiario.setAguaDeCocoVerde(object[8].toString());
                resumoDiario.setCaixaPadrao(object[9].toString());
                resumoDiario.setPorcentagemCocoGerminado(Double.parseDouble(object[10].toString()));
                resumoDiario.setTotalDeCacambas(object[11].toString());
                resumoDiario.setNumeroDeFardos(object[12].toString());
                listaResumoDiario.add(resumoDiario);
            }
        }
        lancamentoDTO.setBuscaSemanal(listaResumoDiario);



        return lancamentoDTO;
    }

}