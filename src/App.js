import React, {useState} from 'react';

import './App.css';
import Person from './components/Person';

const App =props => {
  const [ PersonState, setPersonState] = useState({
    Person:[
        {name: 'subham', age:'28'},
        {name: 'satyam', age:'29'},
        {name: 'sujeet', age:'30'}
    ]
});

const [ OtherState, setOtherState] =useState('some other value')

const switchHandler = () =>{
  
    setPersonState({
        Person: [
            {name:'sujeet', age: '30'},
            {name:'subham', age: '29'},
            {name:'satyam', age: '28'}
        ]
    })
}

const nameChangeHandler = (event) =>{
  setPersonState({
    Person: [
        {name:'sujeet', age: '30'},
        {name: event.target.value, age: '29'},
        {name:'satyam', age: '28'}
    ]
})
}
  return (
    <div>
      
      <button onClick={switchHandler}>Switch name</button>
      <Person name={PersonState.Person[0].name} 
      age={PersonState.Person[0].age}></Person>

      <Person name={PersonState.Person[1].name} 
      age={PersonState.Person[1].age }
      changed={nameChangeHandler}></Person>

      <Person name={PersonState.Person[2].name} 
      age={PersonState.Person[2].age}>
      </Person>
    </div>
  );
}

export default App;
