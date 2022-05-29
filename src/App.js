import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/landing-page/landingPage";
import Menu from "./Components/menu-page/menu";
import Quiz from "./Components/quiz-page/quizPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
          <Route path='/menu' element={<Menu/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
