import React, { useState } from 'react'
import Select from 'react-select'
import { genres } from '../const/movies'

export default function MovieForm({ initialMovie = {}, onSubmit }) {
    const [selectedGenres, setSelectedGenres] = useState(
        (initialMovie.genres || []).map(g => ({
            value: g,
            label: g.charAt(0).toUpperCase() + g.slice(1),
        }))
    )

    const handleChange = (selected) => {
        setSelectedGenres(selected || [])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = Object.fromEntries(new FormData(event.target))
        data.genres = selectedGenres.map(g => g.value)
        onSubmit(data)
    }

    const genreOptions = genres.map(g => ({
        value: g.toLowerCase(),
        label: g.charAt(0).toUpperCase() + g.slice(1),
    }))

    return (
        <form className="movie-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-field large">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        name="title"
                        placeholder="Movie title"
                        defaultValue={initialMovie.title || ''}
                        required
                    />
                </div>

                <div className="form-field small">
                    <label htmlFor="releaseDate">Release Date</label>
                    <input
                        id="releaseDate"
                        type="date"
                        name="releaseDate"
                        defaultValue={initialMovie.release_date || ''}
                        required
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-field large">
                    <label htmlFor="movieUrl">Movie URL</label>
                    <input
                        id="movieUrl"
                        name="movieUrl"
                        placeholder="https://"
                        defaultValue={initialMovie.movieUrl || ''}
                    />
                </div>

                <div className="form-field small">
                    <label htmlFor="rating">Rating</label>
                    <input
                        id="rating"
                        type="number"
                        name="rating"
                        step="0.1"
                        min="0"
                        max="10"
                        placeholder="0–10"
                        defaultValue={initialMovie.vote_average || ''}
                        required
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-field large">
                    <label htmlFor="genres">Genre</label>
                    <div className="genre-grid">
                        <Select
                            inputId="genres"
                            options={genreOptions}
                            isMulti
                            classNamePrefix="rs"
                            value={selectedGenres}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-field small">
                    <label htmlFor="runtime">Runtime</label>
                    <input
                        id="runtime"
                        name="runtime"
                        placeholder="Example: 120"
                        defaultValue={initialMovie.runtime || ''}
                        required
                    />
                </div>
            </div>

            <div className="form-field full">
                <label htmlFor="overview">Overview</label>
                <textarea
                    id="overview"
                    name="overview"
                    placeholder="Movie description..."
                    defaultValue={initialMovie.overview || ''}
                    rows={5}
                />
            </div>

            <button className="submit-btn" type="submit">
                Save
            </button>
        </form>
    )
}
