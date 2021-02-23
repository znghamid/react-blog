import { useState } from 'react';

const Home = () => {

  const [name, setName] = useState('hamidreza');
  const [age, setAge] = useState(18);

  const handleClick = () => {
    setName('arash');
    setAge(19);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick} >Click me !</button>
    </div>
  );
}

export default Home;