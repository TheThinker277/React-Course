import BookShow from "./BookShow";
import {useContext} from 'react';
import BooksContext from "../context/books";
function BookList(){
    const { book } = useContext(BooksContext);
    const renderBooks = (book).map((boo)=>{
        return <BookShow key= {boo.id} book={boo}/>
    });
    return(
        <div className="book-list">
            {renderBooks}
        </div>
    )
}

export default BookList