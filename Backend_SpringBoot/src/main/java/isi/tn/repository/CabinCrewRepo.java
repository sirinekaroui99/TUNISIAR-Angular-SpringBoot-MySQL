package isi.tn.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import isi.tn.entities.CabienCrew;
@Repository
public interface CabinCrewRepo extends JpaRepository<CabienCrew, Long> {
    CabienCrew findCabinCrewById(Long id);
	List<CabienCrew> findCabinCrewByFid(Long fid); 


}
