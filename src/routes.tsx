import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import { One } from "./component/One"
import { Pepe } from "./component/Pepe"
import Navbar from "./component/Navbar"


export const AppRoutes = () => {
    return (
        <>
            <header>
                <h1> Container </h1>
                <hr />
            </header>
            <Routes>
                <Route key="conteiner" path="/" element={<App />} />
                <Route key="one" path="/one" element={<One />} />
                <Route path="pepe" element={<Pepe />} />
            </Routes>
        </>
    )
}