package com.example.backend;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
            .info(new Info()
                .title("API Eventos")
                .version("v1")
                .description("Documentação da API de Eventos"))
            .servers(List.of(
                new Server().url("https://improved-robot-x5rp55rq6xgg3pq94-8080.app.github.dev")
            ));
    }
}
