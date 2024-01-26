import { LoginPageStyled } from "../components/LoginPage/LoginPageStyled"
import LoginPhotoDay from "../assets/images/Login/home.jpg"
import LoginPhotoNight from "../assets/images/Login/homeNight.jpg"
import { LoginImageStyled } from "../components/LoginPage/LoginPageImageStyled"
import { ThemeSelectorAbsoluteStyled } from "../components/ThemeSelector/ThemeSelectorStyled"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { getTheme, changeTheme } from "../features/theme/themeSlice"
import { MoonStyledIcon, SunStyledIcon } from "../components/Icons/IconsStyled"
import { LoginFormContainerStyled } from "../components/LoginPage/LoginFormContainerStyled"
import { LogoImgSolo} from "../components/Logo/LogoStyled"
import LogoPic from "../assets/images/Logo/logo.png" 
import { FormLoginStyled, InputStyled, LabelStyled } from "../components/Form/FormStyled"
import { ButtonFormStyled } from "../components/Button/ButtonStyled"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../context/AuthContext"



export const LoginPage = ()=>{
    const { login } = useAuth();
    const dispatch = useDispatch()
    const themeData = useSelector(getTheme)
    const navigate = useNavigate()

  const handleThemeChange = () => {
    dispatch(changeTheme())
    
    }

    const handleSubmit =  (e) => {
        e.preventDefault()
        const email = e.target.user.value
        const password = e.target.password.value
        if (email !== 'test@test.com' || password !== 'test') {
            loginError()
        
        } else {
            const bodyData=JSON.stringify({email:email, password : password})
            console.log(bodyData)
            login()
            navigate('/root/dashboard')
        }
    }
  const loginError = () =>{
    const theme = themeData? "dark" : "light"
    toast.error('Plese enter the user and password in the placeholders', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme
    });
  }

    return(
        <LoginPageStyled>
            <ToastContainer/>
            
            <LoginImageStyled src={ themeData? LoginPhotoNight : LoginPhotoDay} alt="Hotel photo" />
            <LoginFormContainerStyled>
            <LogoImgSolo src={LogoPic} alt="Logo" />
            <FormLoginStyled onSubmit={handleSubmit}>
                <LabelStyled>User</LabelStyled>
                <InputStyled
                    type="email"
                    name="user"
                    placeholder="test@test.com"
                />
                <LabelStyled>Password</LabelStyled>
                <InputStyled
                    type="password"
                    name="password"
                    placeholder="test"
                />
                <ButtonFormStyled
                    type="submit"
                >
                    Login
                </ButtonFormStyled>
                
            </FormLoginStyled>
            <ThemeSelectorAbsoluteStyled onClick={handleThemeChange}>
                {themeData ? <SunStyledIcon /> : <MoonStyledIcon />}
            </ThemeSelectorAbsoluteStyled>

            </LoginFormContainerStyled>
                <ThemeSelectorAbsoluteStyled onClick={handleThemeChange}>
                {themeData ? <SunStyledIcon /> : <MoonStyledIcon/>}
            </ThemeSelectorAbsoluteStyled>
        </LoginPageStyled>
    )
}