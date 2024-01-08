import { LogoHeading, LogoImg, LogoStyled, LogoSubHeading } from "./LogoStyled"
import LogoPic from "../../assets/images/Logo/logo.png"
export const Logo = () => {
    return(
        <LogoStyled>
            <LogoImg src={LogoPic} alt="Logo" />
            <LogoHeading>travl<br/> <LogoSubHeading>Hotel Admin Dashboard</LogoSubHeading></LogoHeading>
        </LogoStyled> 
    )
}
