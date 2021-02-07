import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { AddNewForm, FormInput, Button } from '../styled';

const Topic = ({ topic }) => {
  return (
    <div key={topic._id}>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
    </div>
  )
};

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [topicName, setTopicName] = useState('');
  const [topicDescription, setTopicDescription] = useState('');

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(setTopics);
  }, []);

  const onClick = () => {
    fetch(`/api/topics`, {
      method: 'PUT',
      body: JSON.stringify({
        name: topicName,
        description: topicDescription
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then(newTopic => {
        topics.push(newTopic);
        setTopics(topics);
        forceUpdate();
      });
  }

  return (
    <>
      <h2>Topics</h2>
      <div className="topics">
        {topics.length !== 0 &&
          topics.map(topic =>
            <Link to={{
              pathname: "/cards",
              aboutProps: {
                topicId: topic._id
              }
            }}><Topic key={topic._id} topic={topic} /></Link>
          )
        }
        <AddNewForm>
          <form onSubmit={onClick}>
            <FormInput
              type="name"
              placeholder="Topic name"
              value={topicName}
              onChange={({ target: { value } }) => setTopicName(value)}
              />
            <FormInput
              type="description"
              placeholder="Topic description"
              value={topicDescription}
              onChange={({ target: { value } }) => setTopicDescription(value)}
              />
            <Button
              type="submit"
              disabled={!topicName}
              >OK</Button>
          </form>
        </AddNewForm>
      </div>
    </>
  );
};