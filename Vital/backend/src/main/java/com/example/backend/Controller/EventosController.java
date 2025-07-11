package com.example.backend.Controller;
// as urls vao tar aqui eu acho e recebe as chamadas das vieews pra isso tb

import com.example.backend.Model.Eventos;
import com.example.backend.Service.EventosService;

import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/eventos")
@CrossOrigin(origins = "*")
public class  EventosController{
    private final EventosService eventosService;

    public EventosController(EventosService eventosService){
            this.eventosService = eventosService;
    }

    @PostMapping
    public ResponseEntity<Eventos> postEventos(@RequestBody Eventos evento){
        return ResponseEntity.ok(eventosService.postEventos(evento));
    }

    @GetMapping
    public ResponseEntity<List<Eventos>> getEventos(){
        return ResponseEntity.ok(eventosService.readEventos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Eventos> getEventos(@PathVariable Long id) {
    return eventosService.getEventosById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Eventos> putEventos(@RequestBody Eventos evento,@PathVariable Long id){
        return ResponseEntity.ok(eventosService.putEventos(evento, id));
    }

    @DeleteMapping("/{id}")
        public ResponseEntity<Void> deleteEventos(@PathVariable Long id){
            eventosService.deleteEventos(id);
            return ResponseEntity.noContent().build();
        }

}