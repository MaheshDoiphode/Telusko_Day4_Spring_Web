package com.telusko.ProductSpring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductDB db;

    public void addProduct(Product p) {
        db.save(p);
    }

    public List<Product> getAllProducts() {
        return db.findAll();
    }

    public Product getProductByName(String name) {
        return db.findAll().stream()
                .filter(p -> p.getName().equalsIgnoreCase(name))
                .findFirst()
                .orElse(null);
    }

    public List<Product> getOutOfWarrantyProducts() {
        int currentYear = java.time.Year.now().getValue();
        return db.findAll().stream()
                .filter(p -> p.getWarranty() < currentYear)
                .collect(Collectors.toList());
    }

    public List<Product> getProductsByPlace(String searchText) {
        return db.findAll().stream()
                .filter(p -> p.getPlace().toLowerCase().contains(searchText.toLowerCase()))
                .collect(Collectors.toList());
    }

    public void deleteProduct(String name) {
        db.deleteByName(name);
    }
}
