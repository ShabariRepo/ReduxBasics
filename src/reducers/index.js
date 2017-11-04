import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    // assign the library reducer to the key Librarires
    // so if ever console loging the state the result will show { libraries: [] }
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});
