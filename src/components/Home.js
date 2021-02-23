const Home = () => {

  const handleClick = (e) => {
    console.log('hello ! ' , e);
  }

  const handleClickTwo = (name, e) => {
    console.log(`hello ${name}, wellcome`, e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick} >Click me !</button>
      <button onClick={(e) => handleClickTwo('hamidreza', e)} >Click me agine !</button>
    </div>
  );
}

export default Home;