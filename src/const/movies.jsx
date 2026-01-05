export const genres = ['documentary', 'comedy', 'horror', 'crime']
export const navbar_genres = ['all', ...genres]
export const logoText = 'NetflixRoulette'
export const sorting = [
    { label: 'RELEASE DATE', value: 'release_date' },
    { label: 'TITLE', value: 'title' }
]

export const movies = [
    {
        id: 1,
        title: 'Bohemian Rhapsody',
        overview: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).',
        release_date: '2018',
        vote_average: '4.0',
        runtime: '120',
        genres: ['documentary'],
        poster_path: 'https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_FMjpg_UX1000_.jpg'
    },
    {
        id: 2,
        title: 'Avengers: Infinity War',
        overview: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
        release_date: '2018',
        genres: ['action', 'comedy'],
        vote_average: '3.8',
        runtime: '120',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg'
    },
    {
        id: 3,
        title: 'The Shawshank Redemption',
        overview: 'A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.',
        release_date: '1994',
        genres: ['drama'],
        vote_average: '9.3',
        runtime: '120',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    },
    {
        id: 4,
        title: 'Furiosa: A Mad Max Saga',
        overview: 'After being snatched from the Green Place of Many Mothers, while the tyrants Dementus and Immortan Joe fight for power and control, the young Furiosa must survive many trials as she puts together the means to find her way home.',
        release_date: '2024',
        genres: ['action', 'adventure', 'sci-fi'],
        vote_average: '7.5',
        runtime: '120',
        poster_path: 'https://m.media-amazon.com/images/M/MV5BNTcwYWE1NTYtOWNiYy00NzY3LWIwY2MtNjJmZDkxNDNmOWE1XkEyXkFqcGc@._V1_.jpg'
    }
]