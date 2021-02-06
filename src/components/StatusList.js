import React, {Component} from 'react';
import Status from './Status'
export default class StatusList extends Component{


  constructor(){
    super();
    this.state = {
        statuses:[
          "There was a lot of traffic today", 
          "Wow, I had the most delicious lunch today",
          "Finally I finished the big project", 
          "Happy to be learning ReactJS" 
          
        ]
    }
  }
  render(){
      return (
          this.state.statuses.map(statusText => {
              return <Status myText = {statusText} />
          })
      )
  }
}