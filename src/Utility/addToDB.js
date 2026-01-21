const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");

    if(storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else{
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();
    const idStr = String(id);

    if(storedBookData.includes(idStr)){
       
        alert("This id Already exist ");
        return false;
    }
    else{
        storedBookData.push(idStr);
       const data = JSON.stringify(storedBookData);
       localStorage.setItem("readList",data);
       return true;
    }
}

export { addToStoredDB ,  getStoredBook };