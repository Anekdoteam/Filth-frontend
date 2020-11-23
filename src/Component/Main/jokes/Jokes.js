import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Block from "./Block";
import axios from "axios";

const PAGE_SIZE = 100; // const for now, probably changable by user or something
const override_auth = true; // debug usage only

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: {success: false, jokes: []}};
  }

  /*getJokes(offset, limit, sort) {
    axios.get('http://localhost:3001/jokes/getJokes/' + offset + '-' + limit + '&' + sort)
      .then(response => {
        this.setState({apiResponse: response.data});
      });
  }*/

  /*componentWillMount() {
    this.getJokes(0, PAGE_SIZE, 1);
  }*/

  render() {
    return (
      <BrowserRouter>
        <div className={'content'}>
          {/*padding because bug*/}
          <Block title={'Name'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum metus et purus volutpat, ac imperdiet libero facilisis. Fusce ornare orci ac risus placerat lobortis. '}/>
          <Block title={'На чём едешь, брат?'}
                 content={'У льва День Рождения, он позвал медведя лису и муравья, медведь приехал на велосипеде, лиса на джипе, а муравей ещё не доехал, лев говорит, на чем вы приехали засунте себе в попу, медведь засунул а лиса плачет и смеётся, лев говорит почему ты плачеш, мой джип большой не поместится, а почему смеёшся, муравей на танке едет'}/>
          <Block title={'На чём едешь, брат?'}
                 content={'У льва День Рождения'}/>
          <Block title={'Русский, немец и американец в самолёте.'}
                 content={'Известная авиакомпания нанимает на работу пилота. На это место претендуют немец, американец и русский. Директор компании спрашивает у немца: ' +
                 '\n— Давно летаете? ' +
                 '\n— Три года. ' +
                 '\n— И сколько хотели бы получать? ' +
                 '\n— Три тысячи. Тысячу — мне, тысячу — жене, тысячу — на страховку. ' +
                 '\nСпрашивает у американца: ' +
                 '\n— Давно летаете? ' +
                 '\n— Шесть лет. ' +
                 '\n— И сколько хотели бы получать? ' +
                 '\n— Шесть тысяч. Две — мне, Две — жене, Две — на страховку. ' +
                 '\nСпрашивает у русского: ' +
                 '\n— А вы давно летаете? ' +
                 '\n— Боже упаси, я и летать-то толком не умею, и высоты боюсь. А получать хочу девять тысяч. ' +
                 '\n—?! ' +
                 '\n— Ну как-же: три — мне, три — вам… ' +
                 '\nДиректор авиакомпании совсем обалдел: ' +
                 '\n— Стоп, а летать кто будет? ' +
                 '\n— Как кто — немец, он же за три согласен!'}/>
          <Block title={'Name'}
                 content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum metus et purus volutpat, ac imperdiet libero facilisis. Fusce ornare orci ac risus placerat lobortis. Aliquam euismod ante vel aliquet porta. In tincidunt, neque a tincidunt ultricies, lacus ipsum convallis felis, nec blandit magna erat at velit. Nulla sagittis purus euismod ornare hendrerit. Sed pretium augue at quam aliquam molestie. Pellentesque pretium neque ante, sollicitudin fringilla ante pretium ullamcorper. Nulla sed felis justo. Mauris mollis eu dui a viverra. Nunc faucibus eget neque at accumsan. Sed tristique neque sit amet nisi porta, iaculis pretium metus auctor. Quisque dapibus tortor at malesuada blandit. Duis maximus, augue et vestibulum convallis, neque risus condimentum nisl, at interdum mi neque mattis libero. Nam dapibus rutrum mauris, at viverra dolor feugiat non. Vivamus ac aliquam sapien.'}/>
          <Block title={'Name'}
                 content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum metus et purus volutpat, ac imperdiet libero facilisis. Fusce ornare orci ac risus placerat lobortis. Aliquam euismod ante vel aliquet porta. In tincidunt, neque a tincidunt ultricies, lacus ipsum convallis felis, nec blandit magna erat at velit. Nulla sagittis purus euismod ornare hendrerit. Sed pretium augue at quam aliquam molestie. Pellentesque pretium neque ante, sollicitudin fringilla ante pretium ullamcorper. Nulla sed felis justo. Mauris mollis eu dui a viverra. Nunc faucibus eget neque at accumsan. Sed tristique neque sit amet nisi porta, iaculis pretium metus auctor. Quisque dapibus tortor at malesuada blandit. Duis maximus, augue et vestibulum convallis, neque risus condimentum nisl, at interdum mi neque mattis libero. Nam dapibus rutrum mauris, at viverra dolor feugiat non. Vivamus ac aliquam sapien.'}/>
          {/*{this.state.apiResponse.jokes.map(joke => <Block title={joke.title} content={joke.content}/>)}*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default Jokes;