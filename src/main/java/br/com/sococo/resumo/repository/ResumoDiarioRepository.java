package br.com.sococo.resumo.repository;

import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.repository.impl.ResumoDiarioRepositoryQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ResumoDiarioRepository extends JpaRepository<ResumoDiario, Long>, ResumoDiarioRepositoryQuery {

    @Transactional
    @Query(value = "SELECT rd.dia_lancamento FROM resumo_diario rd WHERE rd.mes_lancamento =:mes GROUP BY rd.dia_lancamento", nativeQuery = true)
    List<String> findByDias(@Param("mes") String mes);

    @Transactional
    @Query(value = "SELECT rd.mes_lancamento FROM resumo_diario rd WHERE rd.ano_lancamento =:ano GROUP BY rd.mes_lancamento", nativeQuery = true)
    List<String> findByMeses(@Param("ano") String ano);

    //EntidadesMeses Mes
    @Transactional
    @Query(value = "SELECT SUM(rd.cocos_desfibrados) FROM resumo_diario rd WHERE rd.ano_lancamento =:ano GROUP BY rd.mes_lancamento", nativeQuery = true)
    List<Double> findCocoDesfibradosAno(@Param("ano") String ano);

    @Transactional
    @Query(value = "SELECT SUM(rd.cocos_desfibrados) FROM resumo_diario rd WHERE rd.mes_lancamento =:mes GROUP BY rd.dia_lancamento", nativeQuery = true)
    List<Double> findCocoDesfibradosMes(@Param("mes") String mes);

    @Transactional
    @Query(value = "select sum(rd.cocos_processados) FROM resumo_diario rd WHERE rd.mes_lancamento =:mes GROUP BY rd.dia_lancamento", nativeQuery = true)
    List<Double> findCocoProcessadoMes(@Param("mes") String mes);

    // ÓLeos
    @Transactional
    @Query(value = "SELECT SUM(rd.oleo_industrial_ete) FROM resumo_diario rd WHERE rd.ano_lancamento =:ano GROUP BY rd.mes_lancamento", nativeQuery = true)
    List<Double> findOleoIndustrialETEPorAno(@Param("ano") String ano);

    @Transactional
    @Query(value = "SELECT SUM(rd.oleo_industrial_ete) FROM resumo_diario rd WHERE rd.mes_lancamento =:mes GROUP BY rd.dia_lancamento", nativeQuery = true)
    List<Double> findOleoIndustrialETEPorMes(@Param("mes") String mes);

    @Transactional
    @Query(value = "SELECT SUM(rd.oleo_industrial_tipo_a) FROM resumo_diario rd WHERE rd.ano_lancamento =:ano GROUP BY rd.mes_lancamento", nativeQuery = true)
    List<Double> findOleoIndustrialTipoAPorAno(@Param("ano") String ano);

    @Transactional
    @Query(value = "SELECT SUM(rd.oleo_industrial_tipo_a) FROM resumo_diario rd WHERE rd.mes_lancamento =:mes GROUP BY rd.dia_lancamento", nativeQuery = true)
    List<Double> findOleoIndustrialTipoAPorMes(@Param("mes") String mes);

    // CRI
    @Transactional
    @Query(value = "SELECT SUM(rd.cri) FROM resumo_diario rd WHERE rd.ano_lancamento =:ano GROUP BY rd.mes_lancamento", nativeQuery = true)
    List<Double> findResumoDiarioCRIPorAno(@Param("ano") String ano);

    @Transactional
    @Query(value = "SELECT SUM(rd.cri) FROM resumo_diario rd WHERE rd.mes_lancamento =:mes GROUP BY rd.dia_lancamento", nativeQuery = true)
    List<Double> findResumoDiarioCRIPorMes(@Param("mes") String mes);

    // Flococo
    @Transactional
    @Query(value = "SELECT SUM(rd.flococo) FROM resumo_diario rd WHERE rd.ano_lancamento =:ano GROUP BY rd.mes_lancamento", nativeQuery = true)
    List<Double> findResumoDiarioFlococoPorAno(@Param("ano") String ano);

    @Transactional
    @Query(value = "SELECT SUM(rd.flococo) FROM resumo_diario rd WHERE rd.mes_lancamento =:mes GROUP BY rd.dia_lancamento", nativeQuery = true)
    List<Double> findResumoDiarioFlococoPorMes(@Param("mes") String mes);

    // Agua de Coco
    @Transactional
    @Query(value = "SELECT rd.* , SUM(rd.agua_coco_sococo) AS tlAguaCocoSococo, SUM(rd.agua_coco_verde) AS tlAguaCocoVerde FROM resumo_diario rd WHERE rd.ano_lancamento =:ano GROUP BY rd.mes_lancamento", nativeQuery = true)
    List<Double> findResumoDiarioAguaCoco(@Param("ano") String anoLancamento);

    // Fardos
    @Transactional
    @Query(value = "SELECT rd.* , SUM(rd.numero_fardos) AS tlFardos FROM resumo_diario rd WHERE rd.ano_lancamento =:ano GROUP BY rd.mes_lancamento", nativeQuery = true)
    List<ResumoDiario> findResumoDiarioTotalFardos(@Param("ano") String anoLancamento);

    @Transactional
    @Query(value = "SELECT rd.* , SUM(rd.total_cacambas) AS tlCacamba FROM resumo_diario rd WHERE rd.ano_lancamento =:ano GROUP BY rd.mes_lancamento", nativeQuery = true)
    List<ResumoDiario> findResumoDiarioTotalCacamba(@Param("ano") String anoLancamento);

    @Transactional
    @Query(value = "SELECT rd.* , SUM(rd.torta) AS tlTorta FROM resumo_diario rd WHERE rd.ano_lancamento =:ano GROUP BY rd.mes_lancamento", nativeQuery = true)
    List<ResumoDiario> findResumoDiarioTorta(@Param("ano") String anoLancamento);

    @Transactional
    @Query(value = "SELECT rd.* , SUM(rd.porcentagem_coco_germinado) AS tlCocoGerminado FROM resumo_diario rd WHERE rd.ano_lancamento =:ano GROUP BY rd.mes_lancamento", nativeQuery = true)
    List<ResumoDiario> findResumoDiarioCocoGerminado(@Param("ano") String anoLancamento);

    @Transactional
    @Query(value = "SELECT rd.* , SUM(rd.caixa_padrao) AS tlCaixaPadrao FROM resumo_diario rd WHERE rd.ano_lancamento =:ano GROUP BY rd.mes_lancamento", nativeQuery = true)
    List<ResumoDiario> findResumoDiarioCaixaPadrao(@Param("ano") String anoLancamento);



    @Transactional
    @Query(value = "SELECT rd.* , SUM(rd.cocos_processados) AS tlCocoProcessados, SUM(rd.cocos_desfibrados) AS tlCocoDesfibrados FROM resumo_diario rd WHERE rd.ano_lancamento =:ano AND rd.mes_lancamento =:mes GROUP BY rd.dia_lancamento", nativeQuery = true)
    List<ResumoDiario> findResumoDiarioCocoPorMes(@Param("ano") String anoLancamento, @Param("mes") String mesLancamento);

    @Transactional
    @Query(value = "SELECT rd.* , SUM(rd.oleo_industrial_ete) AS tlOleoIndustrialETE, SUM(rd.oleo_industrial_tipo_a) AS tlOleoIndustrialTipoA FROM resumo_diario rd WHERE rd.ano_lancamento =:ano AND rd.mes_lancamento =:mes GROUP BY rd.dia_lancamento", nativeQuery = true)
    List<ResumoDiario> findResumoDiarioOleoPorMes(@Param("ano") String anoLancamento, @Param("mes") String mesLancamento);

    @Transactional
    @Query(value = "SELECT rd.* , SUM(rd.cri) AS tlcri, SUM(rd.flococo) AS tlflococo FROM resumo_diario rd WHERE rd.ano_lancamento =:ano AND rd.mes_lancamento =:mes GROUP BY rd.dia_lancamento", nativeQuery = true)
    List<ResumoDiario> findResumoDiarioCRIFlococoMes(@Param("ano") String anoLancamento, @Param("mes") String mesLancamento);

    @Transactional
    @Query(value = "SELECT rd.* , SUM(rd.agua_coco_sococo) AS tlAguaCocoSococo, SUM(rd.agua_coco_verde) AS tlAguaCocoVerde FROM resumo_diario rd WHERE rd.ano_lancamento =:ano AND rd.mes_lancamento =:mes GROUP BY rd.dia_lancamento", nativeQuery = true)
    List<ResumoDiario> findResumoDiarioAguaCocoMes(@Param("ano") String anoLancamento, @Param("mes") String mesLancamento);

    @Transactional
    @Query(value = "SELECT rd.* , SUM(rd.numero_fardos) AS tlFardos FROM resumo_diario rd WHERE rd.ano_lancamento =:ano AND rd.mes_lancamento =:mes GROUP BY rd.dia_lancamento", nativeQuery = true)
    List<ResumoDiario> findResumoDiarioTotalFardosMes(@Param("ano") String anoLancamento, @Param("mes") String mesLancamento);

    @Transactional
    @Query(value = "SELECT rd.* , SUM(rd.total_cacambas) AS tlCacamba FROM resumo_diario rd WHERE rd.ano_lancamento =:ano AND rd.mes_lancamento =:mes GROUP BY rd.dia_lancamento", nativeQuery = true)
    List<ResumoDiario> findResumoDiarioTotalCacambaMes(@Param("ano") String anoLancamento, @Param("mes") String mesLancamento);

    @Transactional
    @Query(value = "SELECT rd.* , SUM(rd.torta) AS tlTorta FROM resumo_diario rd WHERE rd.ano_lancamento =:ano AND rd.mes_lancamento =:mes GROUP BY rd.dia_lancamento", nativeQuery = true)
    List<ResumoDiario> findResumoDiarioTortaPorMes(@Param("ano") String anoLancamento, @Param("mes") String mesLancamento);

    @Transactional
    @Query(value = "SELECT rd.* , SUM(rd.porcentagem_coco_germinado) AS tlCocoGerminado FROM resumo_diario rd WHERE rd.ano_lancamento =:ano AND rd.mes_lancamento =:mes GROUP BY rd.dia_lancamento", nativeQuery = true)
    List<ResumoDiario> findResumoDiarioCocoGerminadoPorMes(@Param("ano") String anoLancamento, @Param("mes") String mesLancamento);

    @Transactional
    @Query(value = "SELECT rd.* , SUM(rd.caixa_padrao) AS tlCaixaPadrao FROM resumo_diario rd WHERE rd.ano_lancamento =:ano AND rd.mes_lancamento =:mes GROUP BY rd.dia_lancamento", nativeQuery = true)
    List<ResumoDiario> findResumoDiarioCaixaPadraoPorMes(@Param("ano") String anoLancamento, @Param("mes") String mesLancamento);



    @Transactional
    @Query(value = "SELECT * FROM resumo_diario rd WHERE rd.data_lancamento = (SELECT MAX(data_lancamento) FROM resumo_diario);", nativeQuery = true)
    List<ResumoDiario> findResumoDiario();

    @Transactional
    @Query("select new ResumoDiario(rd.dataLancamento, sum(rd.cocosProcessados),sum(rd.cocosDesfibrados), sum(rd.cri), sum(rd.flococo), sum(rd.oleoIndustrialTipoA), sum(rd.oleoIndustrialETE), sum(rd.torta),sum(rd.aguaDeCocoSococo), sum(rd.aguaDeCocoVerde), sum(rd.totalDeCacambas), sum(rd.caixaPadrao), sum(rd.numeroDeFardos), avg (rd.porcentagemCocoGerminado)) from ResumoDiario rd where rd.dataLancamento = ?1 group by rd.dataLancamento order by rd.dataLancamento")
    List<ResumoDiario> findByDataLancamento(LocalDate data);

    @Transactional
    @Query("select new ResumoDiario(sum(rd.cocosProcessados),sum(rd.cocosDesfibrados), sum(rd.cri), sum(rd.flococo), sum(rd.oleoIndustrialTipoA), sum(rd.oleoIndustrialETE), sum(rd.torta),sum(rd.aguaDeCocoSococo), sum(rd.aguaDeCocoVerde), sum(rd.totalDeCacambas), sum(rd.caixaPadrao), sum(rd.numeroDeFardos), avg (rd.porcentagemCocoGerminado)) from ResumoDiario rd where rd.mesLancamento = ?1 AND rd.anoLancamento = ?2 group by rd.mesLancamento order by rd.mesLancamento")
    List<ResumoDiario> findByMesLancamento(String mesLancamento, String anoLancamento);
}
