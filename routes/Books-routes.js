import express from 'express';
import authenticateJWT from '../authmiddleware';
import Books from '../model/Books';
import { addBook, deleteBook, getAllBook, getBookById, updateBook } from '../controllers/book-controller';


const BookRouter = express.Router();


//GET ALL BOOKS
BookRouter.get('/getAllBook', authenticateJWT, getAllBook);

//ADD BOOK
BookRouter.post('/addBook', authenticateJWT, addBook);

//GET BOOK BY ID
BookRouter.get('/getBook/:id', authenticateJWT, getBookById);

// UPDATE BOOK 
BookRouter.put('/updateBook/:id', authenticateJWT, updateBook)

//DELETE BOOK
BookRouter.delete('/deleteBook/:id', authenticateJWT, deleteBook)



export default BookRouter;