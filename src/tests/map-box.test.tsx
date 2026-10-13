import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MapBox from '../components/contact/map-box';

describe('MapBox component', () => {
  test('renders the iframe with the correct attributes', () => {
    render(<MapBox />);

    const iframe = screen.getByTitle('map address');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3456448485417!2d73.78482657519261!3d18.558449482542485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b93519e003cf%3A0xd40322c7ae45b1d9!2sBaner%20Gaon%2C%20Baner%2C%20Pune%2C%20Maharashtra%20411045!5e0!3m2!1sen!2sin!4v1730715245463!5m2!1sen!2sin");
    expect(iframe).toHaveAttribute('width', '400');
    expect(iframe).toHaveAttribute('height', '300');
    expect(iframe).toHaveAttribute('loading', 'lazy');
  });

  test('has the correct data attribute and class name', () => {
    render(<MapBox />);

    const section = screen.getByTestId('mapbox-section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('data-mapbox', 'true');
    expect(section).toHaveClass('mapbox');
  });
});