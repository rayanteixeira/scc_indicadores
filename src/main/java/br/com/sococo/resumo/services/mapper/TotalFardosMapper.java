package br.com.sococo.resumo.services.mapper;

import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.services.dto.TotalFardosDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class TotalFardosMapper implements EntityMapper<TotalFardosDTO, ResumoDiario> {

    @Override
    public ResumoDiario toEntity(TotalFardosDTO dto) {
        return null;
    }

    @Override
    public TotalFardosDTO toDTO(ResumoDiario entity) {
        return new TotalFardosDTO(entity);
    }

    @Override
    public List<ResumoDiario> toEntity(List<TotalFardosDTO> listDto) {
        return null;
    }

    @Override
    public List<TotalFardosDTO> toDTO(List<ResumoDiario> listEntity) {
        return listEntity.stream()
                .filter(Objects::nonNull)
                .map(this::toDTO)
                .collect(Collectors.toList());
    }
}
