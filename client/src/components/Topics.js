import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AddNewForm, FormInput, Button, TopicContainer } from '../styled';

const Topic = ({ topic }) => {
  return (
    <TopicContainer key={topic._id}>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
    </TopicContainer>
  )
};

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [topicName, setTopicName] = useState('');
  const [topicDescription, setTopicDescription] = useState('');
  const [isMenuDisplayed, setMenuDisplay] = useState(false);

  function changeMenuDisplay() {
    setMenuDisplay(!isMenuDisplayed);
  };

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
        <Button
          type="submit"
          onClick={changeMenuDisplay}
          disabled={isMenuDisplayed}>
          Add new <FontAwesomeIcon icon={faPlus} />
        </Button>

        {isMenuDisplayed && <AddNewForm>
          <form onSubmit={onClick}>
            <label for="name">Topic name: </label>
            <FormInput
              type="text"
              name="name"
              value={topicName}
              onChange={({ target: { value } }) => setTopicName(value)}
            />
            <br />
            <label for="description">Topic description: </label>
            <FormInput
              type="text"
              name="description"
              value={topicDescription}
              onChange={({ target: { value } }) => setTopicDescription(value)}
            />
            <br />
            <Button
              type="submit"
              disabled={!topicName}
            >OK</Button>
          </form>
        </AddNewForm>}
      </div>
    </>
  );
};