import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    // will make the dropdown bounce and dissapear slow
    // doesnt work on mine though :(
        // component will update will be called when a component is about to be re-rendered
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        // destructure the library stuff
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        // destructure the styles & library
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            // call the action creator so the action will then dispatch the reducer
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

// compare the above this.props.library id to the props.selectedLibraryId
// and if they are equal then show some expanded data
// second argument for the function is for ownProps
// own props is the same thing and equal to this.props inside the component
// so can do the check if the id is same as selected id here and return another val
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return {
        //selectedLibraryId: state.selectedLibraryId
        expanded
    };
};

// the first argument is for map state to props, if not doitng that then null it
// second is turning the action creator from a dumb function to whenever it is called..
// the return actio nwill be dispatched to a reducer
// takes the list item and passes them to this main function as props
export default connect(mapStateToProps, actions)(ListItem);
