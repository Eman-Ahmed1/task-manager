import "./FilterTabs.css"
export default function FilterTabs({onFilter}) {
    
    return (
        <div className="filter-tabs">
            <ul>
                <li className="active" onClick={() => onFilter("all")}>All</li>
                <li className="" onClick={() => onFilter("active")}>Active</li>
                <li className="" onClick={() => onFilter("completed")}>Completed</li>
            </ul>
        </div>
    )
}