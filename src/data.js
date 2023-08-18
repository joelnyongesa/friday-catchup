import { useState, useEffect } from "react";
import DataItem from "./dataitem";


// UseState
// const [state, setState] = useState(initialValue)
// Initial value- data, which has a data type.

// useEffect
// useEffect() takes a callback function, dependencies array(optional)

// Steps of implementing props.
/*
1. Identify the data we want to pass- companies.keys.
2. 
*/

function Data(){
    const [companies, setCompanies]= useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/companies')
        .then(res => res.json())
        .then(data =>setCompanies(data))
    }, [])
    // console.log('after', companies)

    return(
        <>
        {/* Or simply: <DataItem comp={company} />*/}
            {companies.map((company =>
                <DataItem name={company.name} id={company.id} networth={company.netWorth} employees={company.employees}/>
            ))}
            <DataItem />
        </>
    )
}
export default Data;


// ToDO: Forms...