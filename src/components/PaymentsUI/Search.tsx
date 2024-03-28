import FilterOrder from "./Transactions"
type dataRow = {
    id: number,
    date: Date,
    country: string,
    currency: string,
    amount: number
}

const data:dataRow[] = 
    [
        {id:1, date:new Date(), country: 'USA', currency: 'USD', amount: 10},
        {id:2, date:new Date(), country: 'AUS', currency: 'ASD', amount: 20},
        {id:3, date:new Date(), country: 'IND', currency: 'INR', amount: 50},
        {id:4, date:new Date(), country: 'SIN', currency: 'SGD', amount: 80}
    ]

type orderDetails = {
    orderId: number
}


const SearchOrder = (order:orderDetails):JSX.Element => {
    let orders:JSX.Element[] = data.map((row, index)=><FilterOrder key={index} id={row.id} date={row.date} country={row.country} currency={row.currency} amount= {row.amount}/>);

    return (
        <div>
            <p>
                <span>Order Id:</span>
                <span><input type="text"></input></span>
                <span><button>Search</button></span>
                <br></br>
                <br></br>

                <label>
                    Select Country
                    <select>
                        <option>USD</option>
                        <option>FRA</option>
                        <option>INR</option>
                    </select>
                </label>
  
                <div>
                <table className="center">
                    <tr>
                        <th>Id</th> 
                        <th>Date</th>
                        <th>Country</th>
                        <th>Currency</th>
                        <th>Amount</th>
                    </tr>
                    {orders}
                </table>
                </div>
            </p>
        </div>
    )
}

export default SearchOrder