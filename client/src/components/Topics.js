import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Topic({ topic }) {
  return (
    <div key={topic._id}>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
    </div>
  )
};

export const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(setTopics);
  }, []);

  return (
    <>
      <h2>Topics</h2>
      <div className="topics">
        {topics.map(topic =>
          <Link to={{
            pathname: "/cards",
            aboutProps: {
              topicId: topic._id
            }
            }}><Topic key={topic._id} topic={topic} /></Link>
        )}
      </div>
    </>
  )
};
