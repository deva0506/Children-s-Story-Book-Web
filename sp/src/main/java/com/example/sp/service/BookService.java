package com.example.sp.service;

import com.example.sp.model.Book;
import com.example.sp.repository.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepo bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Optional<Book> getBookById(int bookId) {
        return bookRepository.findById(bookId);
    }

    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    public void deleteBook(int bookId) {
        bookRepository.deleteById(bookId);
    }

    public Optional<Book> updateBook(int bookId, Book bookDetails) {
        return bookRepository.findById(bookId).map(book -> {
            book.setName(bookDetails.getName());
            book.setGroup(bookDetails.getGroup());
            book.setDescription(bookDetails.getDescription());
            book.setQuantity(bookDetails.getQuantity());
            book.setPrice(bookDetails.getPrice());
            return bookRepository.save(book);
        });
    }
}
