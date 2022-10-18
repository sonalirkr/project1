import React from "react";
import Dash from "./Components2/Dash";
import Home from "./Components2/Home";
import Search from './Components2/Search'
import Login from "./Components2/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Organization from "./Components2/Organization";
import Register from "./Components2/Register";
import Logout from "./Components2/Logout";
import Adduser from "./Components2/Page/Adduser";
import User from "./Components2/User";
function App() {
  return (
  
    <Router>
      {/* <Nav/> */}
      <div class="container-fluid" id="main">
        <div class="row row-offcanvas row-offcanvas-left">
        {/* <Side /> */}
        {/* <Search/> */}
          <Routes>
            <Route exact path="/" element={<Register/>}/>
            <Route exact path="/components2/Home.js" element={<Home/>}/>   
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/dash" element={<Dash/>}/>
            <Route exact path="/search" element={<Search/>}/>
            <Route exact path="/org" element={<Organization/>}/>
            <Route exact path="/components2/user.js" element={<User/>}/>
            <Route exact path="/page/adduser" element={<Adduser/>}/>
            <Route exact path="/components2/Logout.js" element={<Logout/>}/>
          </Routes>
          
  
        </div>
      </div>
    </Router>
  );
}

export default App;



























// import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Details from './Components/Details';
// import Login from './Components/Login';
// import Organization from './Components/Organization';
// import Register from "./Components/Register";



// const App = () => {
//   return (
//     <div>
//       <Router>
//        <Routes>
//        <Route exact path="/" element={<Register/>}/>
//          <Route exact path="/Components/login" element={<Login/>}/>
//          <Route exact path="/Components/details" element={<Details/>}/>
//          <Route exact path="/organization" element={<Organization/>}/>
        
//         </Routes> 
//       </Router>
//     </div>
//   )
// }

// export default App




