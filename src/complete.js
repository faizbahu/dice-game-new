import React, { Component } from "react";
import "./complete.css";
import dice1 from "./images/dice-1.png";
import dice2 from "./images/dice-2.png";
import dice3 from "./images/dice-3.png";
import dice4 from "./images/dice-4.png";
import dice5 from "./images/dice-5.png";
import dice6 from "./images/dice-6.png";
import { FaDownload } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { BsFillPlusCircleFill } from "react-icons/bs";
var images = [dice1, dice2, dice3, dice4, dice5, dice6];
var toggle = true;

class complete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random_number: 0,
      random_number_2: 0,
      hold: 0,
      hold2: 0,
      img: "",
      score: "",
      wins: false,
    };
    this.random = this.random.bind(this);
    this.hold = this.hold.bind(this);
    this.score = this.score.bind(this);
    this.newgame = this.newgame.bind(this);

    // this.img = this.img.bind(this);
  }

  hold() {
    if (toggle == true) {
      var y = this.state.random_number;
      this.setState({
        hold: this.state.hold + y,
        random_number: 0,
        img: "",
      });
      toggle = false;
    } else if (toggle == false) {
      toggle = true;
      var y2 = this.state.random_number_2;
      this.setState({
        hold2: this.state.hold2 + y2,
        random_number_2: 0,
        img: "",
      });
    }
  }

  random() {
    if (toggle == true) {
      var x = Math.floor(Math.random() * 6 + 1);
      this.setState({
        random_number: x + this.state.random_number,
        img: x - 1,
      });
      if (x == 1) {
        this.setState({
          random_number: 0,
          // img:'',
        });
        toggle = false;
      }
    } else {
      var x = Math.floor(Math.random() * 6 + 1);
      this.setState({
        random_number_2: x + this.state.random_number_2,
        img: x - 1,
      });
      if (x == 1) {
        this.setState({
          random_number_2: 0,
          // img:'',
        });
        toggle = true;
      }
    }
  }

  score(event) {
    if (event.key == "Enter") {
      this.setState({
        
        score: parseInt(event.target.value),
      });
      if (event.target.value == "") {
        alert("pixel");
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.wins, "wins");
    if (this.state.hold > this.state.score) {
      console.log(this.state.score);
      this.setState({
        hold: "Player 1 wins",
        wins: true,
      });
      console.log("greater1");
    } else if (this.state.hold2 >= this.state.score) {
      this.setState({
        hold2: "Player 2 wins",
        wins: true,
      });
      console.log("greater");
    }
  }

  newgame() {
    this.setState({
      hold: 0,
      hold2: 0,
      random_number: 0,
      random_number_2: 0,
      wins: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="text-center1">
            <p className="text-2xl">
              FINAL SCORE:{" "}
              <span>
                <input
                  className="style text-center text-2xl"
                  type="text"
                  onKeyUp={this.score}
                />
              </span>
            </p>
            <div className="mt-3 flex">
              {/* <i className="fas fa-plus-circle text-2xl"></i> */}
              <span className="text-2xl">NEW GAME:</span>
              <BsFillPlusCircleFill
                onClick={this.newgame}
                className="ml-6 mt-1 text-2xl cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-around text-center">
            <div className="for-width">
              <p className="text-5xl">PLAYER 1</p>
              <span id="player1" className="text-4xl">
                {this.state.hold}
              </span>
              <div className="text">
                <p className="text-2xl">CURRENT</p>
                <span id="current-value" className="text-xl">
                  {this.state.random_number}
                </span>
              </div>
            </div>
            <div className="for-absolute">
              <div className="flex">
                <button
                  type="reset"
                  id="one-one"
                  className="none px-2 py-1"
                  onClick={this.random}
                  disabled={this.state.wins}
                >
                  <FiRefreshCw className="text-xl" />
                </button>
                <p className="text-xl font-medium">ROLL DICE</p>
              </div>
              <div className="flex mt-3">
                <button
                  id="one-one"
                  onClick={this.hold}
                  disabled={this.state.wins}
                  className="px-2 py-1"
                >
                  {/* <i className="fas fa-download mr-3 text-xl"></i> */}
                  <FaDownload className="text-xl" />
                </button>
                <p className="text-xl font-medium">HOLD</p>
              </div>
            </div>
            <div className="for-images">
              {/* <img src={dice1}></img> */}
              <img src={images[this.state.img]} id="one"></img>
            </div>
            <div className="for-width">
              <p className="text-5xl">PLAYER 2</p>
              <span id="player2" className="text-4xl">
                {this.state.hold2}
              </span>
              <div className="text">
                <p className="text-2xl">CURRENT</p>
                <span id="current-value-2" className="text-xl">
                  {this.state.random_number_2}
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default complete;
