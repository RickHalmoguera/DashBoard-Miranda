import React from "react"
import { FilterContainerStyled } from "../components/Button/FilterContainerStyled"
import { FilterButtonStyled } from '../components/Button/FilterButtonStyled'
import { SelectButtonStyled } from '../components/Button/SelectButtonStyled'

import { TableContact } from "../components/Table/TableContact"
import { SwiperReviews } from "../components/SwiperReviews/SwiperReviews"
import { ContactStyled, ContactTopContainerStyled } from "../components/ContactPage/ContactStyled"
import { useState } from "react"

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
        <ContactStyled>
            <ContactTopContainerStyled>
                <SwiperReviews/>
            </ContactTopContainerStyled>
            
            <FilterContainerStyled>
                <div>
                    <FilterButtonStyled onClick={SetFilterTable}>
                        All Contacts
                    </FilterButtonStyled>
                    <FilterButtonStyled onClick={SetFilterTable}>
                        Archived
                    </FilterButtonStyled>
                </div>
                

                <SelectButtonStyled onChange={handleSort} value={selectedSortOption}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </SelectButtonStyled>
            </FilterContainerStyled>

            <TableContact isFiltered={isFiltered} selectedSortOption={selectedSortOption}/>
        </ContactStyled>
    )
}