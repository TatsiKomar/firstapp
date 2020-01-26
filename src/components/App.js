import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import NewContainer from "./news/NewContainer";

function App() {
  return (
    <div className="card">
      <Header author="Ann"/>
      <NewContainer />
    </div>
  );
}

export default App;
