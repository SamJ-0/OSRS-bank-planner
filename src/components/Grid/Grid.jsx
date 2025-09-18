import { useEffect, useState } from "react";
import GridTile from "./GridTile";
import "./Grid.css"

function Grid({height, width, bankSlots, dropDownValue, isAddItemComplete}) {
const initialSlots = Array.from({length: bankSlots}, (v, i) => ({
    id: `slot-${i}`,
    item: null,
    height: height,
    width: width
}));

const [currentSlots, setCurrentSlots] = useState(() => initialSlots);

useEffect(() => {
    const findEmptySlotIndex = currentSlots.findIndex((grid) => grid.item === null);

    const newSlots = currentSlots.map((obj, index) => {
        const matchEmptySlot = index === findEmptySlotIndex;

        if(matchEmptySlot && dropDownValue != "") {
            return {
                ...obj,
                item: dropDownValue,
            };
        } else {
            return obj;
        }
    });

    setCurrentSlots(newSlots);
    isAddItemComplete(true);
},[dropDownValue]);  

   const removeItem = (itemId) => {
       const removeItemFromSlot = currentSlots.map((obj) => {
              if(obj.id === itemId) {
           return {
                ...obj,
                item: null,
            };
        } else {
            return obj;
        }
        });
        setCurrentSlots(removeItemFromSlot);
    }
    
    return (
        <div className="gridContainer">
            <div className="gridRow" style={{gridTemplateColumns:`repeat(${8}, ${width})`}}>

                {currentSlots.map((slot) => {
                    return <GridTile slot={slot} key={slot.id} removeItem={removeItem}/>
                })}
                
            </div>
        </div>
    );
}
export default Grid
