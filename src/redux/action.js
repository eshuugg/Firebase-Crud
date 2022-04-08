// import { type } from "@testing-library/user-event/dist/type";
// import * as types from "./actionType";

// import firebase from 'firebase/compat/app'
// // import {auth} from "../firebase";

// const registerStart = () =>({
//     type: type.REGISTER_START,
// });

// const registerSuccess = (user) =>({
//     type: types.REGISTER_SUCCESS,
//     payload: user,
// });

// const registerFail = (error) =>({
//     type: types.REGISTER_FAIL,
//     payload: error,
// });

// export const registerIntiate = (email,password, displayName) =>{
//     return function (dispatch) {
//         dispatch(registerStart());
//         firebase.auth()
//         .createUserWithEmailAndPassword(email, password)
//         .then(({user}) =>{
//             user.updateProfile({
//                 displayName
//             });
//             dispatch(registerSuccess(user));
//         })
//         .catch((error) =>dispatch(registerFail(error.message)));
//     };
// };