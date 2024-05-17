import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

/* import './index.css';
import App from './App';
 */
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color='green' maxRating={20} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*  <App /> */}
    <StarRating messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']} />
    

    <StarRating maxRating={10} color="blue" size={34} className="test"
      defaultRating={3}     
    />
    <Test/>
  </React.StrictMode>
);

