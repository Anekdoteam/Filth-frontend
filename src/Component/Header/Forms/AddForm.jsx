import React, {useState} from 'react';
import s from './AddForm.module.css';
import axios from "axios";
import Cookies from 'js-cookie';


// Reference: https://reactjs.org/docs/forms.html
// There is probably a library that does all this, overkill for now?

export default class AddForm extends React.Component {
  constructor(props) {  
    super(props);
    this.state = {
      jokeTitle: "",
      jokeTags: "",
      jokeContent: "",
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  addJoke = (jokeName, jokeTags, jokeContent) => {
    axios({
      method: 'post',
      url: 'http://back.site-smeshnoy.me:3001/jokes/addJoke',
      data: {name: jokeName, tags: jokeTags, content: jokeContent},
      maxRedirects: 1,
      withCredentials: true
    }).then(response => {
      alert("Success: " + response.data.success
            + '\nError: ' + response.data.error
            + '\nMessage: ' + response.data.message)
      window.location = "/memes";
      // TODO: check success and give a message (flash?); progress bar or something?
    });
  };
  
  // Change values to be submitted when user changes them
  handleTitleChange(event) {
    this.setState({jokeTitle: event.target.value});
  }
  
  handleTagsChange(event) {
    this.setState({jokeTags: event.target.value});
  }
  
  handleContentChange(event) {
    this.setState({jokeContent: event.target.value});
  }

  handleSubmit(event) {
    this.addJoke(this.state.jokeTitle, this.state.jokeTags, this.state.jokeContent)
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit = {this.handleSubmit}>
            <div>
              <div>
                <input type={"text"}
                       name={"title"}
                       placeholder={"Название"}
                       className={s.inline}
                       onChange={this.handleTitleChange}
                       />
              </div>
              <div>
                {/*TODO: tags should be requested from backend (/jokes/getTags/???), then displayed as choices, also "new" should be a choice*/}
                <input type={"text"}
                       name={"tags"}
                       placeholder={"Теги"}
                       className={s.inline}
                       onChange={this.handleTagsChange}
                       />
              </div>
              <div>
                <textarea name={"content"}
                          placeholder={"Анекдот"}
                          className={`${s.inline} ${s.content}`}
                          onChange={this.handleContentChange}
                          />
              </div>
              <div>
                <input type={"submit"}
                       name={"send"}
                       value={"Опубликовать"}
                       className={s.button}
                       />
              </div>
            </div>
              </form>
    );
  }
}