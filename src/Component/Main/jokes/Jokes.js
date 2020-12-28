import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import Block from "./Block";
import axios from "axios";

const PAGE_SIZE = 1000; // const for now, probably changable by user or something
const override_auth = true; // debug usage only

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: {
        success: false,
        jokes: []
      }
    };
  }


/*  getJokes(offset, limit, sort) {
    axios.get('http://back.site-smeshnoy.me:3001/jokes/getJokes/' + offset + '-' + limit + '&' + sort)
      .then(response => {
        this.setState({apiResponse: response.data});
      });
  }



  componentWillMount() {
    this.getJokes(0, PAGE_SIZE, 1);
  }*/
    

  render() {
    return (
      <BrowserRouter>
        <div className={'content'}>
          <Block title={"Some title"} content={"dasdasasdsa d fd fd  f  dfm sdnmf ds fm snmf sdnm ds nmd   f m df nmsd msd md fnm d sd fmsdn"}/>
          <Block title={"Some title"} content={"dasdasasdsa d fd fd  f  dfm sdnmf ds fm snmf sdnm ds nmd   f m df nmsd msd md fnm d sd fmsdn"}/>
          <Block title={"Some title"} content={"dasdasasdsa d fd fd  f  dfm sdnmf ds fm snmf sdnm ds nmd   f m df nmsd msd md fnm d sd fmsdn"}/>
          <Block title={"Some title"} content={"dasdasasdsa d fd fd  f  dfm sdnmf ds fm snmf sdnm ds nmd   f m df nmsd msd md fnm d sd fmsdn"}/>
          <Block title={"Some title"} content={"dasdasasdsa d fd fd  f  dfm sdnmf ds fm snmf sdnm ds nmd   f m df nmsd msd md fnm d sd fmsdn"}/>
          <Block title={"Some title"} content={"dasdasasdsa d fd fd  f  dfm sdnmf ds fm snmf sdnm ds nmd   f m df nmsd msd md fnm d sd fmsdn"}/>
          <Block title={"Some title"} content={"dasdasasdsa d fd fd  f  dfm sdnmf ds fm snmf sdnm ds nmd   f m df nmsd msd md fnm d sd fmsdn"}/>
          {/*{this.state.apiResponse.jokes.map(joke => <Block title={joke.title} content={joke.content}/>)}*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default Jokes;