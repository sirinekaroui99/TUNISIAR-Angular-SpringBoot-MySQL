package isi.tn.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import isi.tn.entities.CabienCrew;
import isi.tn.repository.CabinCrewRepo;

@Service
@Transactional
public class CabinCrewService  {

	 @Autowired
	    private final CabinCrewRepo cabinCrewRepo;


	    public CabinCrewService(CabinCrewRepo cabinCrewRepo) {
	        this.cabinCrewRepo = cabinCrewRepo;

	    }

	    public List<CabienCrew> findAllCabinCrew() {
	        return cabinCrewRepo.findAll();
	    }


	    public CabienCrew addCabinCrew(CabienCrew cabinCrew)
	    {
	        return cabinCrewRepo.save(cabinCrew);
	    }


	    public CabienCrew updateCabinCrew(CabienCrew cabinCrew) {
	        return cabinCrewRepo.save(cabinCrew);
	    }

	    public CabienCrew findCabinCrewById(Long id) {
	        return (CabienCrew) cabinCrewRepo.findCabinCrewById(id) ; 
	    }
	    public List<CabienCrew>findCabinCrewByFid(Long flight_id){ 
	    	return  cabinCrewRepo.findCabinCrewByFid(flight_id) ; 
	    }
	    
	    public void deleteCabinCrew(Long id){
	        cabinCrewRepo.deleteById(id);
	    }
}
