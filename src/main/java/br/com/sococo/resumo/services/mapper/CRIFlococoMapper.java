package br.com.sococo.resumo.services.mapper;

import br.com.sococo.resumo.services.dto.CRIFlococoDTO;
import br.com.sococo.resumo.model.ResumoDiario;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class CRIFlococoMapper implements EntityMapper<CRIFlococoDTO, ResumoDiario> {

    @Override
    public ResumoDiario toEntity(CRIFlococoDTO dto) {
        return null;
    }

    @Override
    public CRIFlococoDTO toDTO(ResumoDiario entity) {
        return new CRIFlococoDTO(entity);
    }

    @Override
    public List<ResumoDiario> toEntity(List<CRIFlococoDTO> listDto) {
        return null;
    }

    @Override
    public List<CRIFlococoDTO> toDTO(List<ResumoDiario> listEntity) {
        return listEntity.stream()
                .filter(Objects::nonNull)
                .map(this::toDTO)
                .collect(Collectors.toList());
    }
}
