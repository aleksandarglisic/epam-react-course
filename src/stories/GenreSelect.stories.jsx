import React, { useState } from "react";
import { genres } from "../const/movies";
import GenreSelect from "../components/GenreSelect";


export default {
  title: "Components/GenreSelect",
  component: GenreSelect,
  tags: ["autodocs"],
  argTypes: {
    genres: { control: "array" },
    selectedGenre: { control: "text" },
    onSelect: { action: "selected" },
  },
};

const Template = (args) => {
  const [selectedGenre, setSelectedGenre] = useState(args.selectedGenre);

  const handleSelect = (genre) => {
    setSelectedGenre(genre);
    args.onSelect(genre);
  };

  return (
      <GenreSelect
          {...args}
          selectedGenre={selectedGenre}
          onSelect={handleSelect}
      />
  );
};

export const Default = Template.bind({});
Default.args = {
  genres: genres,
  selectedGenre: genres[0],
};
