import { Routes } from '@angular/router';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { EventDeleteComponent } from './components/event-delete/event-delete.component';
import { EventReadComponent } from './components/event-read/event-read.component';
import { EventUpdateComponent } from './components/event-update/event-update.component';
import { Component } from '@angular/core';
export const routes: Routes = [
  { path: '', component: EventReadComponent },
  { path: 'criar-evento', component: EventCreateComponent },
  { path: 'atualizar-evento/:id', component: EventUpdateComponent },
  { path: 'deletar-evento/:id', component: EventDeleteComponent }
];
