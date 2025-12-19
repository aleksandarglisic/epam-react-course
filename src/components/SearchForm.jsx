import { useState } from "react"

export default function SearchForm({ initialQuery = "", onSearch, placeholder = "" }) {
    const [query, setQuery] = useState(initialQuery)

    const handleSubmit = () => {
        onSearch(query)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit()
        }
    }

    return (
        <div className="content-center">
            <div className="search-display">
                <p>Find Your Movie</p>
                <input
                    type="text"
                    className="search-input"
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={handleKeyPress}
                />
                <button onClick={handleSubmit} className="search-button ml-4">
                    Search
                </button>
            </div>
        </div>
    )
}
