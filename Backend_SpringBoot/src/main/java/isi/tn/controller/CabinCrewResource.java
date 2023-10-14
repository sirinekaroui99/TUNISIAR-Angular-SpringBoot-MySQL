package isi.tn.controller;

import java.beans.JavaBean;
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

import isi.tn.entities.CabienCrew;
import isi.tn.services.CabinCrewService;

@RestController
@RequestMapping("/cabincrew")
@CrossOrigin
public class CabinCrewResource {

	@Autowired
    private final CabinCrewService cabinCrewService;

    public CabinCrewResource(CabinCrewService cabinCrewService) {
        this.cabinCrewService = cabinCrewService;
    }


    @GetMapping("/all")
    public ResponseEntity<List<CabienCrew>> getAllCabinCrew () {
        List<CabienCrew > cabinCrew = cabinCrewService.findAllCabinCrew();
        return new ResponseEntity<>(cabinCrew, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<CabienCrew> getCabinCrewById (@PathVariable("id") Long id) {
        CabienCrew cabinCrew = cabinCrewService.findCabinCrewById(id);
        return new ResponseEntity<>(cabinCrew, HttpStatus.OK);
    }
    @GetMapping("/look/{fid}")
    public ResponseEntity<List<CabienCrew>> findCabinCrewByFlight_id (@PathVariable("fid") Long fid) {
       List<CabienCrew> cabinCrew = cabinCrewService.findCabinCrewByFid(fid);
        return new ResponseEntity<>(cabinCrew, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<CabienCrew> addCabinCrew(@RequestBody CabienCrew cabinCrew) {
        CabienCrew newCabinCrew = cabinCrewService.addCabinCrew(cabinCrew);
        return new ResponseEntity<>(newCabinCrew, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<CabienCrew> updateCabinCrew(@RequestBody CabienCrew cabinCrew) {
        CabienCrew updateCabinCrew = cabinCrewService.updateCabinCrew(cabinCrew);
        return new ResponseEntity<>(updateCabinCrew, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCabinCrew(@PathVariable("id")  Long id) {
        cabinCrewService.deleteCabinCrew(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
