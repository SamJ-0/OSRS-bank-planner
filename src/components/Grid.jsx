import GridTile from "./GridTile";
import "./Grid.css"

function Grid({height, width, bankSlots}) {

const initialSlots = Array.from({length: bankSlots}, (v, i) => ({
    id: `slot-${i}`,
    item: null,
    height: height,
    width: width
}));

const testItem = {
    icon: "https://secure.runescape.com/m=itemdb_oldschool/1757326625008_obj_sprite.gif?id=4151",
    icon_large: "https://secure.runescape.com/m=itemdb_oldschool/1757326625008_obj_big.gif?id=4151",
    id: "4151",
    name: "Abyssal whip",
    description: "A weapon from the Abyss"
}

const testItem2 = {
    icon: "https://secure.runescape.com/m=itemdb_oldschool/1757326625008_obj_sprite.gif?id=10392",
    icon_large: "https://secure.runescape.com/m=itemdb_oldschool/1757326625008_obj_big.gif?id=10392",
    id: 10392,
    name: "A powdered wig",
    description: "A big do about nothing."
}

initialSlots[1].item = testItem;
initialSlots[4].item = testItem2;

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