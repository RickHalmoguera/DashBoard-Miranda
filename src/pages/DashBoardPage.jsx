import React from "react" 
import { KpiCard } from "../components/DashBoardPage/KpiCard"
import { DashBoardBottomContainerStyled, DashBoardHeading, DashBoardStyled, DashBoardTopContainerStyled } from "../components/DashBoardPage/DashBoardStyled"
import { BedStyledIcon, CalendarDashStyledIcon,CheckInStyledIcon, CheckOutStyledIcon } from "../components/Icons/IconsStyled"
import { SwiperReviews } from "../components/SwiperReviews/SwiperReviews"



export const DashBoardPage = ()=>{

    return(
        <DashBoardStyled>
             
            <DashBoardTopContainerStyled>
                <KpiCard Icon={BedStyledIcon} number={8461} text="New Booking"/>
                <KpiCard Icon={CalendarDashStyledIcon} number={963} text="Scheduled Rooms"/>
                <KpiCard Icon={CheckInStyledIcon} number={753} text="Check in"/>
                <KpiCard Icon={CheckOutStyledIcon} number={516} text="Check Out"/>
            </DashBoardTopContainerStyled>
            <DashBoardBottomContainerStyled>
                <DashBoardHeading>Latest Reviews by Customers</DashBoardHeading>
                <SwiperReviews/>
            </DashBoardBottomContainerStyled>
        </DashBoardStyled>
        
    )
}