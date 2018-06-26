package br.com.sococo.resumo.services.mapper;

import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.services.dto.CocoGerminadoDTO;
import br.com.sococo.resumo.services.dto.TortaDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class TortaMapper implements EntityMapper<TortaDTO, ResumoDiario> {

    @Override
    public ResumoDiario toEntity(TortaDTO dto) {
        return null;
    }

    @Override
    public TortaDTO toDTO(ResumoDiario entity) {
        return new TortaDTO(entity);
    }

    @Override
    public List<ResumoDiario> toEntity(List<TortaDTO> listDto) {
        return null;
    }

    @Override
    public List<TortaDTO> toDTO(List<ResumoDiario> listEntity) {
        return listEntity.stream()
                .filter(Objects::nonNull)
                .map(this::toDTO)
                .collect(Collectors.toList());
    }
}
