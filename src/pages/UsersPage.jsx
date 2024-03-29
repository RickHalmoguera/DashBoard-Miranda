import React, { useState } from "react";
import { UsersPageStyled } from "../components/UsersPage/UsersPageStyled";
import { FilterContainerStyled } from "../components/TableFilter/FilterContainerStyled";
import { TableTopContainerContainerStyled } from "../components/Table/TableTopContainer";
import { FilterButtonStyled } from "../components/TableFilter/FilterButtonStyled";
import { InputStyled } from "../components/Form/FormStyled";
import { SelectButtonStyled } from "../components/Button/SelectButtonStyled";
import { ButtonStyled } from "../components/Button/ButtonStyled";
import { TableTopButtonContainerStyled } from "../components/Table/TableTopButtonContainer";
import { TableUser } from "../components/Table/TableUser";
import { useNavigate } from 'react-router-dom';

export const UsersPage = ()=>{
    const navigate = useNavigate()
    const [searchName, setSearchName] = useState("")
    const [selectedSortOption, setSelectedSortOption] = useState("newest");
    const [filterOption,setFilterOption] = useState("all")
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
                    <ButtonStyled onClick={()=> navigate('/root/users/newuser')}>
                        + New User
                    </ButtonStyled>
                    <SelectButtonStyled onChange={handleSort} value={selectedSortOption}>
                        <option value="newest">Newest</option>
                        <option value="abc">A-Z</option>
                    </SelectButtonStyled>
                </TableTopButtonContainerStyled>

            </TableTopContainerContainerStyled>

           <TableUser FilterOption={filterOption} selectedSortOption={selectedSortOption} SearchName={searchName} />
        </UsersPageStyled>
    )
}