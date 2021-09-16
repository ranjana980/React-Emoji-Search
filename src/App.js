import React from "react";
import "./App.css";
import { Component } from "react";
import Information from './emojiList.js';
import './App.css';
class App extends Component {
  constructor() {
    super();

    this.state = {
      search: null
    };
  }
  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword })
  }
  render() {
    const styleInfo = {
      paddingRight: '10px'
    }
    const elementStyle = {
      border: 'solid',
      borderRadius: '10px',
      position: 'relative',
      left: '10vh',
      height: '4vh',
      width: '66vh',
      marginBottom: '2vh'
    }
    const items = Information.filter((data) => {
      if (this.state.search == null)
        return data
      else if (data.title.toLowerCase().includes(this.state.search.toLowerCase()) || data.symbol.toLowerCase().includes(this.state.search.toLowerCase())) {
        return data
      }
    }).map(data => {
      return (
          <div class="main_div">
            <ul>
              <div>
                <span style={styleInfo}>{data.symbol}{data.title}</span>
              </div>
            </ul>
          </div>
      )
    })

    return (
      
        <div class="i_div">
          <center><h1>🤗️Emoji Search🤗️</h1>
          <input type="text" placeholder="Search Here..." style={elementStyle} onChange={(e) => this.searchSpace(e)} />
          </center>
          {items}
        </div>
      
    )
  }
}
export default App;