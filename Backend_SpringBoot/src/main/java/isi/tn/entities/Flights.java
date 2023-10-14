package isi.tn.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Flights {

	 @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    @Column(nullable = false, updatable = false)
	    private Long id;
	    private String destination;
	    private String depart;
	    private String hour;
	    private String type;
	   
	    @Column(nullable = false, updatable = false)
	     private String flightCode;
	 //   @OneToMany(mappedBy = "flight", cascade = CascadeType.ALL)
	 //   private List<CabienCrew> cabinCrewList;

	 //   @OneToMany(mappedBy = "flight", cascade = CascadeType.ALL)
	//    private List<PilotesCo> pilotesCoList; 
	    public Flights() {}

	    public Flights(long id,String depart,String destination,String hour,String type, String flightCode) {
	        this.id = id;
	        this.depart = depart;
	        this.destination = destination;
	        this.hour = hour;
	        this.type = type;
	        this.flightCode = flightCode;

	    }

	    public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }

	    public String getDepart() {
	        return depart;
	    }

	    public void setDepart(String depart) {
	        this.depart = depart;
	    }

	    public String getDestination() {
	        return destination;
	    }

	    public void setDestination(String destination) {
	        this.destination = destination;
	    }

	    public String getHour() {
	        return hour;
	    }

	    public void setHour(String hour) {
	        this.hour = hour;
	    }

	    public String getType() {
	        return type;
	    }

	    public void setType(String type) {
	        this.type = type;
	    }

	    public String getFlightCode() {
	        return flightCode;
	    }

	    public void setFlightCode(String flightCode) {
	        this.flightCode = flightCode;
	    }


	    
}
