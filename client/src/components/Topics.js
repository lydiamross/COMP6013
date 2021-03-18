import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { AddNewForm, FormInput, Button, TopicContainer, TopicCategory } from '../styled';

const Topic = ({ topic }) => {
  return (
    <TopicContainer key={topic._id}>
      <h4>{topic.name}</h4>
      <p>{topic.description}</p>
    </TopicContainer>
  )
};

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [topicName, setTopicName] = useState('');
  const [topicDescription, setTopicDescription] = useState('');
  const [isFormDisplayed, setFormDisplay] = useState(false);
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    fetch('/api/topics')
      .then(response => response.json())
      .catch(error => console.error('ERROR:', error))
      .then(setTopics);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/api/topics`, {
      method: 'POST',
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
  };

  const handleFormDisplay = () => setFormDisplay(!isFormDisplayed);
  const currentDate = moment();
  const dateWeekFromNow = moment().add(7, 'days');
  const topicsNow = topics.filter(topic => moment(topic.dateToNextBeRevised).isBefore(currentDate));
  const topicsThisWeek = topics.filter(topic => moment(topic.dateToNextBeRevised).isBetween(currentDate, dateWeekFromNow));
  const topicsNextWeek = topics.filter(topic => moment(topic.dateToNextBeRevised).isAfter(dateWeekFromNow));

  return (
    <div className="topics">
      <TopicCategory
        topicStatus="now">
        <h3>These topics need revision now</h3>
        {topicsNow.length !== 0 &&
          topicsNow.map(topic =>
            <Link
              to={{
                pathname: "/cards",
                aboutProps: {
                  topicId: topic._id,
                  topicName: topic.name
                }
              }}
              key={topic._id}>
              <Topic topic={topic} />
            </Link>
          )
        }
      </TopicCategory>
      <TopicCategory
        topicStatus="thisWeek">
        <h3>These topics will need revision this week</h3>
        {topicsThisWeek.length !== 0 &&
          topicsThisWeek.map(topic =>
            <Link
              to={{
                pathname: "/cards",
                aboutProps: {
                  topicId: topic._id,
                  topicName: topic.name
                }
              }}
              key={topic._id}>
              <Topic topic={topic} />
            </Link>
          )
        }
      </TopicCategory>
      <TopicCategory
        topicStatus="nextWeek">
        <h3>These topics don't need revising for now</h3>
        {topicsNextWeek.length !== 0 &&
          topicsNextWeek.map(topic =>
            <Link
              to={{
                pathname: "/cards",
                aboutProps: {
                  topicId: topic._id,
                  topicName: topic.name
                }
              }}
              key={topic._id}>
              <Topic topic={topic} />
            </Link>
          )
        }
      </TopicCategory>
      <Button
        type="submit"
        onClick={handleFormDisplay}>
        {!isFormDisplayed ?
          <span>Add new topic <FontAwesomeIcon icon={faPlus} /></span> :
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
  );
};
