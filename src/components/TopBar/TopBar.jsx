import { useSelector, useDispatch } from "react-redux"
import { getTheme, changeTheme } from "../../features/theme/themeSlice"
import { TopBarStyled } from "./TopBarStyled";
import { MenuStyledIcon, ArrowRightStyledIcon, MailStyledIcon, BellStyledIcon, LogoutStyledIcon } from "../Icons/IconsStyled";
import { TopBarIconsContainerStyled } from "./TopBarIconsContainerStyled";
import { useLocation, useNavigate } from "react-router-dom";
import { MoonStyledIcon, SunStyledIcon } from "../Icons/IconsStyled"
import { ThemeSelectorStyled } from "../ThemeSelector/ThemeSelectorStyled";


const routePageMapping = {
  '/': 'Login',
  '/root/dashboard': 'Dashboard',
  '/root/booking': 'Booking',
  '/root/rooms': 'Rooms',
  '/root/contact': 'Contact',
  '/root/users': 'Users',
  '/root/edituser': 'Users > Edit Info',
  '/root/createroom': 'Rooms > Create Room',
};

export const TopBar = ({ onToggleMenu, isMenuOpen }) => {
    const themeData = useSelector(getTheme)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation();
    const { pathname } = location;
    const currentPage = routePageMapping[pathname] || 'Unknown Page';
    const handleThemeChange = () => {
      dispatch(changeTheme())
    }

    const handleLogOut = ()=>{
        navigate("/")
    }
    
    return (
      <TopBarStyled>
        <button onClick={onToggleMenu}>
          {isMenuOpen ? <MenuStyledIcon /> : <ArrowRightStyledIcon/>}
        </button>
        <h1>{currentPage}</h1>
        <TopBarIconsContainerStyled>
          <ThemeSelectorStyled onClick={handleThemeChange}>
            {themeData ? <SunStyledIcon /> : <MoonStyledIcon />}
          </ThemeSelectorStyled>
          <MailStyledIcon />
          <BellStyledIcon />
          <button onClick={handleLogOut}>
            <LogoutStyledIcon/>
          </button>
        </TopBarIconsContainerStyled>
      </TopBarStyled>
    );
  };
  