import React from 'react';
import propTypes from 'prop-types';


const StudentCard = ({ addNotes, data: { id, name, profilePic, lastCalled, timesCalled, notes } }) => (
  <ul className = {'student-card'} onClick={addNotes} id={id} title="Tap to add student notes!">
      <div className = 'card-name'>{name}</div>
      <hr></hr>
      <img className = 'card-profile' src={profilePic}></img>
      <hr></hr>
      <p>Last Called: {new Date(lastCalled).toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      })}
      </p>
      <p>Times Called: {timesCalled}</p>
      <span>{notes}</span>
  </ul>
);


StudentCard.propTypes = {
  data: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    profilePic: propTypes.string.isRequired,
    lastCalled: propTypes.string.isRequired,
    timesCalled: propTypes.number.isRequired,
    notes: propTypes.array.isRequired,
  }),
  addNotes: propTypes.func,
};

export default StudentCard;
