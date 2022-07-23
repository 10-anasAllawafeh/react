import { useCallback, useState } from "react"

const Register =()=>{

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [coPass,setCoPass]=useState("");


    const nameHandle=useCallback((e)=>{
        setName(e.target.value);
        console.log(name);
    });

    const emailHandle=(e)=>{
        setEmail(e.target.value);
        console.log(email);
    }

    const passHandle=(e)=>{
        setPass(e.target.value);
        console.log(pass);
    }

    const coPassHandle=(e)=>{
        setCoPass(e.target.value);
        console.log(coPass);
    }
    const subHandle=(e)=>{
        e.preventDefault();
        console.log("not yet");
    }
    return(
        <>
        <div className="App">
            <form action="">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" onChange={nameHandle}/><br />

                <label htmlFor="email">Your Email</label>
                <input type="text" id="email" name="email" onChange={emailHandle}/><br />

                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" onChange={passHandle}/><br />

                <label htmlFor="confirmPassword">confirm Password</label>
                <input type="text" id="confirmPassword" name="confirmPassword" onChange={coPassHandle}/><br />

                <input type="submit" onClick={subHandle}/>
            </form>
        </div>
        </>
    )
}

export default Register;