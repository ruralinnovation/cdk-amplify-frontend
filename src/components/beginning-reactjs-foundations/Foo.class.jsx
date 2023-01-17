import React from 'react';

class FooWithoutBind extends React.Component {
    constructor (props) {
        super(props);
        this.message = "Hello";
    }

    handleClick () {
        console.log(this.message); // 'this' is undefined
    }

    render () {
        return (
            <button type={"button"} onClick={this.handleClick}>
                Click Me
            </button>
        )
    }
}

export { FooWithoutBind };

class Foo extends FooWithoutBind {
    constructor (props) {
        super(props);
        this.message = "hello"
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log(this.message); // 'hello'
    }

    render () {
        return (
            <button type={"button"} onClick={this.handleClick}>
                Click Me
            </button>
        )
    }
}

export default Foo;
