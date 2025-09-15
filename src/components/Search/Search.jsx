import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchDropdown from "./SearchDropDown";
import { testItems } from "../../assets/TestData";

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const searchResults = testItems.filter((itemName) => {
       return itemName.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    const handleOnFocus = () => {
        setIsFocused(true);
    }

    const handleOnBlur = () => {
        setIsFocused(false);
    };

 return (
    <div className="searchContainer" onFocus={handleOnFocus} onBlur={handleOnBlur}>
        <SearchBar setSearchValue={setSearchValue}/>
       {isFocused && <SearchDropdown searchValue = {searchValue} searchResults={searchResults}/>} 
    </div>
 );
}

export default Search