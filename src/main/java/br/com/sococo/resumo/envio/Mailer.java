package br.com.sococo.resumo.envio;

import br.com.sococo.resumo.model.ResumoDiario;
import br.com.sococo.resumo.model.Usuario;
import br.com.sococo.resumo.repository.DestinatarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class Mailer {

    @Autowired
    private DestinatarioRepository destinatarioRepository;

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private MailSender emailSender;

    @Autowired
    private TemplateEngine templateEngine;

    @Value("${default.sender}")
    private String sender;

    public void enviarEmail(ResumoDiario obj) {

        String corpo = htmlFromTemplatePedido(obj);

        List<String> emails = listaDestinatarios();

        try {
            enviar(new Mensagem(
                    sender,
                    (emails)
                    , "Lançamento Resumo Diário", corpo));
        } catch (MessagingException e) {
            e.printStackTrace();
        }

        System.out.println("Email enviado com sucesso!");

    }

    private List<String> listaDestinatarios() {
        List<String> emails = new ArrayList<>();
        destinatarioRepository.findAll().forEach(destinatario -> {
            emails.add(destinatario.getDestinatario());
        });
        return emails;
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

    public void sendEmail(SimpleMailMessage msg) {
        emailSender.send(msg);

    }

    public void sendNewPasswordEmail(Usuario usuario, String newPassword) {
        SimpleMailMessage sm = prepareNewPasswordEmail(usuario, newPassword);
        sendEmail(sm);
    }

    protected SimpleMailMessage prepareNewPasswordEmail(Usuario usuario, String newPassword) {
        SimpleMailMessage sm = new SimpleMailMessage();
        sm.setTo(usuario.getEmail());
        sm.setFrom(sender);
        sm.setSubject("Solicitação de nova senha");
        sm.setSentDate(new Date(System.currentTimeMillis()));
        sm.setText("Sua nova senha: " + newPassword);
        return sm;
    }
}