import { useEffect, useState } from "react";
import GridTile from "./GridTile";
import "./Grid.css"

function Grid({height, width, bankSlots, dropDownValue}) {
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
            return obj;á
        }
    })

    setCurrentSlots(newSlots);
},[dropDownValue]);  
    
    return (
        <div className="gridContainer">
            <div className="gridRow" style={{gridTemplateColumns:`repeat(${8}, ${width})`}}>

                {currentSlots.map((slot) => {
                    return <GridTile slot={slot} key={slot.id}/>
                })}
                
            </div>
        </div>
    );
}
export default Grid
