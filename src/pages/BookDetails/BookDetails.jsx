import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/AddToDB';


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const { bookName, image, review,category } = singleBook || {};

    const handleMarkAsRead = id => {

        MySwal.fire({
            title: "Good job!",
            text: "Books Readed!",
            icon: "success"
        });

        addToStoredDB(id)
    }


    return (
        <div>
            <div className='grid grid-cols-2  w-2/3 '>
                <img className='w-48 p-4 rounded-2xl mr-10 bg-gray-100' src={image} alt="" />
               <div>
                <h1><span className='font-bold text-cyan-400'>Name :</span>{bookName}</h1>
                <p><span className='font-bold text-cyan-400'>Review :</span> {review}</p>
                <p><span className=' font-bold text-cyan-400'>Category :</span> {category}</p>
                
                </div>
                <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-accent m-2 w-max">Mark as Read</button>
                <button className="btn btn-info m-2 w-max mb-10"> Add to WishList</button>
            </div>
            
        </div>
    );
};

export default BookDetails;