import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
    return (
        <header className="p-4 md:p-3 flex">
            <div className="container mx-auto text-center">
                <p className="text-lg md:text-1xl font-bold">
                    Cardápio online
                </p>
                <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-colorPrimary flex justify-center">
                    Confira o nosso cardápio e envie pelo Whatsapp <FaWhatsapp size={15}/>
                </h1>
            </div>
        </header>
    )
}
