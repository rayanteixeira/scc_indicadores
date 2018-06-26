package br.com.sococo.resumo.services.mapper;

import br.com.sococo.resumo.services.dto.UsuarioDTO;
import br.com.sococo.resumo.model.Usuario;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class UsuarioMapper implements EntityMapper<UsuarioDTO, Usuario> {


    @Override
    public Usuario toEntity(UsuarioDTO dto) {
        return new Usuario(dto);
    }

    @Override
    public UsuarioDTO toDTO(Usuario entity) {
        return new UsuarioDTO(entity);
    }

    @Override
    public List<Usuario> toEntity(List<UsuarioDTO> listDto) {
        return listDto.stream()
                .filter(Objects::nonNull)
                .map(this::toEntity)
                .collect(Collectors.toList());
    }

    @Override
    public List<UsuarioDTO> toDTO(List<Usuario> listEntity) {
        return listEntity.stream()
                .filter(Objects::nonNull)
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

}
