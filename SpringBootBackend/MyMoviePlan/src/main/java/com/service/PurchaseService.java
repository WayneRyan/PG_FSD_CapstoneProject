package com.service;

import com.bean.Purchase;
import com.dto.Ticket;
import com.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
@Transactional
public class PurchaseService {
    @Autowired
    PurchaseRepository purchaseRepository;

    public String createPurchase(List<Purchase> purchases) {
        for (Purchase p : purchases) {
            purchaseRepository.save(p);
        }
        return "Purchase created successfully";
    }

    public List<Purchase> getAllPurchases() {
        return purchaseRepository.findAll();
    }

    public List<Ticket> getUserPurchases(int id) {
        List<Purchase> purchases = purchaseRepository.findAllByAccount_Id(id);
        HashMap<Integer,Ticket> ticketHashMap = new HashMap<>();
        for (Purchase p: purchases) {
            if (ticketHashMap.containsKey(p.getShowtime().getId())){
                Ticket ticket = ticketHashMap.get(p.getShowtime().getId());
                ticket.setQuantity(ticket.getQuantity() + p.getQuantity());
            } else {
                Ticket ticket = new Ticket();
                ticket.setStarttime(p.getShowtime().getStarttime());
                ticket.setQuantity(p.getQuantity());
                ticket.setMovieName(p.getShowtime().getMovie().getName());
                ticketHashMap.put(p.getShowtime().getId(), ticket);
            }
        }
        return new ArrayList<>(ticketHashMap.values());
    }
}
