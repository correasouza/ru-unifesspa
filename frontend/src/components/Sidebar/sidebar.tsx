import logounifesspa from '../../public/logounifesspa.png';
import { Link } from "react-router-dom";

function sidebar () {
    return ( 
        <>
            <aside className="w-96 h-screen bg-green-700 text-white fixed top-0 left-0 flex flex-col p-4">
                <img src="logounifesspa.png" alt="Logo da Unifesspa"  className="w-56 h-30 pb-8 pt-6 pl-4" />

                <nav className="flex-1">
                    <ul className="space-y-4">
                        <li>                   
                            <Link to="/comprar" className="block px-4 py-2 rounded-xl hover:bg-green-800">💵 Comprar Fichas</Link>
                        </li>
                        <li>
                            <Link to="/receber" className="block px-4 py-2 rounded-xl hover:bg-green-800">🖥️ Receber Fichas</Link>
                        </li>
                        <li>
                            <Link to="/" className="block px-4 py-2 rounded-xl hover:bg-green-800">👨🏾‍🦲 Clientes</Link>
                        </li>
                    </ul>
                </nav>
            </aside>

        </>
    );
}

export default sidebar;
