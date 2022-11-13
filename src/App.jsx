import CreatePost from "./pages/CreatePost/CreatePost";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import NotFound from "./pages/404/NotFound";
import SharedLayout from "./pages/SharedLayout/SharedLayout"
import SinglePost from "./pages/SinglePost/SinglePost"
import AllPost from "./pages/AllPost/AllPost"

function App() {
  return (
    <div className="App">
      {/* Here we have added the routes information, these are not displayed on our navbar, check <SharedLayout/> for adding to nav items */}
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/posts" element={<AllPost/>}/>
          <Route path="/posts/:id" element={<SinglePost/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
