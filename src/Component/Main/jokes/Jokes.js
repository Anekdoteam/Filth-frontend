import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Block from "./Block";
import axios from "axios";

const PAGE_SIZE=100; // const for now, probably changable by user or something
const override_auth=true; // debug usage only

class Jokes extends Component {
	constructor(props){
		super(props);
		this.state = { apiResponse: {success: false, jokes:[]} };
	}

	getJokes(offset, limit, sort){
		axios.get('http://localhost:3001/jokes/getJokes/'+offset+'-'+limit+'&'+sort)
    .then(response => {this.setState({apiResponse: response.data});} );
	}

	componentWillMount(){
		this.getJokes(0, PAGE_SIZE, 1);
	}
    
	render(){
		return (
			<BrowserRouter>
				<div className={'content'}>
                        {/*padding because bug*/}
                        <Block title={'Name'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum metus et purus volutpat, ac imperdiet libero facilisis. Fusce ornare orci ac risus placerat lobortis. '}/>
                        {this.state.apiResponse.jokes.map(joke => <Block title={joke.title} content={joke.content}/>)}
                </div>
			</BrowserRouter>
		);
	}
}

export default Jokes;