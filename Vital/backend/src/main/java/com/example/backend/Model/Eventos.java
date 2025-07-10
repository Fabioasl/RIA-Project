package com.example.backend.Model;
import java.time.LocalDate;
import jakarta.persistence.*;
@Entity

public class Eventos{
    // Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate eventDate;
    private String eventName;
    private String eventLocal;
    private Boolean eventIsOver;

    // Construtor
    public Eventos(){}

    public Eventos(LocalDate eventDate, String eventName, String eventLocal, Boolean eventIsOver){
        this.eventDate = eventDate;
        this.eventName = eventName;
        this.eventLocal = eventLocal;
        this.eventIsOver = eventIsOver;
    }
    // Get e Set

    public Long getId(){
        return this.id;
    }
    public void setId(Long newId){
        this.id = newId;
    }

    public LocalDate getEventDate(){
        return this.eventDate;
    }

    public void setEventDate(LocalDate newEventDate){
        this.eventDate = newEventDate;
    }
    
    public String getEventName(){
        return this.eventName;
    }
    public void setEventName(String newEventName){
        this.eventName = newEventName;
    }

    public String getEventLocal(){
        return this.eventLocal;
    }
    public void setEventLocal(String newEventLocal){
        this.eventLocal = newEventLocal;
    }

    public Boolean geteventIsOver(){
        return this.eventIsOver;
    }
    public void seteventIsOver(Boolean newEventIsOver){
        this.eventIsOver = newEventIsOver;
    }
}
