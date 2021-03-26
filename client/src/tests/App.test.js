import React from 'react';
import renderer from 'react-test-renderer';
import { About } from '../components/About';
import { Card } from '../components/Card';
import { Cards } from '../components/Cards';
import { Menu } from '../components/Menu';
import { Topic } from '../components/Topics';
import { Topics } from '../components/Topics';

describe('UI snapshots', () => {
  it('should display single card', () => {
    const cardId = 'a266488f577495b2805bf474';
    const component = renderer.create(
      <Card key={cardId} card={{
        _id: cardId,
        question: 'Example question',
        answer: 'Example answer',
      }} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display single topic', () => {
    const topicId = 'a266488f577495b2805bf475';
    const component = renderer.create(
      <Topic topic={{
        _id: topicId,
        name: 'Example name',
        description: 'Example description',
      }} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display Menu component', () => {
    const component = renderer.create(
      <Menu />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display About page', () => {
    const component = renderer.create(
      <About />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display Cards page', () => {
    const component = renderer.create(
      <Cards 
        location={{ aboutProps: '1d8c8b8c87ba4d639eac9944', }}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display Topics page', () => {
    const component = renderer.create(
      <Topics />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
