import { useEffect, useState } from "react";

function ItemList({ setItems }) {

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

    } catch (error) {
        console.log(error);
    }
}
    return (
        <>
        </>
    );
}

export default ItemList