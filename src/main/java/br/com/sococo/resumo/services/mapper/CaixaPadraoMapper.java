package br.com.sococo.resumo.services.mapper;

import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.services.dto.CaixaPadraoDTO;
import br.com.sococo.resumo.services.dto.TortaDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class CaixaPadraoMapper implements EntityMapper<CaixaPadraoDTO, ResumoDiario> {

    @Override
    public ResumoDiario toEntity(CaixaPadraoDTO dto) {
        return null;
    }

    @Override
    public CaixaPadraoDTO toDTO(ResumoDiario entity) {
        return new CaixaPadraoDTO(entity);
    }

    @Override
    public List<ResumoDiario> toEntity(List<CaixaPadraoDTO> listDto) {
        return null;
    }

    @Override
    public List<CaixaPadraoDTO> toDTO(List<ResumoDiario> listEntity) {
        return listEntity.stream()
                .filter(Objects::nonNull)
                .map(this::toDTO)
                .collect(Collectors.toList());
    }
}
