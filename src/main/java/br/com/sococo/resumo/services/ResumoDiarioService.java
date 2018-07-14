package br.com.sococo.resumo.services;

import br.com.sococo.resumo.SococoApplication;
import br.com.sococo.resumo.envio.Mailer;
import br.com.sococo.resumo.envio.Mensagem;
import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.model.ResumoDiarioFilter;
import br.com.sococo.resumo.repository.ResumoDiarioRepository;
import com.sun.xml.internal.messaging.saaj.packaging.mime.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class ResumoDiarioService {

    @Autowired
    private ResumoDiarioRepository resumoDiarioRepository;

    @Autowired
    private Mailer mailer;

    public ResumoDiario insert(ResumoDiario obj) {

        enviarEmail(obj);

        return resumoDiarioRepository.save(obj);
    }

    private void enviarEmail(ResumoDiario obj) {

        String corpo = prepararMensagemEmail(obj);

        String[] emails = {"Jairo <jairo.sousa@yahoo.com.br>",
                            "Rayan Teixeira<rayanteixeira91@gmail.com>",
                            "Jairo Sousa<jaironsousa@gmail.com>"
                        };

        try {
            mailer.enviar(new Mensagem(
                    "Sistema Sococo <appacaipaidegua@gmail.com>",
                    (Arrays.asList(emails))
                    , "Lançamento Resumo Diário", corpo));
        } catch (MessagingException e) {
            e.printStackTrace();
        } catch (javax.mail.MessagingException e) {
            e.printStackTrace();
        }

        System.out.println("Email enviado com sucesso!");

    }

    private String prepararMensagemEmail(ResumoDiario obj) {

        StringBuilder builder = new StringBuilder();
        builder.append("<!DOCTYPE html>");
        builder.append("<html lang='pt'>");
        builder.append("<head>");
        builder.append("<meta charset='UTF-8'>");
        //builder.append("<style type='text/css'>");
        //builder.append("body {color: #1e564f; background-color: #d9f7f3 }");
        //builder.append(".font {padding: 10px;}");
        //builder.append("</style>");
        builder.append("</head>");
        builder.append("<body style='color: #1e564f;'>");
        builder.append("<h1>Lançamento diário</h1>");
        builder.append("<h2>Data: " +obj.getDiaLancamento() + "/" + obj.getMesLancamento()+"/"+obj.getAnoLancamento()+"</h2>");
        builder.append("<label>");
        builder.append("<h4 style='padding: 0; margin:0'>Cocos Desfibrados: "+obj.getCocosDesfibrados() + "</h4><br />");
        builder.append("<h4 style='padding: 0; margin:0'>Cocos Processados: "+obj.getCocosProcessados() + "</h4><br />");
        builder.append("<h4 style='padding: 0; margin:0;'>Água de cocô: "+obj.getAguaDeCocoSococo() + "</h4><br />");
        builder.append("</body>");
        builder.append("</html>");

        return builder.toString();
    }

    public List<ResumoDiario> findAll() {
        return resumoDiarioRepository.findAll();
    }

    public ResumoDiario find(Long id) {
        Optional<ResumoDiario> obj = resumoDiarioRepository.findById(id);
        return obj.orElse(null);
    }

    public List<String> findByMeses(String ano) {
        return resumoDiarioRepository.findByMeses(ano);
    }

    public List<String> findByDias(String mes) {
        return resumoDiarioRepository.findByDias(mes);
    }

    public List<ResumoDiario> fingResumoDiario() {
        return resumoDiarioRepository.findResumoDiario();

    }

    public List<ResumoDiario> buscaPorData(ResumoDiarioFilter filter) {
        System.out.println("FILTER "+filter.getDataLancamento());
        List<ResumoDiario> lista = new ArrayList<>();
        if (filter.getDataLancamento() != null) {
            lista = resumoDiarioRepository.findByDataLancamento(filter.getDataLancamento());
        } else {
            lista = resumoDiarioRepository.findAll();
        }
        return lista;

    }
}