import { useState } from "react"
import { useOutletContext } from "react-router"

export default function SearchForm({ placeholder = "" }) {
    const { onSearch, query } = useOutletContext()
    const [searchQuery, setSearchQuery] = useState(query)

    const handleSubmit = () => {
        onSearch(searchQuery)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleSubmit()
    }

    return (
        <div className="content-center">
            <div className="search-display">
                <p>Find Your Movie</p>
                <input
                    type="text"
                    className="search-input"
                    placeholder={placeholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyUp={handleKeyPress}
                />
                <button onClick={handleSubmit} className="search-button ml-4">
                    Search
                </button>
            </div>
        </div>
    )
}
