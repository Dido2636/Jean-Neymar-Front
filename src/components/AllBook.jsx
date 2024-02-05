import React, { useState } from "react";
import Book from "../components/Book";

const books = [
    {
        imageUrl:"https://jean-neymar.netlify.app/static/media/cover1.9f367c22.jpg",
        titre: "Après coup, Jean rigole"
    },
    {
        imageUrl:"https://jean-neymar.netlify.app/static/media/cover2.55ab26d3.jpg",
        titre: "Il me reste encore un oeil"
    },
    {
        imageUrl:"https://jean-neymar.netlify.app/static/media/cover2.55ab26d3.jpg",
        titre: "Il me reste encore un oeil"
    },

]

function AllBook() {
    const [allBook, setAllBook] = useState(books);


    
    
  return (
    <>


      <div className="allbook">
      {allBook.map((book, index) => {
          return (
            <Book
              key={index}
              imageUrl={book.imageUrl}
              titre={book.titre}
            />
          );
        })}
       
       
      </div>
    </>
  );
}
export default AllBook;
