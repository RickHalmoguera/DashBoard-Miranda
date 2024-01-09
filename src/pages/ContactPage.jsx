import React from "react"
import { FilterContainerStyled } from "../components/TableFilter/FilterContainerStyled"
import { FilterButtonStyled } from '../components/TableFilter/FilterButtonStyled'
import { SelectButtonStyled } from '../components/Button/SelectButtonStyled'

import { TableContact } from "../components/Table/TableContact"
import { SwiperReviews } from "../components/SwiperReviews/SwiperReviews"
import { ContactPageStyled, ContactPageTopContainerStyled } from "../components/ContactPage/ContactStyled"
import { useState } from "react"
import { TableTopContainerContainerStyled } from "../components/Table/TableTopContainer"

export const ContactPage = ()=>{
    const [isFiltered, setIsFiltered] = useState(false)
    const [selectedSortOption, setSelectedSortOption] = useState("newest");


    const handleSort = (e) => {
        const selectedOption = e.target.value;
        setSelectedSortOption(selectedOption);
    }

  

    const SetFilterTable = ()=>{
        setIsFiltered(!isFiltered)
    }

    return(
        <ContactPageStyled>
            <ContactPageTopContainerStyled>
                <SwiperReviews/>
            </ContactPageTopContainerStyled>
            
            <TableTopContainerContainerStyled>
                <FilterContainerStyled>
                    <FilterButtonStyled onClick={SetFilterTable}>
                        All Contacts
                    </FilterButtonStyled>
                    <FilterButtonStyled onClick={SetFilterTable}>
                        Archived
                    </FilterButtonStyled>
                </FilterContainerStyled>
                

                <SelectButtonStyled onChange={handleSort} value={selectedSortOption}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </SelectButtonStyled>
            </TableTopContainerContainerStyled>

            <TableContact isFiltered={isFiltered} selectedSortOption={selectedSortOption}/>
        </ContactPageStyled>
    )
}