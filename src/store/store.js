import {configureStore} from "@reduxjs/toolkit";

import cellsReducer from "./cellsSlice";

export default configureStore({
    reducer: {
        matrix: cellsReducer
    }
});
