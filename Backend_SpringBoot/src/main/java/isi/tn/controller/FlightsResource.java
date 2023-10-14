package isi.tn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import isi.tn.entities.Flights;
import isi.tn.services.FlightsService;

@RestController
@RequestMapping("/flights")
@CrossOrigin
public class FlightsResource {

	 @Autowired
	    private final FlightsService flightsService;

	    public FlightsResource(FlightsService flightsService) {
	        this.flightsService = flightsService;
	    }
	    @GetMapping("/all")
	    public ResponseEntity<List<Flights>> getAllFlights () {
	        List<Flights > flights = flightsService.findAllFlights();
	        return new ResponseEntity<>(flights, HttpStatus.OK);
	    }

	    @GetMapping("/find/{id}")
	    public ResponseEntity<Flights> getFlightsById (@PathVariable("id") Long id) {
	        Flights flights = flightsService.findFlightById(id);
	        return new ResponseEntity<>(flights, HttpStatus.OK);
	    }

	    @PostMapping("/add")
	    public ResponseEntity<Flights> addFlight(@RequestBody Flights flight) {
	        Flights newFlight = flightsService.addFlight(flight);
	        return new ResponseEntity<>(newFlight, HttpStatus.CREATED);
	    }

	    @PutMapping("/update")
	    public ResponseEntity<Flights> updateFlight(@RequestBody Flights flight) {
	        Flights updateFlight = flightsService.updateFlight(flight);
	        return new ResponseEntity<>(updateFlight, HttpStatus.OK);
	    }

	    @DeleteMapping("/delete/{id}")
	    public ResponseEntity<?> deleteFlight(@PathVariable("id") Long id) {
	        flightsService.deleteFlight(id);
	        return new ResponseEntity<>(HttpStatus.OK);
	    }

}
