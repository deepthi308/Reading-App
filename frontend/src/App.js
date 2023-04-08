import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import ReadingPage from "./pages/ReadingPage";

function App() {

  const [purpleMode, setPurpleMode] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setPurpleMode={setPurpleMode} purpleMode={purpleMode} />} />
        <Route path="/books" element={<BooksPage purpleMode={purpleMode} setPurpleMode={setPurpleMode} />} />
        <Route path="/books/read" element={<ReadingPage />} purpleMode={purpleMode} setPurpleMode={setPurpleMode} />
        
      </Routes>
    </Router>
  );
}

export default App;
