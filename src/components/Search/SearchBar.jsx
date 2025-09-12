import { Search } from "lucide-react";
import { testItems } from "../../assets/TestData";
import { useState } from "react";
import SearchDropdown from "./SearchDropDown";
import "./Search.css";

function SearchBar() {

    const [currentValue, setSelectedValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const handleOnFocus = () => {
        setIsFocused(true);
    };

    const handleOnBlur = () => {
        setIsFocused(false);
    };

    const filteredResults = testItems.filter((itemName) => {
       return itemName.name.toLowerCase().includes(currentValue.toLowerCase());
    });

    return (
        <>
        <div className="searchContainer">
            <div className="searchWrapper">
            <input className="searchBar" onChange={handleChange} onFocus={handleOnFocus} onBlur={handleOnBlur} type="text" placeholder="Search items..."/>
            <div className="searchBtn"><Search color={"#fafafa70"} size={"22px"}/></div>
            {isFocused ? <SearchDropdown names={filteredResults} search={currentValue}/>
            :
            null }
            </div>
        </div>
        </>
    );
}

export default SearchBar