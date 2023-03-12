import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentGMTTime, setCurrentGMTTime] = useState('');
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentGMTTime(new Date().toUTCString());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

    return ( 
       
        <footer className="footer">
            <div>
                <p> {currentGMTTime}</p>
            </div>
        </footer>
     );
}
 
export default Footer;