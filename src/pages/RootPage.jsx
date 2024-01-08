import React from "react"
import { Outlet } from "react-router-dom"
import { useState } from "react";
import { useSelector } from "react-redux"
import { getCommentId } from "../features/comments/commentsSlice";
import { RootStyled } from "../components/RootPage/RootStyled";
import { Modal } from "../components/Modal/Modal";
import { SideMenu } from "../components/SideMenu/SideMenu";
import { FlexColumnStyled } from "../components/RootPage/FlexColumnStyled";
import { TopBar } from "../components/TopBar/TopBar";

export const RootPage = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const modalOpen = useSelector(getCommentId)
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }


    return(
        <RootStyled>
            {modalOpen != undefined? <Modal/> : ""}
            <SideMenu isVisible={isMenuOpen}/>
            <FlexColumnStyled>
                <TopBar onToggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
                <Outlet/>
            </FlexColumnStyled>
        </RootStyled>
    )
}