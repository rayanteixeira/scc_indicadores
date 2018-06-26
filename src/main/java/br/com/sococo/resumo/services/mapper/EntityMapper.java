package br.com.sococo.resumo.services.mapper;

import java.util.List;

/**
 * Contract for a generic dto to entity mapper.
 *
 * @param <D> - DTO type parameter.
 * @param <E> - Entity type parameter.
 */
public interface EntityMapper<D,E> {
    public E toEntity(D dto);
    public D toDTO(E entity);

    public List<E> toEntity(List<D> listDto);
    public List<D> toDTO(List<E> listEntity);

}
