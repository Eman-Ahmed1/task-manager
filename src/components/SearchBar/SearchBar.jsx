import "./SearchBar.css"
import { IoMdSearch } from "react-icons/io";
export default function SearchBar({onSearch, search}) {
   
    return (
        <div className="search-bar">
           
                <IoMdSearch />
                <input
                    type="search"
                    placeholder="Search tasks... "
                    value={search}
                    onChange={(e) => onSearch(e.target.value)}
                />
         
        </div>
    )
}