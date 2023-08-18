const DataItem = ({name, employees, networth})=>{
    return(
        <div className="data-item">
            Name: {name}
            <br/>
            Net Worth: {networth}
            <br/>
            Number of Employees: {employees}
        </div>
    )
}

export default DataItem;