import { Outlet } from "react-router-dom"
import { Footer } from "../UI/Footer"
import { Header } from "../UI/Header"
import { About } from "../../Pages/About"

export const AppLayout = ()=>{
    return <>
    <Header/>
    <Outlet/>
    {/* <About/> */}
    <Footer/>
    </>
}