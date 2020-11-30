import React from "react";
import s from '../Add.module.css';
import Modal from "../../../Modal";


export default class AddModal extends React.Component{

    #createNewTag = () => (
        <div>

        </div>
    );

    render = () => {
        return (
            <AddModal>
                <Modal>
                    <button>
                        <div className={s.modal}>
                            <div className={s.modal_text}>
                                <form>
                                    <div className={s.head}>
                                        Добавить анекдот
                                    </div>
                                    <div className={s.main_form}>
                                        <div>
                                            <input type={"text"} name={"title"} placeholder={"Название"} className={s.inline} onChange={ (event)=> {this.setState({jokeTags: event.target.value})}}/>
                                        </div>
                                        <div>
                                            {/*TODO: tags should be requested from backend (/jokes/getTags/???), then displayed as choices, also "new" should be a choice*/}
                                            <input type={"text"} name={"tags"} placeholder={"Теги"} className={s.inline} onChange={ (event)=> {this.setState({jokeTags: event.target.value})}}/>
                                            {/*<div>
                                                <button/>
                                                <div>
                                                    <input/>
                                                    <button>tag</button>
                                                </div>
                                            </div>*/}
                                            {/*<select id={"jokes"}>
                                                <optgroup label={"tags"}>
                                                    TODO: get joke-tags to jokeArray
                                                    {
                                                        () => this.state.jokeTags.map(tag => <option value={tag}/>)
                                                    }
                                                    {() => <option id="new" value={"new"}/>}
                                                    {this.#createNewTag}
                                                </optgroup>
                                            </select>*/}
                                        </div>
                                        <div>
                                            <textarea name={"content"} placeholder={"Анекдот"} className={`${s.inline} ${s.content}`} onChange={ (event)=> {this.setState({jokeContent: event.target.value})}}/>
                                        </div>
                                        <div>
                                            <input type={"submit"} name={"send"} value={"Опубликовать"} onClick={() => {this.handleAddJoke(this.state.jokeTitle,
                                                this.state.jokeTags,
                                                this.state.jokeContent)}}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </button>
                </Modal>
            </AddModal>
        )
    }
}

