// action creator is a js function that creates an action object
// actions are used to tell the reducer to update in some way
// everything after the = () => is the action creator
// can export many of the below but have to use the export not export default
export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};
