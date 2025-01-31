import FilterOrder from "./FilterOrder"
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
        {id:3, date:new Date(), country: 'IND', currency: 'INR', amount: 50}
    ]

type orderDetails = {
    orderId: number
}

const SearchOrder = (order:orderDetails):JSX.Element => {
    let orders:JSX.Element[] = [];

    data.forEach((row:dataRow) => {
        orders.push(<FilterOrder id={row.id} date={row.date} country={row.country} currency={row.currency} amount= {row.amount}/>);
    });
    return (
        <div>
            <p>
                <span>Order Id:</span>
                <span><input type="text"></input></span>
                <span><button>Search</button></span>
                <div>
                <table>
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