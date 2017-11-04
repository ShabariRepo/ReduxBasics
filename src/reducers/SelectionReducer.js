// ES 6 arguments so meaning if the state is undefined
// default it to null
export default (state = null, action) => {
    // cannot return undefined at all for any reducer
    // to check each click event or action console.log(action);
    switch (action.type) {
        case 'select_library':
            // return the particular action's payload property
            return action.payload;
        default:
            // if some random action comes through..
            // then just return the state that was returned last time
            return state;
    }
};
