import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
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
  const [isFormDisplayed, setFormDisplay] = useState(false);

  const handleFormDisplay = () => setFormDisplay(!isFormDisplayed);

  useEffect(() => {
    fetch('/api/topics')
      .then(response => response.json())
      .then(setTopics);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
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
        setTopicName('');
        setTopicDescription('');
        setFormDisplay(!isFormDisplayed);
        forceUpdate();        
      });
  }

  return (
    <>
      <h2>Topics</h2>
      <div className="topics">
        {topics.length !== 0 &&
          topics.map(topic =>
            <Link
              to={{
                pathname: "/cards",
                aboutProps: {
                  topicId: topic._id
                }
              }}
              key={topic._id}>
              <Topic topic={topic} />
            </Link>
          )
        }
        <Button
          type="submit"
          onClick={handleFormDisplay}
          >
          {!isFormDisplayed ? 
            <span>Add new <FontAwesomeIcon icon={faPlus} /></span> :
            <span>Hide <FontAwesomeIcon icon={faMinus} /></span>}
        </Button>
        {isFormDisplayed && <AddNewForm>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Topic name: </label>
            <FormInput
              type="text"
              name="name"
              value={topicName}
              onChange={({ target: { value } }) => setTopicName(value)} />
            <br />
            <label htmlFor="description">Topic description: </label>
            <FormInput
              type="text"
              name="description"
              value={topicDescription}
              onChange={({ target: { value } }) => setTopicDescription(value)} />
            <br />
            <Button
              type="submit"
              disabled={!topicName}>OK</Button>
          </form>
        </AddNewForm>}
      </div>
    </>
  );
};