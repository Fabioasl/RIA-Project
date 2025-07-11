package com.example.backend.Service;


import com.example.backend.Model.Eventos;
import com.example.backend.Repository.EventosRepository;
import java.util.List;
import java.util.Optional;


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
    public Optional<Eventos> getEventosById(Long id){
        return eventosRepository.findById(id);
    }

    public Eventos putEventos(Eventos evento,Long id){
        Eventos patchedEventos = this.eventosRepository.findById(id).orElseThrow(() -> new RuntimeException("Evento não encontrado"));
        patchedEventos.setEventDate(evento.getEventDate());
        patchedEventos.setEventName(evento.getEventName());
        patchedEventos.setEventLocal(evento.getEventLocal());
        patchedEventos.setEventIsOver(evento.getEventIsOver());
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
        if (evento.getEventIsOver()){
            patchedEventos.setEventIsOver(evento.getEventIsOver());
        }
        return patchedEventos;
    }

    public void deleteEventos(Long id){
        this.eventosRepository.findById(id);
        if (this.eventosRepository.existsById(id)){
            eventosRepository.deleteById(id);
        }
        else { throw new RuntimeException("Evento não encontrado");}
    }
    

}
