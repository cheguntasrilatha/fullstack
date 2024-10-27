import React, { useEffect, useState } from 'react'
const Navbar= ({appdata,logo}) => {
    const[stringstate,setStringstate]= useState("s")
    const[numberstate, setNumberstate] = useState(4)
    const[arraystate,setArraystate]= useState(["a",false,0])
    //console.log(numberstate)
   // console.log(stringstate)
    //console.log(arraystate)
    const [count,setCount] =useState(0);
    useEffect (() => {
       //alert('effect rendered')
       console.log("The count " + count)
    },[count])
    return(
        <>
        <button className='w-[6rem] h-[4-rem] bg-slate-500 text-yellow-300' onClick={() => { setCount(count+1) }}>
            Count {count}
        </button>
        </>
    )
}
export default Navbar