package br.com.sococo.resumo.envio;

import br.com.sococo.resumo.model.ResumoDiario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Arrays;

@Component
public class Mailer {

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private TemplateEngine templateEngine;

    public void enviarEmail(ResumoDiario obj) {

        String corpo = htmlFromTemplatePedido(obj);

        String[] emails = {"Jairo <jairo.sousa@yahoo.com.br>",
                "Rayan Teixeira<rayanteixeira91@gmail.com>",
                "Jairo Sousa<jaironsousa@gmail.com>"
        };

        try {
            enviar(new Mensagem(
                    "Sistema Sococo <appacaipaidegua@gmail.com>",
                    (Arrays.asList(emails))
                    , "Lançamento Resumo Diário", corpo));
        } catch (MessagingException e) {
            e.printStackTrace();
        }

        System.out.println("Email enviado com sucesso!");

    }

    public void enviar(Mensagem mensagem) throws MessagingException, javax.mail.MessagingException {
        MimeMessage mailMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mailMessage,true);
        helper.setSubject(mensagem.getAssunto());
        helper.setFrom(mensagem.getRemetente());
        helper.setTo(mensagem.getDestinatarios()
                .toArray(new String[mensagem.getDestinatarios().size()]));
        helper.setText(mensagem.getCorpo(), true);

        javaMailSender.send(mailMessage);
    }

    protected String htmlFromTemplatePedido(ResumoDiario obj) {
        Context context = new Context();
        context.setVariable("obj", obj);
        return templateEngine.process("email/confirmacaolancamentodiario", context);
    }

}