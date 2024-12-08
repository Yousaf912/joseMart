import { configureStore } from "@reduxjs/toolkit";
import TokenSLice from "./ReduxSlice/tokenslice";
import { AllProucts } from "./ReduxSlice/AllProducts";

export const store = configureStore({
    reducer:{
        tokenSate:TokenSLice.reducer,
        allProducts:AllProucts.reducer,
     
    }

})

