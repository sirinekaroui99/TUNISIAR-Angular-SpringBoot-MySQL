package isi.tn.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class CabienCrew {

	 @Id
     @GeneratedValue(strategy = GenerationType.AUTO)
     @Column(nullable = false, updatable = false)
     private Long id;
     private String name;
     private String email;
     private String jobTitle;
     private String mobile;
     private String imageUrl;
     private Long fid ; 



 


public CabienCrew() {
	super();
	// TODO Auto-generated constructor stub
}

public CabienCrew(Long id, String name, String email, String jobTitle, String mobile, String imageUrl, Long fid) {
	super();
	this.id = id;
	this.name = name;
	this.email = email;
	this.jobTitle = jobTitle;
	this.mobile = mobile;
	this.imageUrl = imageUrl;
	this.fid = fid;
}

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getJobTitle() {
	return jobTitle;
}

public void setJobTitle(String jobTitle) {
	this.jobTitle = jobTitle;
}

public String getMobile() {
	return mobile;
}

public void setMobile(String mobile) {
	this.mobile = mobile;
}

public String getImageUrl() {
	return imageUrl;
}

public void setImageUrl(String imageUrl) {
	this.imageUrl = imageUrl;
}

public Long getFid() {
	return fid;
}

public void setFid(Long fid) {
	this.fid = fid;
}




}
