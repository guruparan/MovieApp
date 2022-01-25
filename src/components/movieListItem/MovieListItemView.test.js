
import renderer from 'react-test-renderer';
import MovieListItem from './MovieListItemView';
import React from 'react';

test('renders correctly', () => {
    const tree = renderer.create(<MovieListItem movie={{
        release_date: '2020-01-01'
    }} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Valid movie title', () => {
    const testRenderer = renderer.create(<MovieListItem movie={{
        title:'Test',
        release_date: '2020-01-01'
    }} />);
    const testInstance = testRenderer.root;
    
    expect(testInstance.findByProps({testID: "movieTitle"}).props.children.join()).toBe('Test, (2020)');
});