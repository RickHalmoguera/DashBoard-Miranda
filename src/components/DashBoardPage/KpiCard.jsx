import {KpiCardStyled} from "./KpiCardStyled"
export const KpiCard = ({Icon,number, text})=>{
    return(
        <KpiCardStyled>
            <div className="icon__container">
                <Icon/>
            </div>
            <div className="text__container">
                <p>{number}</p>
                <span>{text}</span>
            </div>
        </KpiCardStyled>
)
}