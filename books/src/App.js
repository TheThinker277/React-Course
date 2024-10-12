import {useState, useEffect} from 'react'
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import axios from 'axios';
function App(){
    const [book,setBook] = useState([]);
    
    const createBook =async (title) =>{
        const response = await axios.post('http://localhost:3001/books',{
            title
        });
        const updatedBooks =[
            ...book,
            response.data,
        ]
        setBook(updatedBooks);
    }
    const fetchBooks = async()=>{
        const response = await axios.get('http://localhost:3001/books');
        setBook(response.data);
    }
    const deleteBookById = async(id)=>{
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = book.filter((boo)=>{
            return boo.id !== id;
        })
        setBook(updatedBooks);
    }
    useEffect(()=>{
        fetchBooks();
    },[])
    const onEdit = async(id,newTitle) =>{
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title:newTitle
        });
        const updatedBooks = book.map((boo)=>{
            if(boo.id===id)
                {
                    return {...boo, ...response.data}
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