import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '..';
afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });
   
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
      });
    })
 
 
    describe('emoji is visible', () => {
      it('inserts emoji into the h2', () => {
      const { getByLabelText } = render(<Nav />);
    
      expect(getByLabelText('camera')).toHaveTextContent('📸');
      });
    })

    describe('links are visble', () => {
      it('inserts text into links', () => {
        const {getByTestId} = render(<nav />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
      }); 
    })