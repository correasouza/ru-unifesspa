import React from 'react';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/sidebar';


interface User {
  nome: string;
  matricula: string;
  subsidiario: boolean;
  fichas: number;
}


function listagem() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await api.get('/listUsers');
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    }

    fetchUsers();
  }, []);

  return (

    
    
    

    <main>

    <Sidebar />
    
    <div className=" min-h-screen">
        <div className='justify-center flex m-10'>
            <h2 className='text-4xl font-semibold font-sans text-green-700'>Clientes</h2>
        </div>
        <div className='w-[80%] ml-auto'>
            <ul>               
                    <li className="p-4 flex justify-between px-12 items-center border-b border-gray-950 pl-36">
                        <h1 className=" text-size font-medium w-1/3 text-green-700">Nome</h1>
                        <h1 className='text-lg font-medium w-1/3 text-green-700'>Matricula</h1>
                        <h1 className='text-lg font-medium pr-10 w-1/3 text-green-700'>Subsidiario</h1>
                        <h1 className='text-lg font-medium pr-10 w-1/3 text-green-700'>Fichas</h1>
                    </li>
            </ul>
            <ul>
                {users.map((user) => (
                    <li className="p-4 flex justify-between px-12 items-center border-b border-gray-950 pl-36">
                        <h1 className=" text-size font-medium w-1/3 text-neutral-700">{user.nome} </h1>
                        <h1 className='text-lg font-medium w-1/3 text-neutral-700'>{user.matricula} </h1>
                        <h1 className='text-lg font-medium pr-10 w-1/3 text-neutral-700'>{user.subsidiario ? "SIM" : "NÃO"} </h1>
                        <h1 className='text-lg font-medium pr-10 w-1/3 text-neutral-700'>{user.fichas} </h1>
                    </li>
                ))}                         
                
            </ul>
        </div>

    </div>
    </main>
  );
}

export default listagem;