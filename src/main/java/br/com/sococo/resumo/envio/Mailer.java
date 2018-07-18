package br.com.sococo.resumo.envio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Component
public class Mailer {

    @Autowired
    private JavaMailSender javaMailSender;

    public void enviar(Mensagem mensagem) throws MessagingException {
        MimeMessage mailMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = null;
        try {
            helper = new MimeMessageHelper(mailMessage,true);
            helper.setSubject(mensagem.getAssunto());
            helper.setFrom(mensagem.getRemetente());
            helper.setTo(mensagem.getDestinatarios()
                    .toArray(new String[mensagem.getDestinatarios().size()]));
            helper.setText(mensagem.getCorpo(), true);

            javaMailSender.send(mailMessage);

        } catch (MessagingException e) {
            e.printStackTrace();
        }

    }

}