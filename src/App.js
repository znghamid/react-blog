import './App.css';

function App() {

  const title = "First react blog";
  const link = "http://lilnk.ir";
  const like = 50;
  const array = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>liked {like} times</p>
        <a href={link}>lilnk.ir</a>
        <p>{array}</p>
      </div>
    </div>
  );
}

export default App;
