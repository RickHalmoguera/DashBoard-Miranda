import { useDispatch, useSelector } from "react-redux"
import { ButtonStyled } from "../Button/ButtonStyled"
import { BtnContainerStyled, FormStyled, InputStyled, LabelStyled, TextAreaStyled } from "./FormStyled"
import { addUser, getUsersData, getUsersStatus } from "../../features/users/usersSlice"
import { useEffect, useState, useRef } from "react"
import { getUsersListFromAPIThunk } from "../../features/users/usersThunk"
import { useNavigate } from "react-router-dom"
import { SelectButtonBigStyled } from "../Button/SelectButtonStyled"
import { toast } from 'react-toastify'
import { getTheme } from "../../features/theme/themeSlice"


export const FormUser = ()=>{
    const themeData = useSelector(getTheme)
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const usersListData = useSelector(getUsersData)
    const usersListStatus = useSelector(getUsersStatus)
    const [newId,setNewId]= useState(0)
    const formRef= useRef()

    useEffect(()=>{

    if (usersListStatus === "idle") {
        dispatch(getUsersListFromAPIThunk());
      } else if (usersListStatus === "pending") {
       
      } else if (usersListStatus === "fulfilled") {
       setNewId(usersListData.length + 1)
       
      }
  
    },[dispatch, usersListData, usersListStatus])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newUser ={
            photo:"http://dummyimage.com/88x88.png/5fa2dd/ffffff",
            id: newId,
            first_name:e.target.first_name.value,
            last_name: e.target.last_name.value,
            email:e.target.email.value,
            start_date:e.target.start_date.value,
            job_title:e.target.job_title.value,
            description:e.target.description.value,
            phone: e.target.phone.value,
            is_active:e.target.is_active.value === 'true'
        }
        const theme = themeData? "dark" : "light"
        toast.success('User updated!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
        });
        dispatch(addUser(newUser))
        navigate("/root/users")
    }

    const handleClear = (e)=>{
        e.preventDefault()
        formRef.current.first_name.value = ""
        formRef.current.last_name.value = ""
        formRef.current.email.value = ""
        formRef.current.start_date.value = ""
        formRef.current.description.value = ""
        formRef.current.phone.value = ""
    }


    return(
        <FormStyled onSubmit={handleSubmit} ref={formRef}>    
            <LabelStyled>First Name</LabelStyled>
            <InputStyled type="text" name="first_name"  required/>
            <LabelStyled>Last Name</LabelStyled>
            <InputStyled type="text" name="last_name" required/>
            <LabelStyled>Job Title</LabelStyled>
            <SelectButtonBigStyled name="job_title">
                <option value="manager">Manager</option>
                <option value="manag">Recepcionist</option>
                <option value="manager">Room Service</option>
            </SelectButtonBigStyled>
            <LabelStyled>Phone</LabelStyled>
            <InputStyled type="text" name="phone" required/>
            <LabelStyled>Email</LabelStyled>
            <InputStyled type="email" name="email" required/>
            <LabelStyled>Start Date</LabelStyled>
            <InputStyled type="date" name="start_date" required/>
            <LabelStyled>Job Description</LabelStyled>
            <TextAreaStyled  name="description" rows={4} required/>
            <LabelStyled>Status</LabelStyled>
            <SelectButtonBigStyled name="is_active" required>
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
            </SelectButtonBigStyled>
            <BtnContainerStyled>
                <ButtonStyled
                type="submit" 
                $bg="#135846"
                $fc="#FFF"
                >
                    Create
                </ButtonStyled>
                <ButtonStyled 
                type="submit"
                onClick={handleClear}
                $bg="#E23428"
                $fc="#FFF"
                >
                    Clear
                </ButtonStyled>
            </BtnContainerStyled>
        </FormStyled>
       

    )

}