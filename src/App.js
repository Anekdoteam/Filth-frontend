import React, {Component} from 'react';
import './App.css';
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import Header from "./Component/Header/Header";
import ReactDOM from "react-dom";
import Jokes from "./Component/Main/jokes/Jokes"

const appRoot = document.getElementById('root');
const modalRoot = document.getElementById('modal-root');


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

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}

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

    /*callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res}));
    }

    componentWillMount() {
        this.callAPI();
    }*/

    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <button onClick={this.handleHide} className={"fullBtn"}>

                    <div className="modal">
                        <div className="modal_text">
                            With a portal, we can render content into a different
                            part of the DOM, as if it were any other React child.
                        </div>
                    </div>
                </button>
            </Modal>
        ) : null;

        return (

            <BrowserRouter>
                <div className={'content'}>
                    <Header/>
                    <Route path='/memes' component={Jokes}/>
                </div>
            </BrowserRouter>

            /*<div className="app">
                This div has overflow: hidden.
                <button onClick={this.handleShow}>Show modal</button>
                {modal}
            </div>*/
        );
    }
}

export default App;
