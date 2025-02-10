import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { api } from '../../services/api';
import Sidebar from '../../components/Sidebar/sidebar';


function Comprar() {
    
    const matriculaRef = useRef<HTMLInputElement | null>(null);
    const quantidadeRef = useRef<HTMLInputElement | null>(null);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        
        const response = await api.post('/purchaseToken', {
            matricula: matriculaRef.current?.value,
            quantidade: quantidadeRef.current?.value
        });
    }

  return (
    <main>
      <Sidebar />
      <div className="min-h-screen">
        <div className='justify-center flex m-10'>
          <h2 className='font-semibold text-green-700 text-4xl'>Comprar Fichas</h2>
        </div>
        <div className='justify-center flex m-10 h-1/3'>
          <h2 className='text-green-700 font-semibold'>Preencha os dados do cliente</h2>
        </div>
        <div className='justify-center flex m-10'>
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="matricula">
                Matrícula
              </label>
              <input
                type="text"
                placeholder='Digite a matricula'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ref={matriculaRef}
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantidade">
                Quantidade
              </label>
              <input
                type="number"
                placeholder='Digite a quantidade'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ref={quantidadeRef}
              />
            </div>
            <div className="flex items-center justify-between">
              <input
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                value="Comprar"
                
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Comprar;