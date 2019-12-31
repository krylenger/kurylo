import React from 'react';
import logo from './logo.svg';
import './App.css';
import mainPhoto from './main.jpeg';
import secondPhoto from './IMG_1860.jpeg';
import thirdPhoto from './IMG_1671.jpeg';
import lastPhoto from './IMG_4076.jpeg';
import togetherPhoto from './IMG_1700.jpeg';


function App() {
  return (
    <div className="App">
      <img className='mainPh grow' src={mainPhoto} height='500px' />
      <div className='p1'>Любимая Анютка!</div>
      <div className='p2'>Моя малышка, поздравляю тебя с наступающим 2020 годом 
      и во-первых хочу поблагодарить тебя
      </div>
      <div className='p2'>за то, что ты разукрашиваешь мою жизнь, приносишь много тепла и доброты, радости и веселья!
      </div>
      <div className='p2'>С тобой всегда интересно и точно не соскучишься)
      </div>
      <div className='p2'>Желаю тебе двигаться всегда только вперед и пусть тебе сопутствует удача!
      </div>
      <div className='p2'>Всегда оставайся такой же стильной и прикольной!! :)</div>
      <div className='secondContainer'>
        <img className='mainPh2' src={secondPhoto} height='500px' />
        <img className='mainPh2' src={thirdPhoto} height='500px' />
      </div>
      <div>
        <div className='greeting p2'> Мы с тобой одно целое!</div>
        <img className='togetherPhoto' src={togetherPhoto} height='500px' />
      </div>
      <div className='p2'> С Новым 2020!!! </div>
      <img className='lastPhoto' src={lastPhoto} height='500px' />

    </div>
  );
}

export default App;
