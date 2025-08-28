import { useEffect, useState } from "react";

function ItemList() {
    const [items, setItem] = useState([]);

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
        console.log(result.items);
        setItem(result.items);
    } catch (error) {
        console.log(error);
    }

}
    return (
        <>
        <div>{items.map((item) => {
            return <div key={item.id}>{item.name}</div>
        })}</div>
        </>
    );
}
export default ItemList