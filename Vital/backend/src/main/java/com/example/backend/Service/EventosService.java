package com.example.backend.Service;


import com.example.backend.Model.Eventos;
import com.example.backend.Repository.EventosRepository;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.stereotype.Service;

@Service
public class EventosService {
    private final EventosRepository eventosRepository;
    
    public EventosService(EventosRepository eventos){
        this.eventosRepository = eventos;
    }
    public Eventos postEventos(Eventos eventos){
        return eventosRepository.save(eventos);
    }
    public List<Eventos> readEventos(){
        return eventosRepository.findAll();
    }

    public Eventos putEventos(Eventos evento,Long id){
        Eventos patchedEventos = this.eventosRepository.findById(id).orElseThrow(() -> new RuntimeException("Evento não encontrado"));
        patchedEventos.setEventDate(evento.getEventDate());
        patchedEventos.setEventName(evento.getEventName());
        patchedEventos.setEventLocal(evento.getEventLocal());
        patchedEventos.seteventIsOver(evento.geteventIsOver());
        return patchedEventos;
    }
    
    public Eventos patchEventos(Eventos evento, Long id){
        Eventos patchedEventos = this.eventosRepository.findById(id).orElseThrow(() -> new RuntimeException("Evento não encontrado."));
        if (evento.getEventDate() != null){
            patchedEventos.setEventDate(evento.getEventDate());
        }
        if (evento.getEventName() != null){
            patchedEventos.setEventName(evento.getEventName());
        }
        if (evento.getEventLocal() != null){
            patchedEventos.setEventDate(evento.getEventDate());
        }
        if (evento.geteventIsOver()){
            patchedEventos.seteventIsOver(evento.geteventIsOver());
        }
        return patchedEventos;
    }

    public void deleteEventos(Long id){
        this.eventosRepository.findById(id);
        if (this.eventosRepository != null){
            eventosRepository.deleteById(id);
        } 
    }
    

}
/* private LocalDate eventDate;
    private String eventName;
    private String eventLocal;
    private Boolean eventIsOver; */