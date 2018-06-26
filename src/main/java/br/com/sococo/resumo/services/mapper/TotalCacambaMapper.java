package br.com.sococo.resumo.services.mapper;

import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.services.dto.TotalCacambaDTO;
import br.com.sococo.resumo.services.dto.TotalFardosDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class TotalCacambaMapper implements EntityMapper<TotalCacambaDTO, ResumoDiario> {

    @Override
    public ResumoDiario toEntity(TotalCacambaDTO dto) {
        return null;
    }

    @Override
    public TotalCacambaDTO toDTO(ResumoDiario entity) {
        return new TotalCacambaDTO(entity);
    }

    @Override
    public List<ResumoDiario> toEntity(List<TotalCacambaDTO> listDto) {
        return null;
    }

    @Override
    public List<TotalCacambaDTO> toDTO(List<ResumoDiario> listEntity) {
        return listEntity.stream()
                .filter(Objects::nonNull)
                .map(this::toDTO)
                .collect(Collectors.toList());
    }
}
