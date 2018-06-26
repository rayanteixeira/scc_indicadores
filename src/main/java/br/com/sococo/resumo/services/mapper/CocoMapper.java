package br.com.sococo.resumo.services.mapper;

import br.com.sococo.resumo.services.dto.CocoDTO;
import br.com.sococo.resumo.model.ResumoDiario;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class CocoMapper implements EntityMapper<CocoDTO, ResumoDiario> {

    @Override
    public ResumoDiario toEntity(CocoDTO dto) {
        return null;
    }

    @Override
    public CocoDTO toDTO(ResumoDiario entity) {
        return new CocoDTO(entity);
    }

    @Override
    public List<ResumoDiario> toEntity(List<CocoDTO> listDto) {
        return null;
    }

    @Override
    public List<CocoDTO> toDTO(List<ResumoDiario> listEntity) {
        return listEntity.stream()
                .filter(Objects::nonNull)
                .map(this::toDTO)
                .collect(Collectors.toList());
    }
}
