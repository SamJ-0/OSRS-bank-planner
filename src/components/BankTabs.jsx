import Grid from "./Grid";
import "./Grid.css"

function BankTabs() {
    return(
        <>
        <div className="bankTabContainer">
            <Grid height="50px" width="100px" columns={8} numOfTiles={8}/>
        </div>
        </>
    );
}

export default BankTabs