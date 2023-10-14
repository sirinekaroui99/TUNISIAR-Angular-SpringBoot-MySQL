package isi.tn.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import isi.tn.entities.CabienCrew;
import isi.tn.entities.PilotesCo;
import isi.tn.repository.PilotesCoRepo;

@Service
@Transactional
public class PilotesCoService {
	 @Autowired
	    private final PilotesCoRepo pilotesCoRepo;


	    public PilotesCoService(PilotesCoRepo pilotesCoRepo) {
	        this.pilotesCoRepo = pilotesCoRepo;
	    }

	    public PilotesCo addPilotesCo(PilotesCo pilotesCo)
	    {

	        return pilotesCoRepo.save(pilotesCo);
	    }
	    public List<PilotesCo> findAllPilotesCo() {
	        return pilotesCoRepo.findAll();
	    }

	    public PilotesCo updatePilotesCo(PilotesCo pilotesCo) {
	        return pilotesCoRepo.save(pilotesCo);
	    }
        
	    public PilotesCo findPilotesCoById(Long id) {
	        return pilotesCoRepo.findPilotesCoById(id);
	    }
	    public List<PilotesCo>findPilotesCoByFid(Long fid){ 
	    	return  pilotesCoRepo.findPilotesCoByFid(fid) ; 
	    }
	    public void deletePilotesCo(Long id){
	        pilotesCoRepo.deleteById(id);
	    }
}
