import { UserCard } from "./UserCard"
import { NavUl } from "../NavUl/NavUl"
import { Logo } from "../Logo/Logo"
import { SideMenuFooter, SideMenuStyled } from "./SideMenuStyled"

export const SideMenu = ({isVisible }) =>{
    return(

        isVisible && <SideMenuStyled>
            <Logo/>
            <NavUl/>
            <UserCard/>
            <SideMenuFooter>
                <h2>Travl Hotel Admin Dashboard</h2>
                <p>© 2020 All Rights Reserved</p>
                <p>Made with ♥ by Ricardo</p>
            </SideMenuFooter>
            
        </SideMenuStyled>
    )
}