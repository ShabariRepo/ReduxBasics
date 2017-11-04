import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

    // instant the component is going to be rendered: execute
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        // feed in the data
        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    // render single data or element
    // render row in the list view is an actual function
    // the one below is arbitrary
    // library argument is the element in the list its trying to render
    renderRow(library) {
        // make new component called list item and populate here
        return <ListItem library={library} />;
    }

    render() {
        // to test if the props has the libraries
        //console.log(this.props);
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

// purpose is to take the global state from the store and map it
// then provide it as props to component
const mapStateToProps = state => {
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
