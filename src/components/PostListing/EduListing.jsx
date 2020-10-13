import React from 'react';

export default function EduListing(){
  return(
    <div id="eduListing" className="eduListing flex center column basePad">
      <h2>Education</h2>
      <hr style={{width: '5rem'}}/>
      <div className="flex column">
        <div>
          <h3>Master of Music</h3>
          <p>2013-2015</p>
          <p>Koninklijk Conservatorium Den Haag, The Netherlands</p>
          <p>Classical guitar w/ Prof. Zoran Dukić.</p>
          <p>Graduated cum laude.</p>
        </div>
        <div>
          <h3>60 ECTS Psychology</h3>
          <p>2012-2013</p>
          <p>University of Bergen – Faculty of Psychology, Norway</p>
          <p>Bachelor level psychology</p>
        </div>
        <div>
          <h3>Erasmus exchange</h3>
          <p>2011-2012</p>
          <p>Musikene - Centro Superior de Música del País Vasco, Spain</p>
          <p>Classical guitar w/ Prof. Marco Socías.</p>
        </div>
        <div>
          <h3>Bachelor classical music</h3>
          <p>2008-2012</p>
          <p>University of Bergen – The Grieg Academy, Norway</p>
          <p>Classical guitar w/ Prof. Stein-Erik Olsen.</p>
        </div>
      </div>
    </div>
  )
}
