import React, { Component } from 'react';
import './App.css';

class App extends Component { // Creating a class named App that uses Component
    constructor() { //constructor is the entry point
        super(); 
        this.state = { //this is how to create states
          picture: ' ',
          name: ' ', 
          friends: []
        }
        render () {
            return ();
        }
}

export default App; // need to export App in order to create 




export const Header = (props) => {
    return (
        <li> <a href="#"> {props.homeLink}</a></li> 
    )
}

class App extends Component {
    constructor(){
        super(); 
        this.state = {
            homeLink: "Home"
        }
    }
    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName,
        });
    }
    render() {
        return (
            <div>
                <Home changeLink={(event)=>{this.onChangeLinkName(event)}}
                      initialLinkName={this.state.homeLink}/>
            </div>
        )
    }
}

export class Home extends Component {
    constructor(props){
        super();
        this.state = {
            homeLink: props.initialLinkName
        }
    }
    onChangeLink(){
        this.props.changeLink(this.state.homeLink)
    }
    onHandleChange(){
        this.setState({
            homeLink: event.target.value
        })
    }
    render(){
        return (
            <div> 
                <input 
                    type="text" value={tihs.state.homeLink} 
                    onChange={(event)=>{this.onHandleChange(event)}}
                />
                <button onClick={this.onChangeLink.bind(this)}> 
                    Change Header Link 
                </button>
            </div>
        )
    }
}

// Component Lifecycle 
componentWillMount(); // Immediately before initial rendering
componentDidMount(); // Immediately after intial rendering
componentWillReceiveProps(nextProps); // When component receives new props
shouldComponentUpdate(nextProps, nextState); // Before rendering, after receiving new props or state
componentWillUpdate(nextProps,nextState); // Before rendering, after receiving new props or state, after shouldComponentUpdate comes back true
componentDidUpdate(prevProps,prevState); // After component's updates after flushed to DOM
componentWillUnmount(); // Immediately before removing component from DOM

