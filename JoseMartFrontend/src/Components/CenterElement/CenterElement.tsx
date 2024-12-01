import { useLocation } from "react-router-dom";

export const CenterElement = ()=>{
    const location = useLocation().pathname.split("/")[1]
    console.log(location);
    
    let element;
    const obj={

    }
    return(
        <div>
            {element}
        </div>
    )
}