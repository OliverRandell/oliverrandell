import React, { useState, useEffect } from 'react';
import Pages from './pages';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/oliverrandell')
      .then(response => response.json())
      .then((user) => {
        setUser(user);
      })
      .catch(error => console.error(error));
  }, []);
  if (!user) {
    return <div />;
  }
  return <Pages user={user} />;
}

export default App;