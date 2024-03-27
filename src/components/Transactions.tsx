type dataRow = {
    id: number,
    date: Date,
    country: string,
    currency: string,
    amount: number
}

const FilterOrder = (row:dataRow):JSX.Element => {
    return (
        <tr>
            <td>{row.id}</td> 
            <td>{String(row.date.toDateString())}</td>
            <td>{row.country}</td>
            <td>{row.currency}</td>
            <td>{row.amount}</td>
        </tr>
    )
}

export default FilterOrder