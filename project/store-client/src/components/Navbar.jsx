import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const Linksdata=[
        {
            title:'Home',
            path:'/'
        },
        {
            title:'Products',
            path:'/products'
        },
        {
            title:'Contact',
            path:'/contact'
        }
    ]




    return (
        <>
            <div className='w-screen h-14 shadow-pink-600 shadow-md flex flex-row justify-center items-center'>
                <div className='w-[40%] flex justify-items-center font-bold text-2x1 text-red-400'>
                    Max Store </div>
                <div className='w-[40%] flex justify-start items-center'>
                    {Linksdata.map((link,index)=>(
                        <NavLink to={link.path} key={index} className='h=[65%] w-20 hover:bg-purple-500 hover:text-white'>
                            {link.title}
                        </NavLink>
                    ))}
                    {/*<ul className='w-full flex flex-row justify-end items-center gap-8 font-semibold'>

                        <li>Home</li>

                        <li>Products</li>
                        <li>contact</li>
                    </ul>*/}

                </div>

            </div>
        </>
    )
}
export default Navbar