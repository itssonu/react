import React from 'react';
import Board from './Board';

class Game extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      history : [{
        squares: Array(9).fill()
      }],
      xIsNext:true,
      stepNumber : 0,
    };

  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
    }
    return null;
  }
  

  handleClick(i){
    // alert(i);
    const history = this.state.history.slice(0,this.state.stepNumber+1);
    const current = history[history.length-1];
    const squares = current.squares.slice();
    // console.log(squares);
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X':'O';
    // alert(i);
    // console.log(i);
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
   }

   jumpTo(step){
     console.log(step);
     this.setState({
      stepNumber:step,
     });
   }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = this.calculateWinner(current.squares);
      let status;

      const moves = history.map((v,k)=>{
        const liDes = k ? 
          'Go to move #' + k :
          'Go to game start';

          return (<li key={k}>
                     <button onClick={() => this.jumpTo(k)}>{liDes}</button>
                  </li>);
      })


      if (winner) {
        status = 'Winner: '+ winner ;
      }else{
        status = 'Next player: '+ (this.props.xIsNext ? 'X':'O') ;
      }
      return (
        <div className="game">
          <div className="game-board">
            <Board squares={current.squares} onClick={(i)=>this.handleClick(i)} />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }


export default Game;