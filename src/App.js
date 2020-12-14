import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Component/Header/Header";
import Jokes from "./Component/Main/jokes/Jokes"

/**
 * Main render jsx-component
 */
    /*
     * #B4025B – малиновый
     * #EEEEEE – теребильный белый
     * #1D1E1F – приятный чёрный
     */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.state = {apiResponse: ""};

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    handleShow() {
        this.setState({showModal: true});
    }

    handleHide() {
        this.setState({showModal: false});
    }

    render() {

        return (

            <BrowserRouter>
                <div className={'content'}>
                    <Header/>
                    <div className={'main'}>
                        <Route exact to='/memes' component={Jokes}/>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
