import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx'
import Main from './Components/Main.jsx'
import Astros from './Components/Astros.jsx'
import About from './components/About.jsx';
import './App.css'

function App() {

    const linksData = [
        { name: 'Home', href: '/Main'},
        { name: 'About', href: '/About'},
        { name: 'Astros', href: '/astros'},
    ]

    return (
        <>
            <Navbar header='Navbar' links={linksData} /> 
            <Routes>
                <Route
                    element={<Main />}
                    path='/Main'
                />
                <Route 
                    element={<Astros />}
                    path='/astros'
                />
                <Route 
                    element={<About />}
                    path='/About'
                />
            </Routes>
        </>
    )
}

export default App
