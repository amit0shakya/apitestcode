import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class Main extends Component{
    constructor(){
        super()
    }

    componentWillMount(){
        console.log("event fire")
        axios.get('/data')
        .then((data)=>{
            console.log(data.data,"<<<<<data callback")
        })
        .catch(err=>{
            console.log(err,"<<<error")
        })
    }

    render(){
        return(
            <h1>Hello Web</h1>
        )
    }
}


ReactDOM.render(<Main />,
document.getElementById('root'));
registerServiceWorker();