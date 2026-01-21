import React, { useMemo, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [sort, setSort] = useState("");
    const [sortedList, setSortedList] = useState([]);

    const data = useLoaderData();
    console.log(data);

    const readList = useMemo(() => {
        if (data) {
            const storedBookData = getStoredBook() || [];
            const convertedStoredBooks = storedBookData.map(Id => parseInt(Id));
            const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
            console.log(myReadList);
            return myReadList;
        }
        return [];
    }, [data]);

    const handleSort = (type) => {
        setSort(type)

        if(type==="page"){
            const sortedByPage =[...readList].sort((a,b)=>a.totalPages-b.totalPages);
            setSortedList(sortedByPage)
        }
        if(type==="rating"){
            const sortedByRatings =[...readList].sort((a,b)=> a.rating-b.rating)
            setSortedList(sortedByRatings)
        }
    }

    return (
        <div>

        
<button  className="btn bg-amber-900" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
  Sort by : {sort?sort:""}
</button>

<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  <li><a onClick={()=>handleSort("page")}>page</a></li>
  <li><a onClick={()=>handleSort("rating")}>rating</a></li>
</ul>
            <Tabs>
                <TabList>
                    <Tab><h2>Read Book List</h2></Tab>
                    <Tab><h2>My Wish List</h2></Tab>
                </TabList>

                <TabPanel>
                    <h2 >Books I read: {readList.length}</h2>
                    {(sortedList.length > 0 ? sortedList : readList).map(b => <Book key={b.bookId} singleBook={b}></Book> 
                    )}
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                    
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;
