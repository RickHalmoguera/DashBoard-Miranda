import React, { useState } from "react"
import { RoomsPageStyled } from "../components/RoomsPage/RoomsPageStyled"
import { FilterContainerStyled } from "../components/TableFilter/FilterContainerStyled"
import { TableTopContainerContainerStyled } from "../components/Table/TableTopContainer"
import { FilterButtonStyled } from "../components/TableFilter/FilterButtonStyled"
import { SelectButtonStyled } from "../components/Button/SelectButtonStyled"
import { ButtonStyled } from "../components/Button/ButtonStyled"
import { TableTopButtonContainerStyled } from "../components/Table/TableTopButtonContainer"
import { useNavigate } from 'react-router-dom';
import { TableRoom } from "../components/Table/TableRoom"

export const RoomsPage = ()=>{
    const navigate = useNavigate()
    const [selectedSortOption, setSelectedSortOption] = useState("status");
    const [filterOption,setFilterOption] = useState("all")
    const handleSort = (e) => {
        const selectedOption = e.target.value;
        setSelectedSortOption(selectedOption);
    }

    return(
        <RoomsPageStyled>
            <TableTopContainerContainerStyled>
                <FilterContainerStyled>
                    <FilterButtonStyled onClick={()=> setFilterOption("all")}>
                        All Rooms
                    </FilterButtonStyled>
                    <FilterButtonStyled onClick={()=> setFilterOption("available")}>
                        Available Rooms
                    </FilterButtonStyled>
                    <FilterButtonStyled onClick={()=> setFilterOption("booked")}>
                        Booked Rooms
                    </FilterButtonStyled>
                </FilterContainerStyled>

                <TableTopButtonContainerStyled>
                    <ButtonStyled onClick={()=> navigate('/root/rooms/newroom')}>
                        + New Room
                    </ButtonStyled>
                    <SelectButtonStyled onChange={handleSort} value={selectedSortOption}>
                        <option value="status">Status</option>
                        <option value="price">Price</option>
                    </SelectButtonStyled>
                </TableTopButtonContainerStyled>

            </TableTopContainerContainerStyled>

           <TableRoom FilterOption={filterOption} selectedSortOption={selectedSortOption} />
        </RoomsPageStyled>
    )
}