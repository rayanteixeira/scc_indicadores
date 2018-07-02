package br.com.sococo.resumo.repository.impl;

import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.model.ResumoDiarioFilter;
import br.com.sococo.resumo.model.ResumoDiario_;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class ResumoDiarioRepositoryImpl implements ResumoDiarioRepositoryQuery {

    @PersistenceContext
    private EntityManager manager;

    @Override
    public List<ResumoDiario> buscarPorData(ResumoDiarioFilter filter) {

        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<ResumoDiario> criteria = builder.createQuery(ResumoDiario.class);
        Root<ResumoDiario> root = criteria.from(ResumoDiario.class);

        Predicate[] predicates = criarRestricoes(filter, builder, root);

        criteria.where(predicates);

        criteria.groupBy(root.get(ResumoDiario_.dataLancamento));

        TypedQuery<ResumoDiario> query = manager.createQuery(criteria);

        return query.getResultList();
    }

    private Predicate[] criarRestricoes(ResumoDiarioFilter filter, CriteriaBuilder builder, Root<ResumoDiario> root) {

        List<Predicate> predicates = new ArrayList<>();

        if (filter.getDataLancamento() != null) {
            predicates.add(
                    builder.equal(root.get(ResumoDiario_.dataLancamento),
                            filter.getDataLancamento())
            );
        }

        return predicates.toArray(new Predicate[predicates.size()]);
    }
}
