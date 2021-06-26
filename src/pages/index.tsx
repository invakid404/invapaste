import { useState, useEffect } from 'react';

function useMessage() {
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.text())
      .then((text) => setMessage(text));
  }, []);

  return message;
}

const Home = () => {
  const message = useMessage();

  return <p>Message from Nest: {message}</p>;
};

export default Home;
