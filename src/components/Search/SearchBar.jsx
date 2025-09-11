import { Search } from "lucide-react";
import { testItems } from "../../assets/TestData";
import { useState } from "react";
import SearchDropdown from "./SearchDropDown";
import "./Search.css";

function SearchBar() {

    const [currentValue, setSelectedValue] = useState("");

    function handleChange(e) {
        setSelectedValue(e.target.value);
    }

    const filteredResults = testItems.filter((itemName) => {
       return itemName.name.toLowerCase().includes(currentValue);
    });

    return (
        <>
        <div className="searchContainer">
            <div className="searchWrapper">
            <input className="searchBar" onChange={handleChange} type="text" placeholder="Search items..."/>
            <div className="searchBtn"><Search color={"#fafafa70"} size={"22px"}/></div>
            <SearchDropdown names={filteredResults}/>
            </div>
        </div>
        </>
    );
}

export default SearchBar