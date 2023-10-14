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

import isi.tn.entities.CabienCrew;
import isi.tn.entities.PilotesCo;
import isi.tn.services.PilotesCoService;

@RestController
@RequestMapping("/pilotes")
@CrossOrigin
public class PilotesCoResource {
	@Autowired
    private final PilotesCoService pilotesCoService;

    public PilotesCoResource(PilotesCoService pilotesCoService) {
        this.pilotesCoService = pilotesCoService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<PilotesCo>> getAllPilotesCo () {
        List<PilotesCo> pilotesCo = pilotesCoService.findAllPilotesCo();
        return new ResponseEntity<>(pilotesCo, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<PilotesCo> getPilotesCoById (@PathVariable("id") Long id) {
        PilotesCo pilotesCo = pilotesCoService.findPilotesCoById(id);
        return new ResponseEntity<>(pilotesCo, HttpStatus.OK);
    } 
    @GetMapping("/look/{fid}")
    public ResponseEntity<List<PilotesCo>> findPilotesCoByFid (@PathVariable("fid") Long fid) {
       List<PilotesCo> PilotesCo = pilotesCoService.findPilotesCoByFid(fid);
        return new ResponseEntity<>(PilotesCo, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<PilotesCo> addPilotesCo(@RequestBody PilotesCo pilotesCo) {
        PilotesCo newPilotesCo = pilotesCoService.addPilotesCo(pilotesCo);
        return new ResponseEntity<>(newPilotesCo, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<PilotesCo> updatePilotesCo(@RequestBody PilotesCo pilotesCo) {
        PilotesCo updatePilotesCo = pilotesCoService.updatePilotesCo(pilotesCo);
        return new ResponseEntity<>(updatePilotesCo, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePilotesCo(@PathVariable("id") Long id) {
        pilotesCoService.deletePilotesCo(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
