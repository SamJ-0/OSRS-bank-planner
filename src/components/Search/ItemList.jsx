import { useEffect, useState } from "react";

function ItemList() {
    const [items, setItems] = useState([]);

     useEffect(() => {
        callAPI();
    }, []);

    const callAPI = async () => {
    try {
        const response = await fetch('http://localhost:3000/items');

        if(!response.ok) {
            throw new Error("Couldn't fetch resource");
        }
        const result = await response.json();
        setItems(result.items);
        console.log(items);

    } catch (error) {
        console.log(error);
    }
}
console.log(callAPI());
    return (
        <>
        <div>This is from ItemList</div>
        </>
    );
}

export default ItemList