import React, {Component} from 'react';
import './App.css';
import Form from '../components/Form/Form';
import ImageContainer from './ImageContainer/ImageContainer';

class App extends Component {

    render() {
        return (
            <div>
                <Form/>
                <ImageContainer/>
            </div>
        )
    }
}

export default App;
