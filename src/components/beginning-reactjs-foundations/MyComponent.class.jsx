import React, {useState} from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        const [count, setCount] = useState(0);
        this.count = count;
        this.setCount = setCount;
        this.state = {
            score: 0,
            userInput: ''
        };
        this.saveUserInput = this.saveUserInput.bind(this);
        this.updateScore = this.updateScore.bin(this);
    }

    saveUserInput () {
        this.state.userInput = 1; // number of clicks
        this.updateScore();
    }

    updateScore () {
        this.setCount((count) => count + this.state.userInput);
    }

    render () {
        return (
            <div className="card">
                <button onClick={this.saveUserInput}>
                    Score is {this.state.score}
                </button>
            </div>
        );
    }
}

export default MyComponent;
