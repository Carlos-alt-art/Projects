package com.todotic.contactlistapi.service;

import com.todotic.contactlistapi.dto.ContactDTO;
import com.todotic.contactlistapi.entity.Contact;
import com.todotic.contactlistapi.exception.ResourceNotFoundException;
import com.todotic.contactlistapi.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public Iterable<Contact> findAll(){
        return contactRepository.findAll();
    }


    public  Contact findById(Integer id){
        return contactRepository
                .findById(id)
                .orElseThrow(ResourceNotFoundException::new);
    }

    public Contact create(ContactDTO contactDTO){
        Contact contact = new Contact();
        contact.setName(contactDTO.getName());
        contact.setEmail(contactDTO.getEmail());
        contact.setCreatedAt(LocalDateTime.now());
        return contactRepository.save(contact);
    }


    public Contact update(Integer id, ContactDTO contactDTO){
        Contact contactFromDb = findById(id);

        contactFromDb.setName(contactDTO.getName());
        contactFromDb.setEmail(contactDTO.getEmail());

        return contactRepository.save(contactFromDb);
    }


    public void delete(Integer id){
        Contact contactFromDb = findById(id);

        contactRepository.delete(contactFromDb);
    }




}
