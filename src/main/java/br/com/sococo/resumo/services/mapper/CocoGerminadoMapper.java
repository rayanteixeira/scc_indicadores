package br.com.sococo.resumo.services.mapper;

import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.services.dto.CocoGerminadoDTO;
import br.com.sococo.resumo.services.dto.TotalFardosDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class CocoGerminadoMapper implements EntityMapper<CocoGerminadoDTO, ResumoDiario> {

    @Override
    public ResumoDiario toEntity(CocoGerminadoDTO dto) {
        return null;
    }

    @Override
    public CocoGerminadoDTO toDTO(ResumoDiario entity) {
        return new CocoGerminadoDTO(entity);
    }

    @Override
    public List<ResumoDiario> toEntity(List<CocoGerminadoDTO> listDto) {
        return null;
    }

    @Override
    public List<CocoGerminadoDTO> toDTO(List<ResumoDiario> listEntity) {
        return listEntity.stream()
                .filter(Objects::nonNull)
                .map(this::toDTO)
                .collect(Collectors.toList());
    }
}
