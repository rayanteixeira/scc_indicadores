package br.com.sococo.resumo.services.converter;

import br.com.sococo.resumo.model.ResumoDiario;

import java.text.DecimalFormat;

public class ConverterUtil {
    public static String converterDoubleString(double numero) {
        /*Transformando um double em 2 casas decimais*/
        DecimalFormat fmt = new DecimalFormat("0.00");   //limita o número de casas decimais
        String string = fmt.format(numero);
        String[] part = string.split("[,]");
        String preco = part[0]+"."+part[1];
        return preco;
    }

    public static double converterDoubleDoisDecimais(Double numero) {
        DecimalFormat fmt = new DecimalFormat("0.00");
        String string = fmt.format(numero);

        String[] part = string.split("[,]");

        String string2 = part[0]+"."+part[1];

        Double valor = Double.parseDouble(string2);

//        System.out.println("valor: " + valor);
        return valor;
    }

//    public static ResumoDiario converterVigula(ResumoDiario diario) {
//        ResumoDiario resumoDiario = new ResumoDiario(
//                substituiVirgulaPorPonto(diario.getCocosProcessados()),
//                substituiVirgulaPorPonto(diario.getCocosDesfibrados()),
//                substituiVirgulaPorPonto(diario.getCri()),
//                substituiVirgulaPorPonto(diario.getFlococo()),
//                substituiVirgulaPorPonto(diario.getOleoIndustrialTipoA()),
//                substituiVirgulaPorPonto(diario.getOleoIndustrialETE()),
//                substituiVirgulaPorPonto(diario.getTorta()),
//                substituiVirgulaPorPonto(diario.getAguaDeCocoSococo()),
//                substituiVirgulaPorPonto(diario.getAguaDeCocoVerde()),
//                substituiVirgulaPorPonto(diario.getCaixaPadrao()),
//                substituiVirgulaPorPonto(diario.getPorcentagemCocoGerminado()),
//                substituiVirgulaPorPonto(diario.getTotalDeCacambas()),
//                substituiVirgulaPorPonto(diario.getNumeroDeFardos())
//        );

//        return resumoDiario;
//    }

    public static double substituiVirgulaPorPonto(String numero) {
        return Double.parseDouble(numero.replace(',', '.'));
    }
}
