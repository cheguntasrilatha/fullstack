import React, { useState } from 'react'
const Navbar= ({appdata,logo}) => {
    const[stringstate,setStringstate]= useState("s")
    const[numberstate, setNumberstate] = useState(4)
    const[arraystate,setArraystate]= useState(["a",false,0])
    console.log(numberstate)
    console.log(stringstate)
    console.log(arraystate)
    return(
        <>
        {appdata.appname} {logo}
        </>
    )
}
export default Navbar