import { books,meta } from "../Data/books.data";

export const getAllBooks = (req,res) =>{
    return res.status(200).json({books,message:"Books"});
}

export const getBookById = (req,res) => {
    const {id} = req.params;

    const book = books.find(
        b => b.id == id
    );

    if(!book){
        return res.status(400).json({message:"Book with id not found"});
    }

    return res.status(200).json({book,message:"Book found"});
}


export const createBook = (req,res) =>{
    const {title,author} = req.body;

    const newBook = {id: meta.nextId++, title, author};

    books.push(newBook);

    return res.status(200).json({books,message:"Book Created"});
    
}

export const updateBook = (req,res) => {
    const {id} = req.params;
    const {title,author} = req.body
    const book = books.find(
        b => b.id == id
    );

    if(!book){
        return res.status(400).json({message:"Book not found"});
    }

    book.title = title ?? book.title;
    book.author = author ?? book.author;

    return res.status(200).json({book,message:"Book updated successfully"});
}

export const deleteBook = (req,res) =>{
    const {id} = req.params;

    const bookIndex = books.findIndex(
        b => b.id == id
    );

    if(bookIndex == -1){
        return res.status(400).json({message:"book not found"});
    }

    const deletedBook = books.splice(bookIndex,1);

    return res.status(200).json({books,message:"Deleted"});
}