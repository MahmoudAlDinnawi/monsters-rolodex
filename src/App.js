import React, { Component } from 'react';
import { CardList }  from  './components/card-list/card-list.compenets'
import { SearchBox } from './components/searchbox/searchbox.compoments'
import './App.css';

class App extends Component{
  constructor()
  {
    super();
    this.state=
    {
      monsters : [], 
      searchField:''

    };
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
    
  }
  render(){
    const{monsters,searchField} = this.state;
    const filtredM =monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
    <div className="App">
    <h1>Robot rolodex</h1>

    <SearchBox
    placeholder='Search monster'
    handelchange={e => {
      this.setState({searchField:e.target.value})
    }}
    
    />
   
    <CardList monsters={filtredM}/>
    </div>
    );
  }
}

export default App;
