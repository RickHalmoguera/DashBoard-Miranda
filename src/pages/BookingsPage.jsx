import React, { useState } from "react"
import { FilterContainerStyled } from "../components/TableFilter/FilterContainerStyled"
import { TableTopContainerContainerStyled } from "../components/Table/TableTopContainer"
import { FilterButtonStyled } from "../components/TableFilter/FilterButtonStyled"
import { SelectButtonStyled } from "../components/Button/SelectButtonStyled"
import { TableTopButtonContainerStyled } from "../components/Table/TableTopButtonContainer"
import { BookingsPageStyled } from "../components/BookingsPageStyled/BookingsPageStyled"
import { TableBookings } from "../components/Table/TableBookings"

export const BookingsPage = ()=>{
    
    const [selectedSortOption, setSelectedSortOption] = useState("status");
    const [filterOption,setFilterOption] = useState("all")
    const handleSort = (e) => {
        const selectedOption = e.target.value;
        setSelectedSortOption(selectedOption);
    }

    return(
        <BookingsPageStyled>
            <TableTopContainerContainerStyled>
                <FilterContainerStyled>
                    <FilterButtonStyled onClick={()=> setFilterOption("all")}>
                        All Bookings
                    </FilterButtonStyled>
                    <FilterButtonStyled onClick={()=> setFilterOption("checkin")}>
                        Checking In
                    </FilterButtonStyled>
                    <FilterButtonStyled onClick={()=> setFilterOption("checkout")}>
                        Checking Out
                    </FilterButtonStyled>
                    <FilterButtonStyled onClick={()=> setFilterOption("progress")}>
                        In Progress
                    </FilterButtonStyled>
                </FilterContainerStyled>

                <TableTopButtonContainerStyled>
                    <SelectButtonStyled onChange={handleSort} value={selectedSortOption}>
                        <option value="guest">Guest</option>
                        <option value="date">Order date</option>
                        <option value="checkin">Check in</option>
                        <option value="checkout">Check out</option>
                    </SelectButtonStyled>
                </TableTopButtonContainerStyled>

            </TableTopContainerContainerStyled>

           <TableBookings FilterOption={filterOption} selectedSortOption={selectedSortOption} />
        </BookingsPageStyled>
    )
}