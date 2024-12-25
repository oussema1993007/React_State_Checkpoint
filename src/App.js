// filepath: /C:/Users/yessm/Desktop/react-project/state_checkpoint/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './Profile';
import Button from 'react-bootstrap/Button';

const App = () => {
  const [person] = useState({
    fullName: 'Russell Crowe',
    bio: 'A passionate individual with various interests.',
    imgSrc: require('./profile.jpg'),
    profession: 'Software Engineer',
  });
  const [show, setShow] = useState(true);
  const [timeMark, setTimeMark] = useState(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setTimeMark(new Date());
    const interval = setInterval(() => {
      forceUpdate();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const forceUpdate = React.useReducer(() => ({}), {})[1];

  const showProfile = () => {
    setShow(!show);
  };

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="App">
      <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {show ? <Profile {...person} /> : null}
          </div>
          <div className="flip-card-back">
            <p>Back of the card</p>
          </div>
        </div>
      </div>
      <div className="underDiv2">
        <Button variant="secondary" size="lg" className="Toggler" onClick={showProfile}>
          Toggle Profile
        </Button>
        <Button variant="secondary" size="lg" className="Toggler" onClick={flipCard}>
          Flip Card
        </Button>
      </div>
      <div className="underDiv3">
        <div className="td1"><p>Time interval since mount :</p></div>
        <div className="td2">{Math.floor((new Date() - timeMark) / 1000)}</div>
        <div className="td3"><p>seconds</p></div>
      </div>
    </div>
  );
};

export default App;