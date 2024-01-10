import { ThemeProvider } from "styled-components"
import { GlobalStyles, darkTheme, lightTheme } from "./theme/GlobalStyles"
import { LoginPage } from "./pages/LoginPage"
import { useSelector } from "react-redux"
import { getTheme } from "./features/theme/themeSlice"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { DashBoardPage } from "./pages/DashBoardPage"
import { RootPage } from "./pages/RootPage"
import { ContactPage } from "./pages/ContactPage"
import { UsersPage } from "./pages/UsersPage"
import { useAuth } from "./context/AuthContext"

function App() {
  const themeData = useSelector(getTheme)
  const { isLoggedIn } = useAuth();
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeData ? darkTheme : lightTheme}>
          <GlobalStyles/>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            {isLoggedIn ? (
              <Route path='/root' element={<RootPage />}>
                  <Route path='/root/dashboard' element={<DashBoardPage />} />
                  <Route path='/root/contact' element={<ContactPage />} />
                  <Route path='/root/users' element={<UsersPage />} />
              </Route>
            ) : (
              <Route path='*' element={<Navigate to='/' />} />
            )}
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
