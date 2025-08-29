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
        console.log(result.items);
        setItems(result.items);

    } catch (error) {
        console.log(error);
    }

}
    return (
        <>
        <div id={items[8].id} className="itemContainer">
        <img src={items[8].icon} alt="Abyssal whip icon" />
        <p>{items[8].name}</p>
        </div>

        <div id={items[0].id} className="itemContainer">
        <img src={items[0].icon} alt="Abyssal whip icon" />
        <p>{items[0].name}</p>
        </div>
        </>
    );
}

export default ItemList