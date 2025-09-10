import { Search } from "lucide-react";
import ItemList from "./ItemList";
import { useState } from "react";

function SearchBar() {

    const [currentValue, setSelectedValue] = useState("");

    function handleChange(e) {
        setSelectedValue(e.target.value);
    }

    return (
        <>
        <div className="searchContainer">
            <div className="searchWrapper">
            <input className="searchBar" onChange={handleChange} type="text" placeholder="Search items..."/>
            <div className="searchBtn"><Search color={"#fafafa70"} size={"22px"}/></div>
            </div>
        </div>
        </>
    );
}

export default SearchBar