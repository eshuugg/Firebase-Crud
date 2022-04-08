import React from "react";
import AddAndViewContacts from "./component/AddAndViewContact";
import { BrowserRouter ,Route, Routes} from "react-router-dom";
import Registration from "./component/Registration";
import Login from "./component/Login";

const App = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-6  offset-md-2'>
            <Routes>
              <Route path="/Registration" element={<Registration/>} />
              <Route exact path="/Login" element={<Login/>} />
              <Route path="/AddAndViewContacts" element={<AddAndViewContacts/>} />
            </Routes>
          
        </div>
      </div>
    </>

  );
}

export default App;
