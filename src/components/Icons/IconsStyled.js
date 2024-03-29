import styled from "styled-components";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiKeyLine } from "react-icons/ri";
import { LuCalendarCheck2 } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { HiOutlinePuzzle } from "react-icons/hi";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

import { IoBedOutline } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";

import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";


import { FaPhone } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md"

import { FaRegTrashAlt } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const ThemeIconSharedStyle = `
    width: 100%;
    height: 100%;
    cursor: pointer;
`

export const MoonStyledIcon = styled(FaMoon)`
    ${ThemeIconSharedStyle}
` 

export const SunStyledIcon = styled(MdSunny)`
    ${ThemeIconSharedStyle}
` 

const NavSharedIconStyle = `
    width: 24px;
    height: 24px;
    color:inherit;
    cursor:pointer;
`
const TopBarSharedIconStyle =`
    width: 24px;
    height: 24px;
    color: #135846;
    cursor:pointer;
`

const DashBoardSharedIconStyle =`
    width:28px;
    height:28px;
    color: #E23428;
    &:hover{
        color:#FFF;
    }
    cursor:pointer;
`

export const TrashStyledBtn = styled(FaRegTrashAlt)`
    ${TopBarSharedIconStyle}
`
export const EditUserBtn = styled(FaUserEdit)`
    ${TopBarSharedIconStyle}
`
export const EditRoomBtn = styled(FaEdit)`
    ${TopBarSharedIconStyle}
`

export const ViewRoomBtn = styled(FaEye)`
    ${TopBarSharedIconStyle}
`


export const DashBoardStyledIcon = styled(LuLayoutDashboard)`
    ${NavSharedIconStyle}
` 
export const BookingStyledIcon = styled( RiKeyLine)`
    ${NavSharedIconStyle}
` 
export const RoomsStyledIcon = styled(LuCalendarCheck2)`
    ${NavSharedIconStyle}
` 
export const ContactStyledIcon = styled(CiUser)`
    ${NavSharedIconStyle}
` 
export const UsersStyledIcon = styled(HiOutlinePuzzle)`
    ${NavSharedIconStyle}
` 
export const MenuStyledIcon = styled(HiOutlineMenuAlt2)`
    ${TopBarSharedIconStyle}
` 
export const ArrowRightStyledIcon = styled(FaArrowRight)`
    ${TopBarSharedIconStyle}
` 
export const MailStyledIcon = styled(MdOutlineMailOutline)`
    ${TopBarSharedIconStyle}
` 
export const BellStyledIcon = styled(FaRegBell)`
    ${TopBarSharedIconStyle}
` 
export const LogoutStyledIcon = styled(RiLogoutBoxLine)`
    ${TopBarSharedIconStyle}
` 

export const BedStyledIcon = styled(IoBedOutline)`
    ${DashBoardSharedIconStyle}
`
export const CalendarDashStyledIcon = styled(LuCalendarCheck2)`
    ${DashBoardSharedIconStyle}
`

export const CheckInStyledIcon = styled(RiLoginBoxLine)`
    ${DashBoardSharedIconStyle}
`

export const CheckOutStyledIcon = styled(RiLogoutBoxLine)`
    ${DashBoardSharedIconStyle}
`

export  const CheckCircleStyledIcon = styled(FaRegCheckCircle)`
    color: #5AD07A;
    width: 24px;
    height: 24px;
    margin-right: 1.5em;
`
export  const XCircleStyledIcon = styled(FaRegCircleXmark)`
    color: #E23428;
    width: 24px;
    height: 24px;
    cursor: pointer;
`


export const PhoneStyledIcon = styled(FaPhone)`
    width: 24px;
    height: 24px;
    color:  ${props =>props.theme.text};
`