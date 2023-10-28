import Header from "../components/base/header"
import Footer from "../components/base/footer"
import { Outlet } from "react-router-dom"

export default function Base() {
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}