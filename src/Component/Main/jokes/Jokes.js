import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import Block from "./Block";
import axios from "axios";

const PAGE_SIZE = 100; // const for now, probably changable by user or something
const override_auth = true; // debug usage only

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: {success: false, jokes: []}};
  }

/*
  getJokes(offset, limit, sort) {
    axios.get('http://localhost:3001/jokes/getJokes/' + offset + '-' + limit + '&' + sort)
      .then(response => {
        this.setState({apiResponse: response.data});
      });
  }
*/

/*
  componentWillMount() {
    this.getJokes(0, PAGE_SIZE, 1);
  }
*/

  render() {
    return (
      <BrowserRouter>
        <div className={'content'}>
          <Block title={"TITLE TITLE TITLE TITLE"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum leo arcu, nec mollis neque tristique ut. Cras vel odio nisi. Morbi et imperdiet nisl, a dapibus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In porttitor dictum metus, quis eleifend lorem tincidunt at. In ut dolor neque. Nam ac elit suscipit, suscipit est sed, efficitur nunc. Integer ipsum metus, tincidunt vel dignissim vitae, dignissim a risus. Curabitur in leo mollis, porttitor diam ac, malesuada risus."}/>
          {/*{this.state.apiResponse.jokes.map(joke => <Block title={joke.title} content={joke.content}/>)}*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default Jokes;