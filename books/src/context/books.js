import {useState,createContext, useCallback} from 'react';
import axios from 'axios';
const BooksContext = createContext();
const Provider = ({children}) =>{
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
    const fetchBooks = useCallback(async()=>{
        const response = await axios.get('http://localhost:3001/books');
        setBook(response.data);
    },[]);
    
    const deleteBookById = async(id)=>{
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = book.filter((boo)=>{
            return boo.id !== id;
        })
        setBook(updatedBooks);
    }
   
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
    const valueToShare={
        book,
        deleteBookById,
        onEdit,
        fetchBooks,
        createBook,
    }
    return <BooksContext.Provider value ={valueToShare}>
        {children}
    </BooksContext.Provider>
}
export {Provider};
export default BooksContext;