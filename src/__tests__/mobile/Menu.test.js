import React from 'react';
import CoursesMob from '../../components/mobile/CoursesMob';

describe('Courses Mobile render', () => {
  test('Courses Mobile', () => {
    const coursesMob = () => <CoursesMob />;

    expect(coursesMob).toMatchSnapshot();
  });
});
