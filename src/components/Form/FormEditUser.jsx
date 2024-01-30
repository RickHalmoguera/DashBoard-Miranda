import { useDispatch, useSelector } from "react-redux"
import { ButtonStyled } from "../Button/ButtonStyled"
import { BtnContainerStyled, FormStyled, InputStyled, LabelStyled, TextAreaStyled } from "./FormStyled"
import { useNavigate,useParams } from "react-router-dom"
import { SelectButtonBigStyled } from "../Button/SelectButtonStyled"
import { useEffect, useState } from "react"
import { getUsersData, getUsersStatus, updateUser } from "../../features/users/usersSlice"
import { toast } from 'react-toastify'
import { getTheme } from "../../features/theme/themeSlice"
import { getUsersListFromAPIThunk } from "../../features/users/usersThunk"
import { ThreeDots } from "react-loader-spinner"


export const FormEditUser = ()=>{
    const themeData = useSelector(getTheme)
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const usersListData = useSelector(getUsersData)
    const usersListStatus = useSelector(getUsersStatus)
    const [spinner, setSpinner] = useState(true)
    const { id } = useParams()
    const [user, setUser] = useState({
    photo:"http://dummyimage.com/88x88.png/5fa2dd/ffffff",
    id: "",
    first_name: "",
    last_name:"",
    email: "",
    start_date: "",
    job_title:"",
    description: "",
    phone: "",
    is_active: "",
    })


    useEffect(() => {
        if (usersListStatus === "idle") {
            dispatch(getUsersListFromAPIThunk());
          } else if (usersListStatus === "pending") {
           
          } else if (usersListStatus === "fulfilled") {
            const searchUser = usersListData.find((user) => user.id.toString() === id);
            setUser(searchUser)
            setSpinner(false)
           
        }
      }, [usersListData,dispatch,usersListStatus])

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(updateUser(user))
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
      };


    return(
        <>
         {spinner && <ThreeDots
                    height="80" 
                    width="80" 
                    radius="9"
                    color="#135846" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{ margin:"auto auto" }}
                    visible={true}
                    />}
            {!spinner && <FormStyled onSubmit={handleSubmit} >    
                <LabelStyled>First Name</LabelStyled>
                <InputStyled type="text" name="first_name" value={user.first_name} onChange={handleChange} required/>
                <LabelStyled>Last Name</LabelStyled>
                <InputStyled type="text" name="last_name" value={user.last_name} onChange={handleChange} required/>
                <LabelStyled>Job Title</LabelStyled>
                <SelectButtonBigStyled name="job_title" value={user.job_title} onChange={handleChange}>
                    <option value="manager">Manager</option>
                    <option value="manag">Recepcionist</option>
                    <option value="manager">Room Service</option>
                </SelectButtonBigStyled>
                <LabelStyled>Phone</LabelStyled>
                <InputStyled type="text" name="phone" value={user.phone} onChange={handleChange} required/>
                <LabelStyled>Email</LabelStyled>
                <InputStyled type="email" name="email" value={user.email} onChange={handleChange} required/>
                <LabelStyled>Start Date</LabelStyled>
                <InputStyled type="date" name="start_date" value={ user.start_date.split('T')[0]} onChange={handleChange} required/>
                <LabelStyled>Job Description</LabelStyled>
                <TextAreaStyled  name="description" rows={4} value={user.description} onChange={handleChange} required/>
                <LabelStyled>Status</LabelStyled>
                <SelectButtonBigStyled name="is_active"  value={user.is_active} onChange={handleChange}required>
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                </SelectButtonBigStyled>
                <BtnContainerStyled>
                    <ButtonStyled
                    type="submit" 
                    $bg="#135846"
                    $fc="#FFF"
                    >
                        Save
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
            </FormStyled>}
        </>
       

    )

}