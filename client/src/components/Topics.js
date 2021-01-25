import React, { useState, useEffect } from 'react'

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
          <Topic key={topic._id} topic={topic} />
        )}
      </div>
    </>
  )
};
