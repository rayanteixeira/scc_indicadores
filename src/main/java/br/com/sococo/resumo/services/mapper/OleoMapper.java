package br.com.sococo.resumo.services.mapper;

import br.com.sococo.resumo.services.dto.OleoDTO;
import br.com.sococo.resumo.model.ResumoDiario;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class OleoMapper implements EntityMapper<OleoDTO, ResumoDiario> {


    @Override
    public ResumoDiario toEntity(OleoDTO dto) {
        return null;
    }

    @Override
    public OleoDTO toDTO(ResumoDiario entity) {
        return new OleoDTO(entity);
    }

    @Override
    public List<ResumoDiario> toEntity(List<OleoDTO> listDto) {
        return null;
    }

    @Override
    public List<OleoDTO> toDTO(List<ResumoDiario> listEntity) {
        return listEntity.stream()
                .filter(Objects::nonNull)
                .map(this::toDTO)
                .collect(Collectors.toList());
    }
}
