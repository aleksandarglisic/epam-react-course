export function getYear(release_date) {
    return new Date(release_date).getFullYear();
}

export function minutesToHours(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;

    return `${h}h ${m}m`;
}

export function getMovieImgPlaceholder (title) {
    return `https://placehold.co/500x750?text=${encodeURIComponent(title)}`
}
