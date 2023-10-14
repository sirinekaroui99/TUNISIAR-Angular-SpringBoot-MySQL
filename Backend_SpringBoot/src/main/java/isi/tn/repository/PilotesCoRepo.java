package isi.tn.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import isi.tn.entities.CabienCrew;
import isi.tn.entities.PilotesCo;

@Repository
public interface PilotesCoRepo extends JpaRepository<PilotesCo, Long> {

    PilotesCo findPilotesCoById(Long id);   
    
    List<PilotesCo> findPilotesCoByFid(Long fid);  
}