package br.com.sococo.resumo;

import br.com.sococo.resumo.services.DashboardService;
import br.com.sococo.resumo.services.ResumoDiarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
@EnableJpaRepositories()
public class SococoApplication implements CommandLineRunner {

	@Autowired
	private ResumoDiarioService resumoDiarioService;

	@Autowired
	private DashboardService dashiboardService;

	public static void main(String[] args) {
		SpringApplication.run(SococoApplication.class, args);
	}

	@Override
	public void run(String... strings) throws Exception {

		//System.out.println("|-- Lista todos cocos --|");
//		resumoDiarioRepository.findCocoProcessadoMes("2018")
//			.forEach(System.out::println);

//		cocosService.findCocoProcessadoMes("2018")
//				.forEach(System.out::println);

	}
}
