import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/Card/Card'; 

describe('Card Component', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText } = render(
      <Card flag="flag-url" name="Country Name" continent="Continent" idPais="ABC" />
    );

    expect(getByText('Name: Country Name')).toBeInTheDocument();
    expect(getByText('Continent: Continent')).toBeInTheDocument();
    expect(getByAltText('Flag')).toBeInTheDocument();
  });
});

