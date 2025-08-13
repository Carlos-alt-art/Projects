package com.todotic.contactlistapi.controller;

import com.todotic.contactlistapi.dto.ContactDTO;
import com.todotic.contactlistapi.entity.Contact;
import com.todotic.contactlistapi.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RequestMapping("/api/contacts")
@RestController
public class ContactController {

    /* Sin @Autowired

        private final ContactService contactService;


    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }
     */

    @Autowired
    private ContactService contactService;


    @GetMapping
    Iterable<Contact> list() {
        return contactService.findAll();
    }

    @GetMapping("{id}")
    public Contact get(@PathVariable Integer id){
        return contactService.findById(id);
    }




    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Contact create(@RequestBody ContactDTO contactDTO ){
        return contactService.create(contactDTO);
    }



    @PutMapping("{id}")
    public Contact update(@PathVariable Integer id, @RequestBody ContactDTO contactDTO) {

        return contactService.update(id, contactDTO);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}")
    public void delete(@PathVariable Integer id) {
        contactService.delete(id);
    }

}
