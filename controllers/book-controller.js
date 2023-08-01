import Books from "../model/Books";

export const getAllBook = async(req,res,next)=>{
    let books;
    try{
        books = await Books.find();
    }catch(err){
        console.log(err);
    }
    if(!books){
        return res.status(404).json({message:"No Books Found"})
    }
    return res.status(200).json({books});
};

export const addBook = async(req,res,next)=>{
    const {title, author, description, publication_year} = req.body;
    let books;
    const book = new Books({
        title,
        author,
        description,
        publication_year
    });
    try{
       books = await book.save();
    }catch(err){
       console.log(err);
       return res.status(500).json({message: err});
    }
    return res.status(200).json({books});
};


export const getBookById = async(req,res,next)=>{
    const bookId = req.params.id;

    let book;
    try{
        book = await Books.findById(bookId);
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:`Unable to find any book with id ${bookId}`});
    }
    return res.status(200).json({book});
}


export const updateBook = async(req,res,next)=>{
    const {author } = req.body;
    const bookId = req.params.id;

    let book;
    try{
        book = await Books.findByIdAndUpdate(bookId, {
            author
        })
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(500).json({message:`Unable to update with the given id ${bookId}`});
    }
    return res.status(200).json({book});
}

export const deleteBook = async(req,res,next)=>{
    const bookId = req.params.id;

    let book;
    try{
        book = await Books.findByIdAndRemove(bookId);
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(500).json({message:`Unable to update with the given id ${bookId}`});
    }
    return res.status(200).json({message:"Successfully Deleted"});
};