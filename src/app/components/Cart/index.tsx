import React from "react";
import { Product } from "@/dataProducts/productsData";
import { FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { GiShoppingCart } from "react-icons/gi";
import Link from "next/link";

interface CartProps {
  cartItems: Product[];
  address: Address;
  handleRemoveItem: (index: number) => void;
  onClose: () => void;
}

interface Address {
  street: string;
  number: string;
  zipCode: string;
  neighborhood: string;
}

function generateOrderText(cartItems: Product[], address: Address): string {
  let orderText = "Pedido via Whatsapp: \n\n";
  for (const item of cartItems) {
    const totalPrice = item.price * (item.quantity || 1);
    orderText += `Produto: ${item.name}\n`;
    orderText += `Quantidade: ${item.quantity}\n`;
    orderText += `Preço: R$${totalPrice.toFixed(2)}\n`;
    orderText += `Rua: ${address.street}\n`;
    orderText += `Número: ${address.number}\n`;
    orderText += `Bairro: ${address.neighborhood}\n`;
  }
  return orderText;
}

const Cart: React.FC<CartProps> = ({
  cartItems,
  address,
  handleRemoveItem,
  onClose,
}) => {
  const sendOrderViaWhatsapp = () => {
    const orderText = generateOrderText(cartItems, address);
    const phoneNumber = "";
    const encodedMessage = encodeURIComponent(orderText);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-4 rouded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Carrinho</h2>
          <button className="text-gray-500 ml-20" onClick={onClose}>
            <FiX size={20} />
          </button>
        </div>
        <div className="fixded justify-between">
          <Link
            href="/address"
            className="hover:underline text-blue-500 hover:text-blue-700"
          >
            Gerenciar endereço
          </Link>
          {cartItems.length > 0 && (
            <>
              <h1>Endereço de entrega:</h1>
              <p>Rua: {address.street}</p>
              <p>Número: {address.number}</p>
              <p>Bairro: {address.neighborhood}</p>
              <p>CEP: {address.zipCode}</p>
            </>
          )}
        </div>
        {cartItems.length === 0 ? (
          <div className="flex justify-center p-5">
            <h1 className="flex text-bold items-center">
              <GiShoppingCart size={50} className="mr-2" />O carrinho está vazio
            </h1>
          </div>
        ) : (
          cartItems.map((item, index) => {
            const totalPrice = item.price * (item.quantity || 1);
            return (
              <div
                key={index}
                className="sm:flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center">
                  <div className="mr-4 w-auto h-auto">
                    <Image
                      alt="Product image"
                      src={item.image}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>Quantidade: {item.quantity}</p>
                    <p>Preço: R$ {totalPrice.toFixed(2)}</p>
                  </div>
                  <div>
                    <button
                      className="bg-red-500 text-white w-full mt-5 lg:ml-0 rounded-lg p-2"
                      onClick={() => handleRemoveItem(index)}
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
        {cartItems.length > 0 && (
          <button
            className="bg-whatsapp flex text-white px-4 py-2 rounded-md shadow-lg w-full"
            onClick={sendOrderViaWhatsapp}
          >
            <FaWhatsapp size={20} /> Enviar pedido para o Whatsapp
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
