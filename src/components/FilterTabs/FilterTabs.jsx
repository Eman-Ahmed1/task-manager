import "./FilterTabs.css"
export default function FilterTabs({onFilter , filter}) {
    
    return (
        <div className="filter-tabs">
            <ul>
                <li className={filter === "all" ? "active" : ""} onClick={() => onFilter("all")}>All</li>
                <li className={filter === "active" ? "active" : ""} onClick={() => onFilter("active")}>Active</li>
                <li className={filter === "completed" ? "active" : ""} onClick={() => onFilter("completed")}>Completed</li>
            </ul>
        </div>
    )
}