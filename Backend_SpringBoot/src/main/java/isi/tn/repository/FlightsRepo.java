package isi.tn.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import isi.tn.entities.Flights;

@Repository
public interface FlightsRepo  extends JpaRepository<Flights, Long> {
    Flights findFlightsById(Long id);


}
