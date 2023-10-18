import React, { useEffect, useState } from 'react';
import './Relogio.css';


function Relogio() {

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      const date = new Date();
      setHour(date.getHours());
      setMinute(date.getMinutes());
      setSecond(date.getSeconds());
    }, 1000);
    
    return () => clearInterval(interval);

  }, [hour, minute, second]);

  return (
    <h1>{hour}:{minute}:{second}</h1>
  );
}

export default Relogio;
