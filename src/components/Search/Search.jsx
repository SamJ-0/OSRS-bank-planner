import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchDropdown from "./SearchDropDown";

function Search( {setDropDownValue, searchValue, setSearchValue, items} ) {
    const [isFocused, setIsFocused] = useState(false);

    const searchResults = items.filter((itemName) => {
       return itemName.name.toLowerCase().startsWith(searchValue.toLowerCase());
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
       {isFocused && <SearchDropdown searchValue = {searchValue} searchResults={searchResults} setDropDownValue={setDropDownValue}/>} 
    </div>
 );
}

export default Search