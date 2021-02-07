import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(setTopics);
  }, []);

  const onClick =  async () => {
    await fetch(`/api/topics`, {
      method: 'PUT',
      body: JSON.stringify({
        "createdDate": "2021-02-01T12:00:00.000Z",
        "name": "Advanced Object-Oriented Programming",
        "description": "COMP6018"
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
        <button
          onClick={onClick}>
          Submit
        </button>
      </div>
    </>
  );
};