import { NavLinkStyled } from "./NavLinkStyled"
import { BookingStyledIcon, ContactStyledIcon, DashBoardStyledIcon, RoomsStyledIcon, UsersStyledIcon } from "../Icons/IconsStyled"
import { NavLiStyled, NavUlStyled } from "./NavUlStyled"
export const NavUl = ()=>{
    return(
        <NavUlStyled>
            <NavLiStyled>
                <NavLinkStyled 
                to="/root/dashboard"
                >
                    <DashBoardStyledIcon/>
                    Dashboard
                </NavLinkStyled>
            </NavLiStyled>
            <NavLiStyled>
                <NavLinkStyled 
                to="/root/booking"
                >
                <BookingStyledIcon />
                    Booking
                </NavLinkStyled>
            </NavLiStyled>
            <NavLiStyled>
                <NavLinkStyled 
                to="/root/rooms"
                >
                <RoomsStyledIcon />
                    Rooms
                </NavLinkStyled>
            </NavLiStyled>
            <NavLiStyled>
                <NavLinkStyled 
                to="/root/contact"
                >
                <ContactStyledIcon />
                    Contact
                </NavLinkStyled>
            </NavLiStyled>
            <NavLiStyled>
                <NavLinkStyled 
                to="/root/users"
                >
                <UsersStyledIcon />
                    Users
                </NavLinkStyled>
            </NavLiStyled>
        </NavUlStyled>

    )
}