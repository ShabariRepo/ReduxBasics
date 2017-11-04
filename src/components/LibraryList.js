import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        // to test if the props has the libraries
        console.log(this.props);
        return;
    }
}

// purpose is to take the global state from the store and map it
// then provide it as props to component
const mapStateToProps = state => {
    // to see the objects console.log(state);
    return { libraries: state.libraries };
};

/* 
weird syntax, it calls the connect function
when connect is called it returns another function
then call the return function with the library list as argument
-- 2 step process
- 1st argumentt as a function
*/
export default connect(mapStateToProps)(LibraryList);
