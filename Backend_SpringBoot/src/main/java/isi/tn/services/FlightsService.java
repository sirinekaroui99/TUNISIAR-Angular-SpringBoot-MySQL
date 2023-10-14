package isi.tn.services;

import java.util.List;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import isi.tn.entities.Flights;
import isi.tn.repository.FlightsRepo;

@Service
@Transactional
public class FlightsService {
	 @Autowired
	    private final FlightsRepo flightsRepo;


	    public FlightsService(FlightsRepo flightsRepo) {
	        this.flightsRepo = flightsRepo;

	    }

	    public Flights addFlight(Flights flight)
	    {
	        flight.setFlightCode(UUID.randomUUID().toString());
	        return flightsRepo.save(flight);
	    }
	    public List<Flights> findAllFlights() {
	        return flightsRepo.findAll();
	    }

	    public Flights updateFlight(Flights flight) {
	        return flightsRepo.save(flight);
	    }

	    public Flights findFlightById(Long id) {
	        return flightsRepo.findFlightsById(id) ; 
	    }
	    public void deleteFlight(Long id){
	        flightsRepo.deleteById(id);
	    }

}
