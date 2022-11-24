import CreatePost from "./pages/CreatePost/CreatePost";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import Homepage from "./pages/Homepage/Homepage";
import NotFound from "./pages/404/NotFound";
import SharedLayout from "./pages/SharedLayout/SharedLayout"
import SinglePost from "./pages/SinglePost/SinglePost"
import AllPost from "./pages/AllPost/AllPost"
import Footer from "./components/footer/Footer";

function App() {
  const { data, isPending, error } = useFetch(
    `${process.env.REACT_APP_DEVELOPMENT_API}/posts`
  );
  return (
    <div className="App">
      {/* As soon as the homepage gets called we want some data */}
     
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
      <Footer/>
    </div>
  );
}

export default App;
