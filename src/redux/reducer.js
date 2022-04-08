// import { useState } from "react";
// import * as types from "./actionType";


// const initialstate = {
//     loading: false,
//     currentUser: null,
//     error: null
// };

// const userReducer = (userDetails = initialstate, action) => {
//     switch (action.type) {
//         case types.REGISTER_START:
//             return {
//                 ...userDetails,
//                 loading: true,
//             };
//         case types.REGISTER_SUCCESS:
//             return {
//                 ...userDetails,
//                 loading: false,
//                 currentUser: action.payload,
//             };
//         case types.REGISTER_FAIL:
//             return {
//                 ...userDetails,
//                 loading: false,
//                 error: action.payload,
//             };
//         default:
//             return userDetails;
//     }
// };

// export default userReducer;