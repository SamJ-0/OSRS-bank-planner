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

const [currentSlots, setCurrentSlots] = useState(initialSlots);

useEffect(() => {
    const findEmptySlot = currentSlots.findIndex((grid) => grid.item === null);

    const updateGrid = currentSlots.map((obj, index) => {
        const emptySlot = index === findEmptySlot;

        if(emptySlot && dropDownValue != "") {
            return {
                ...obj,
                item: dropDownValue,
            };
        } else {
            return obj;
        }
    });
    setCurrentSlots(updateGrid);
},[dropDownValue]);
    

const displayGrid = currentSlots.map((slot) => {
    return <GridTile slot={slot} key={slot.id}/>
});
    
    return (
        <div className="gridContainer">
            <div className="gridRow" style={{gridTemplateColumns:`repeat(${8}, ${width})`}}>
                {displayGrid}
            </div>
        </div>
    );
}
export default Grid