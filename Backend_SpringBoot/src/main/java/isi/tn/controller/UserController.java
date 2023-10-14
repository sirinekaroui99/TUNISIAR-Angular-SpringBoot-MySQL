package isi.tn.controller;

import java.util.Date;

import java.util.List;
import io.jsonwebtoken.security.Keys;
import javax.crypto.SecretKey;
import javax.naming.AuthenticationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import isi.tn.entities.User;
import isi.tn.services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;
    @PostMapping("")
    public ResponseEntity<?> registerUser(@RequestBody User userDto) {
        User user = new User();
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setPhone(userDto.getPhone());
        user.setEmail(userDto.getEmail());
        user.setCin(userDto.getCin());
        user.setDateOfBirth(userDto.getDateOfBirth());
        user.setRole(userDto.getRole());
        user.setPassword(userDto.getPassword());

        userService.saveUser(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

   
    @PostMapping("/signin")
    public ResponseEntity<String> loginUser(@RequestBody User user) { 
    	  System.out.println("test1"); 
    	   System.out.println(user); 
        User existingUser = userService.findByEmail(user.getEmail());
        if (existingUser == null || !existingUser.getPassword().equals(user.getPassword())) {
            return new ResponseEntity<>("Invalid credentials", HttpStatus.BAD_REQUEST);
        }
        System.out.println("test2"); 
    System.out.println(user); 
        String variable="wissalwissal10wissalwissal10wissalwissal10wissalwissal10wissalwissal10wissalwissal10wissalwissal10wissalwissal10wissalwissal10";
		String token = Jwts.builder()
                .setSubject(existingUser.getEmail() + "-" + existingUser.getId())
                .claim("role", existingUser.getRole())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000L)) //1 jour
                .signWith(SignatureAlgorithm.HS512, variable.getBytes())
                .compact();
		  System.out.println("test3"); 
        return new ResponseEntity<>(token, HttpStatus.OK);
    }

 

    @GetMapping("")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User updatedUser = userService.updateUser(user);
        if (updatedUser == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable Long id) {
        userService.deleteUserById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
