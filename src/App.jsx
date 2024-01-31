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
import { RoomsPage } from "./pages/RoomsPage"
import { useAuth } from "./context/AuthContext"
import { NewUserPage } from "./pages/NewUserPage"
import { NewRoomPage } from "./pages/NewRoomPage"
import { ViewRoomPage } from "./pages/ViewRoomPage"
import { EditUserPage } from "./pages/EditUserPage"
import { BookingsPage } from "./pages/BookingsPage"
import { ViewBookingPage } from "./pages/ViewBookingPage"

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
                  <Route path='/root/users' element={<UsersPage />}/>
                  <Route path="/root/users/newuser" element={<NewUserPage/>}/>
                  <Route path='/root/users/edituser/:id' element={<EditUserPage />} />
                  <Route path='/root/rooms' element={<RoomsPage />} />
                  <Route path='/root/rooms/newroom/' element={<NewRoomPage />} />
                  <Route path='/root/rooms/room/:id' element={<ViewRoomPage />} />
                  <Route path='/root/bookings' element={<BookingsPage />} />
                  <Route path='/root/bookings/booking/:id' element={<ViewBookingPage />} />
                  

                  
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
