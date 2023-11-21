import React, { useEffect, useState } from 'react';
import './Relogio.css';


function Relogio() {

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      const date = new Date();
      setHour(date.getHours().toString().padStart(2,"0"));
      setMinute(date.getMinutes().toString().padStart(2,"0"));
      setSecond(date.getSeconds().toString().padStart(2,"0"));
    }, 1000);
    
    return () => clearInterval(interval);

  }, [hour, minute, second]);

  return (
    <div className='relogio'>
      <h2>{hour}:{minute}:{second}</h2>
    </div>
  );
}

export default Relogio;
