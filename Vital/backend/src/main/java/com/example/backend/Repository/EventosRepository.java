package com.example.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.Model.Eventos;

public interface EventosRepository extends JpaRepository<Eventos, Long> {
}
