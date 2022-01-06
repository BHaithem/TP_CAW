import React, { Component } from 'react'
import De from './De'
import './LancerDe.css'
export default class LancerDe extends Component {
    static defaultProps = {
        des: [
            "image/1.png",
            "image/2.png",
            "image/3.png",
            "image/4.png",
            "image/5.png",
            "image/6.png"
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            num2 :4,
            result: 0, winner: 0, lose: 0,stop:false
        };
        this.lancer = this.lancer.bind(this);
        this.reset = this.reset.bind(this);
    }
    lancer() {

        if (this.state.stop < 10 ){
        this.score();

        let r1 = Math.floor(Math.random() * 6)
        let r2 = Math.floor(Math.random() * 6)
        this.setState({
            num: r1,
            num2: r2,
        
        }
        
        )
    }
    this.state.stop = this.state.stop + 1 ;
}


    score() {
        if (this.state.num === this.state.num2) {
            this.state.winner = this.state.winner + 1;
            this.state.result = this.state.result + 1
        }
        if (this.state.num2 !== this.state.num) {

            this.state.lose = this.state.lose + 1;
            this.state.result = this.state.result - 1
        }
    }
    reset() {

        this.setState.lose = 0;
        this.setState({
            num: 0,
            num2: 4,
            lose:0,
            winner:0,
            stop:0,
            result:0,
        })
        alert("you have restarted the game ")


    }


    render() {
        return (
            <div>
                <h1>Welcome to my dice game </h1>
                <De src={this.props.des[this.state.num]} />
                <De src={this.props.des[this.state.num2]} />
                <p> {this.state.num === this.state.num2 ? "You win" : "Try Again"} </p>
                <button class="btn" onClick={this.lancer}>Lancer</button>
                <button class="btn" onClick={this.reset} > Reset  </button>
                <container>

                    <p> le score est : {this.state.result}</p>
                    <p> nombre de victoires : {this.state.winner}</p>
                    <p> nombre de perte : {this.state.lose}</p>
                    <p>nombre de tentatives : {this.state.stop}</p>
                </container>

            </div>
        )
    }
}
