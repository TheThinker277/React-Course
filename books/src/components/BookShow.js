import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete,onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    onDelete(book.id);
  };
  const handleEdit = (id,newTitle) => {
    setShowEdit(!showEdit);
    onEdit(id,newTitle);
  };
  let content = <h3>{book.title}</h3>
  if(showEdit){
    content = <BookEdit book={book} handleEdit={handleEdit}  />
  }
  return (
    <div className="book-show">
        <img alt="books"
            src={`https://picsum.photos/seed/${book.id}/300/200`}
        />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
