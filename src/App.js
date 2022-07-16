import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BookingPage from "./pages/Users/bookingPage/BookingPage";
import FilteringPage from "./pages/Users/FilteringPage/FilteringPage";
import HomePage from "./pages/Users/HomePage/HomePage";
import HostelPage from "./pages/Users/HostelPage/HostelPage";
import AddHostel from "./pages/Owners/AddHostel/AddHostel";
import OwnerHomePage from "./pages/Owners/OwnerHomePage/OwnerHomePage";
import OwnerRegisterPage from "./pages/Owners/Owner_Login_Signup/OwnerRegisterPage";
import UserLogin from "./pages/Users/UserLogin/UserLogin";
import UserProfilePage from "./pages/Users/UserProfilePage/UserProfilePage";
import UserRegister from "./pages/Users/UserRegister/UserRegister";
import AddRoom from "./pages/Owners/AddRoom/AddRoom";
import OwnerHostelPage from "./pages/Owners/HostlePage/OwnerHostelPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/*..................... user start .......................*/}

          <Route path="/" element={<HomePage />} />
          <Route path="/ListMainItems/:id" element={<FilteringPage />} />
          <Route path="/Hostle" element={<HostelPage />}/>
          <Route path="/booking/:selected" element={<BookingPage />} />
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/UserSignUp" element={<UserRegister />} />
          <Route path="/UserProfile/:id" element={<UserProfilePage />} />

          {/*...................... user end .........................*/}
          
           
          {/*..................... owner start .......................*/}

          <Route path="/OwnerHome" element={<OwnerHomePage />} />
          <Route path="/OwnerRegister" element={<OwnerRegisterPage />} />
          <Route path="/AddHostel" element={<AddHostel />} />
          <Route path="/AddRoom" element={<AddRoom />} />
          <Route path="/OwnerHostelPage" element={<OwnerHostelPage />} />

          {/*..................... owner end .......................*/}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
