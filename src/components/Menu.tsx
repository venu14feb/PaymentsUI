const tab = {
    display: 'inline-block',
    marginLeft: '500px'
}

const Menu = () : JSX.Element => {
    return (
        <div>
            <span style={{fontWeight:'bold'}}>Payments application<span style={tab}></span></span>
            <span>Find a transaction<span style={tab}></span></span>
            <span>New transaction<span style={tab}></span></span>
        </div>
    )
}

export default Menu