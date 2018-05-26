import React, { Component } from 'react';
import './Game.css';
import {riddles} from "../game/riddle";

import SearchInput, {createFilter} from 'react-search-input'

const KEYS_TO_FILTERS = ['answer']

export default class Game extends Component {
    constructor (props) {
        super(props)
        this.state = {
            searchTerm: '',
            current:shuffle(riddles)[0],
            points:0
        }
        this.searchUpdated = this.searchUpdated.bind(this)
    }

    checkAnswer(answ){
        if(answ==this.state.current.answer) {
            alert("Well Done");
            this.setState({
                points:this.state.points +1,
                current:shuffle(riddles)[0],

            })
        } else {
            alert("wrong");
            this.setState({
                current:shuffle(riddles)[0],

            })
        }
    }

    render () {
        const filteredAnswer = riddles.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        return (
            <div className={"game"}>
                <div className={"riddle"}>
                    {this.state.current.riddle.split(".").map((string)=><p>{string}</p>)}
                    <button onClick={()=>{
                        this.setState({current:shuffle(riddles)[0]}
                        )}}>SKIP</button>
                    <button onClick={()=>{
                            alert(this.state.current.answer)}
                        }>Solution</button>

                </div>


            <div>

                <div className="answer">

                {this.state.searchTerm.length>0 ? filteredAnswer.slice(0,4).map(answ => {
                    return (
                            <button className="answ" onClick={()=>this.checkAnswer(answ.answer)}>{answ.answer}</button>

                    )
                }) : undefined}
                </div>
                <SearchInput className="search-input"  onChange={this.searchUpdated} />

            </div>
        </div>
        )
    }

    searchUpdated (term) {
        this.setState({searchTerm: term})
    }
}
