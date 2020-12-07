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

/*class App extends Component {

	constructor(props){
		super(props);
		this.state = { apiResponse: "" };
	}

	callAPI(){
		fetch("http://localhost:9000/testAPI")
			.then(res => res.text())
			.then(res => this.setState({ apiResponse: res }));
	}

	componentWillMount(){
		this.callAPI();
	}
	render(){
		return (
			<BrowserRouter>
				<div className={'content'}>
					<Header/>
					<div className={'main'}>
						<Block title={'Name'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum metus et purus volutpat, ac imperdiet libero facilisis. Fusce ornare orci ac risus placerat lobortis. '}/>
						<Block title={'Name'} content={'Задача организации, в особенности же постоянный количественный рост и сфера нашей активности требуют определения и уточнения дальнейших направлений развития. Таким образом новая модель организационной деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям.'}/>
						<Block title={'Name'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum metus et purus volutpat, ac imperdiet libero facilisis. Fusce ornare orci ac risus placerat lobortis. Aliquam euismod ante vel aliquet porta. In tincidunt, neque a tincidunt ultricies, lacus ipsum convallis felis, nec blandit magna erat at velit. Nulla sagittis purus euismod ornare hendrerit. Sed pretium augue at quam aliquam molestie. Pellentesque pretium neque ante, sollicitudin fringilla ante pretium ullamcorper. Nulla sed felis justo. Mauris mollis eu dui a viverra. Nunc faucibus eget neque at accumsan. Sed tristique neque sit amet nisi porta, iaculis pretium metus auctor. Quisque dapibus tortor at malesuada blandit. Duis maximus, augue et vestibulum convallis, neque risus condimentum nisl, at interdum mi neque mattis libero. Nam dapibus rutrum mauris, at viverra dolor feugiat non. Vivamus ac aliquam sapien.'}/>
						<Block title={'Name'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum metus et purus volutpat, ac imperdiet libero facilisis. Fusce ornare orci ac risus placerat lobortis. Aliquam euismod ante vel aliquet porta. In tincidunt, neque a tincidunt ultricies, lacus ipsum convallis felis, nec blandit magna erat at velit. Nulla sagittis purus euismod ornare hendrerit. Sed pretium augue at quam aliquam molestie. Pellentesque pretium neque ante, sollicitudin fringilla ante pretium ullamcorper. Nulla sed felis justo. Mauris mollis eu dui a viverra. Nunc faucibus eget neque at accumsan. Sed tristique neque sit amet nisi porta, iaculis pretium metus auctor. Quisque dapibus tortor at malesuada blandit. Duis maximus, augue et vestibulum convallis, neque risus condimentum nisl, at interdum mi neque mattis libero. Nam dapibus rutrum mauris, at viverra dolor feugiat non. Vivamus ac aliquam sapien.'}/>
						<Block content={this.state.apiResponse}>
							{/!*<div>
								<p className="App-intro">{this.state.apiResponse}</p>
							</div>*!/}
						</Block>
					</div>

				</div>
			</BrowserRouter>
		);
	}
}*/

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
