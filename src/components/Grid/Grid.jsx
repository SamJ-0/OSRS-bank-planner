import GridTile from "./GridTile";
import "./Grid.css"
import { testItems } from "../../assets/TestData";

function Grid({height, width, bankSlots}) {

const initialSlots = Array.from({length: bankSlots}, (v, i) => ({
    id: `slot-${i}`,
    item: null,
    height: height,
    width: width
}));

initialSlots[1].item = testItems[0];
initialSlots[4].item = testItems[1];

const displayGrid = initialSlots.map((slot) => {
    return <GridTile tileState={slot} key={slot.id}/>
})

    return (
        <div className="gridContainer">
            <div className="gridRow" style={{gridTemplateColumns:`repeat(${8}, ${width})`}}>
                {displayGrid}
            </div>
        </div>
    );
}
export default Grid