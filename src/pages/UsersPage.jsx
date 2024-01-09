import React, { useState } from "react";
import { UsersPageStyled } from "../components/UsersPage/UsersPageStyled";
import { FilterContainerStyled } from "../components/TableFilter/FilterContainerStyled";
import { TableTopContainerContainerStyled } from "../components/Table/TableTopContainer";
import { FilterButtonStyled } from "../components/TableFilter/FilterButtonStyled";
import { InputStyled } from "../components/Form/FormStyled";
import { SelectButtonStyled } from "../components/Button/SelectButtonStyled";
import { ButtonStyled } from "../components/Button/ButtonStyled";
import { TableTopButtonContainerStyled } from "../components/Table/TableTopButtonContainer";

export const UsersPage = ()=>{
    const [selectedSortOption, setSelectedSortOption] = useState("newest");
    const handleSort = (e) => {
        const selectedOption = e.target.value;
        setSelectedSortOption(selectedOption);
    }

    return(
        <UsersPageStyled>
            <TableTopContainerContainerStyled>
                <FilterContainerStyled>
                    <FilterButtonStyled onClick={()=> setFilterOption("all")}>
                        All Employees
                    </FilterButtonStyled>
                    <FilterButtonStyled onClick={()=> setFilterOption("active")}>
                        Active Employees
                    </FilterButtonStyled>
                    <FilterButtonStyled onClick={()=> setFilterOption("inactive")}>
                    Inactive Employees
                    </FilterButtonStyled>
                    <InputStyled type="text" name="" id="" placeholder="Search Name" onChange={(e)=> setSearchName(e.target.value)}/>
                </FilterContainerStyled>

                <TableTopButtonContainerStyled>
                    <ButtonStyled>
                        + New User
                    </ButtonStyled>
                    <SelectButtonStyled onChange={handleSort} value={selectedSortOption}>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </SelectButtonStyled>
                </TableTopButtonContainerStyled>

            </TableTopContainerContainerStyled>

            
        </UsersPageStyled>
    )
}