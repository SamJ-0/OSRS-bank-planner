import { Search } from "lucide-react";
import ItemList from "./ItemList";

function SearchBar() {

    return (
        <>
        <div className="searchContainer">
            <div className="searchWrapper">
            <input type="text" className="searchBar" placeholder="Search items..."/>
            <div className="searchBtn"><Search color={"#fafafa70"} size={"22px"}/></div>
            </div>
        </div>
        </>
    );
}

export default SearchBar