import { Search } from "lucide-react";
import "./Search.css";

function SearchBar({ setSearchValue }) {

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <>
            <div className="searchWrapper">
            <input className="searchBar" onChange={handleChange} type="text" placeholder="Search items..."/>
            <div className="searchBtn"><Search color={"#fafafa70"} size={"22px"}/></div>
            </div>
        </>
    );
}

export default SearchBar