import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MegaMenu from "./components/MegaMenu";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Blog from "./screens/Blog";
import BlogDetail from "./screens/BlogDetail";
import Contact from "./screens/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 

function App() {
  return (
    <Router>
      <div class="m-2">
        <MegaMenu />
        <div id="content" class="container-lg	" style={{minHeight:'500px'}}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/blog" Component={Blog} />
            <Route path="/:id" Component={BlogDetail} />
            <Route path="/contact" Component={Contact} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
