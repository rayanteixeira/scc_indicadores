package br.com.sococo.resumo.resource;

import br.com.sococo.resumo.security.JWTUtil;
import br.com.sococo.resumo.security.UserSS;
import br.com.sococo.resumo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(value = "/auth")
public class AuthResource {
    @Autowired
    private JWTUtil jwtUtil;

//    @Autowired
//    private AuthService authService;

    @PostMapping(value = "/refresh_token")
    public ResponseEntity<Void> refreshToken(HttpServletResponse response) {
        UserSS user = UserService.authenticated();
        String token = jwtUtil.generateToken(user.getUsername());
        response.addHeader("Authorization", "Bearer " + token);
        response.addHeader("access-control-expose-headers", "Authorization");
        return ResponseEntity.noContent().build();
    }

//    @PostMapping(value = "/forgot")
//    public ResponseEntity<Void> forgot(@Valid @RequestBody EmailDTO objDTO) {
//        authService.sendNewPassword(objDTO.getEmail());
//        return ResponseEntity.noContent().build();
//    }
}
