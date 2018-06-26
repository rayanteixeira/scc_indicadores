package br.com.sococo.resumo.services.mapper;

import br.com.sococo.resumo.services.dto.AguaCocoDTO;
import br.com.sococo.resumo.model.ResumoDiario;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class AguaCocoMapper implements EntityMapper<AguaCocoDTO, ResumoDiario> {

    @Override
    public ResumoDiario toEntity(AguaCocoDTO dto) {
        return null;
    }

    @Override
    public AguaCocoDTO toDTO(ResumoDiario entity) {
        return new AguaCocoDTO(entity);
    }

    @Override
    public List<ResumoDiario> toEntity(List<AguaCocoDTO> listDto) {
        return null;
    }

    @Override
    public List<AguaCocoDTO> toDTO(List<ResumoDiario> listEntity) {
        return listEntity.stream()
                .filter(Objects::nonNull)
                .map(this::toDTO)
                .collect(Collectors.toList());
    }
}
