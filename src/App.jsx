import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Events, Home, Profile, RegisteredEvent } from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/events/:id" exact element={<Events />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/registered" exact element={<RegisteredEvent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
