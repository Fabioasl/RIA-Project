package com.example.backend.Controller;


import com.example.backend.Model.Eventos;
import com.example.backend.Service.EventosService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/veterinarios")
//@CrossOrigin(origins = "*")