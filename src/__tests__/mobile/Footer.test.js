import React from 'react';
import Footer from '../../components/mobile/Footer';

describe('Mobile Footer render', () => {
  test('Mobile Footer', () => {
    const footer = () => <Footer />;

    expect(footer).toMatchSnapshot();
  });
});
