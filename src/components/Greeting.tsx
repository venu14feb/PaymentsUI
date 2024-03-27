import { useState } from "react";
type GreetingProps = {
    name: string,
    age: number
}

const Greeting = (props:GreetingProps):JSX.Element => {

    const [age, setAge] = useState<number>(props.age)

    const handleclick = (): void => {
        console.log("clicked")
        setAge(age=>age+1)
    };
    const increaseAge = (increment: number):void => {
        console.log("Age increased by 3")
        setAge(age=>age+increment)
    }
    return (
    
    <ul>
        <p>Hello {props.name} age {Number(age)}</p>
        <button onClick={handleclick}>Happy birthday!</button>
        <button onClick={() => increaseAge(3)}>Happy 3rd birthday!</button>
        
    </ul>
    
)
    }


export default Greeting