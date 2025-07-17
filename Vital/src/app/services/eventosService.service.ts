import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../models/evento.models';

@Injectable({
  providedIn: 'root',
})
export class EventoService{
  private apiUrl = "https://improved-robot-x5rp55rq6xgg3pq94-8080.app.github.dev/api/eventos"

  constructor(private http: HttpClient) {}

  getEventos(): Observable<Evento[]>{
    return this.http.get<Evento[]>(`${this.apiUrl}`)
  }

  getEvento(id: number): Observable<Evento>{
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Evento>(url)
  }

  postEvento(evento: Evento): Observable<Evento>{
    return this.http.post<Evento>(`${this.apiUrl}`, evento)
  }

  putEvento(evento: Evento): Observable<Evento>{ 
    return this.http.put<Evento>(`${this.apiUrl}/${evento.id}`, evento)
  }

  deleteEvento(id: number): Observable<Evento>{
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Evento>(url)
  }
}