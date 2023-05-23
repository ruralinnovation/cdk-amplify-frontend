import React from 'react';

class FooWithoutBind extends React.Component {
    constructor (props) {
        super(props);
        this.message = "Hello";
    }

    handleClick () {
       // console.logthis.message); // 'this' is undefined
    }

    render () {
        return (
            <button type={"button"} onClick={this.handleClick}>
                Click Me (Throws Exception)
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

    // handleClick(event) {
    //    // console.logthis.message); // 'hello'
    // }

    render () {
        return (
            <button type={"button"} onClick={this.handleClick}>
                Click Me (Works)
            </button>
        )
    }
}

export default Foo;
