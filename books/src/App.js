import {useState} from 'react'
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
function App(){
    const [book,setBook] = useState([]);
    
    const createBook =(title) =>{
        const updatedBooks =[
            ...book,
            {id:Math.round(Math.random()*9999),title}
        ]
        setBook(updatedBooks);
    }
    const deleteBookById = (id)=>{
        const updatedBooks = book.filter((boo)=>{
            return boo.id !== id;
        })
        setBook(updatedBooks);
    }
    const onEdit = (id,newTitle) =>{
        const updatedBooks = book.map((boo)=>{

            if(boo.id===id)
                {
                    return {...boo, title:newTitle}
                }
            return boo;
        })
        setBook(updatedBooks);
    }
    return(
        <div className='app'>
            <h1>Reading List</h1>
            <BookList onEdit={onEdit} onDelete={deleteBookById} books={book}/>
            <BookCreate onCreate={createBook}/>
        </div>
    )
}

export default App;