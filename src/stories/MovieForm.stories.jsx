import React from 'react';
import MovieForm from "../components/MovieForm";

export default {
    title: 'Components/MovieForm',
    component: MovieForm,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        onSubmit: { action: 'form submitted' },
    },
};

const Template = (args) => (
    <div style={{ width: 800 }}>
        <MovieForm {...args} />
    </div>
);

export const AddMovie = Template.bind({});
AddMovie.args = {
    initialMovie: {},
};

export const EditMovie = Template.bind({});
EditMovie.args = {
    initialMovie: {
        title: 'Inception',
        releaseDate: '2010-07-16',
        movieUrl: 'https://www.imdb.com/title/tt1375666/',
        rating: 8.8,
        genres: ['action', 'sci-fi'],
        duration: 148,
        description:
            'A thief who steals corporate secrets through the use of dream-sharing technology.',
    },
};
