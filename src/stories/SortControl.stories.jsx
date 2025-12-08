import React, { useState } from 'react';
import SortControl from '../components/SortControl';
import "../App.css"
import "../index.css"
import {sorting} from "../const/movies";

export default {
  title: 'Components/SortControl',
  component: SortControl,
  tags: ["autodocs"],
  argTypes: {
    currentSelection: { control: 'text' },
    sortingOptions: { control: 'array' },
    onSortChange: { action: 'sort changed' },
  },
};

const Template = (args) => {
  const [selection, setSelection] = useState(args.currentSelection);

  const handleSortChange = (value) => {
    setSelection(value);
    args.onSortChange(value);
  };

  return (
      <SortControl
          {...args}
          currentSelection={selection}
          onSortChange={handleSortChange}
      />
  );
};

export const Default = Template.bind({});

Default.args = {
  currentSelection: sorting[0],
  sortingOptions: sorting,
};