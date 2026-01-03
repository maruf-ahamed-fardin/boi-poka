import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    // const data = use(bookPromise);
    // console.log(data);
    // console.log(singleBook)

    const { bookName, bookId, image, publisher, rating, category, tags, yearOfPublishing } = singleBook;

    return (
       <Link to={`/bookDetails/${bookId}`}>     <div className="card bg-base-100 w-96 shadow-sm border shadow-2xl p-3">
            <figure className='p-4 bg-gray-100 w-2/3 mx-auto rounded-md '>
                <img
                    className='h-[166px]'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">

                <div className='flex justify-center gap-10'>
                    {
                        tags.map(tag =>  <button >{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p> Book by: {publisher}</p>
                <div className='border-1 border-dashed opacity-50'></div>
                <div className="card-actions justify-between mt-1">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline decoration-none">{rating}<FaStarHalfAlt /></div>
                </div>
            </div>
        </div></Link>
    );
};

export default Book;