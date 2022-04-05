import React, {useContext} from "react"
import { store} from "./App"
import ComponentThree from "./ComponentThree"

export default function ComponentOne(){
    const [data, setData] = useContext(store)

    const changeData = () =>{
        setData(data + 1)
    }

    return(
        <div>
            <h1>{data}</h1>
            <ComponentThree/>
            <button type="button" onClick={changeData}>inc</button>
        </div>
    )
}