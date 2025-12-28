import {useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Main from "./components/Main";
import TodoList from "./components/TodoList";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import NotFaund from "./components/NotFaund";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeContext, themes } from "./themeContext";

function App () {
  const theme = useState(themes.orange);
  const [currentTheme] = theme;

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <ErrorBoundary> 
          <div className="content" style={{background: currentTheme.backgroundColor}}>
            <Header />
            <main>
              <Routes>
                <Route path='*' element={<NotFaund/>}></Route>
                <Route path='/' element={<Main/>}></Route>
                <Route path='/todo-list' element={<TodoList/>}></Route>
                <Route path='/contacts' element={<Contacts/>}></Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
