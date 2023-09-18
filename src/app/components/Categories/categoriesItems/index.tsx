"use client";
// import data products
import React, { useEffect, useState } from "react";
import { Product, productsByCategory } from "@/dataProducts/productsData";
//import next image
import Image from "next/image";
//import component
import Cart from "../../Cart";
//icons
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { BsMinecart } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
//toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CategoryItemsProps {
  selectedCategory: string;
}

export default function CategoryItems({
  selectedCategory,
}: CategoryItemsProps) {
  const [products, setProducts] = useState<Product[]>(
    productsByCategory[selectedCategory] || []
  );
  const [selectedProductsId, setSelectedProductsId] = useState<number | null>();
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSlices, setSelectedSlices] = useState<number[]>([]);

  const handleProductClick = (productId: number) => {
    setSelectedProductsId(productId);
  };

  const increaseQuantity = (productId: number) => {
    setSelectedProductsId(productId);
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId) {
          product.quantity++;
        }
        return product;
      });
    });
  };
  const decreaseQuantity = (productId: number) => {
    setSelectedProductsId(productId);
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId) {
          product.quantity--;
        }
        return product;
      });
    });
  };
  const addToCart = (product: Product, selectedSliceIndex: number | undefined) => {
    setSelectedProductsId(product.id);
    const price = selectedSliceIndex !== undefined && product.slices
      ? product.slices[selectedSliceIndex].price
      : product.price;
    const productToAdd: Product = {
      ...product,
      price: price,
    }
    setCartItems((prevCartItems) => [...prevCartItems, productToAdd]);
    toast.success(`${product.name} foi adicionado ao carrinho!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const toggleCart = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  }
  const removeCartItem = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  }
  const calculateTotalPrice = (product: Product, index: number): number => {
    if (product.slices && selectedSlices[index] !== undefined) {
      const selectedSlice = product.slices[selectedSlices[index]];
      return selectedSlice.price * product.quantity;
    }
    return product.price * product.quantity;
  }
  const handleSliceChance = (index: number, sliceIndex: number) => {
    setSelectedSlices((prevSelectedSlices) => {
      const newSelectedSlices = [...prevSelectedSlices];
      newSelectedSlices[index] = sliceIndex;
      return newSelectedSlices;
    });
  }
  useEffect(() => {
    setProducts(productsByCategory[selectedCategory] || []);
  }, [selectedCategory]);

  return (
    <div className="mt-5 flex flex-colun justify-center">
      <div className="max-w-screen-lg w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.length === 0 ? (
            <p>Nenhum produto disponível nesta categoria</p>
          ) : (
            products.map((product, index) => {
              const totalPrice = calculateTotalPrice(product, index);
              return (
                <div
                  key={product.id}
                  className={`p-4 border rounded-md shadow-md flex flex-col items-center cursor-pointer ${selectedProductsId === product.id ? "bg-colorPrimary text-white" : "bg-white"}`}
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className="h-36 w-52 relative rounded-md overflow-hidden">
                    <Image
                      src={product.image}
                      alt="Imagem do produto"
                      fill
                      sizes="(max-width: 36px) (max-width: 52px)"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p>Preço: R${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col items-center space-x-2 mt-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <span>Quantidade:</span>
                      <button
                        className={`${selectedProductsId === product.id ? "text-white" : "text-black"}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          decreaseQuantity(product.id);
                        }}
                      >
                        <FiMinusCircle />
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        className={`${selectedProductsId === product.id ? "text-white" : "text-black"}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          increaseQuantity(product.id);
                        }}
                      >
                        <FiPlusCircle />
                      </button>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      {product.slices && (
                        <select
                          value={selectedSlices[index] || ""}
                          onChange={(e) => handleSliceChance(index, parseInt(e.target.value, 10))}
                          className={`${selectedProductsId === product.id
                            ? "bg-white text-colorPrimary"
                            : "bg-white text-black"
                            } px-2 py-1 rounded-md`}
                        >
                          {product.slices.map((slice, index) => (
                            <option
                            key={index}
                              value={index}
                              className={`${selectedProductsId === product.id
                                ? "text-colorPrimary"
                                : "text-black"
                                }`}
                            >
                              {slice.quantity} Fatias
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                    <button
                      className={`${selectedProductsId === product.id
                      ? "bg-white text-colorPrimary"
                      : "bg-colorPrimary text-white"} px-2 py-1 rounded-md flex items-center`}
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product, selectedSlices[index]);
                      }}>
                        <GiShoppingCart size={20} /> Adicionar ao carrinho
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <button
        className="fixed bottom-5 right-5 bg-colorPrimary text-white p-4 rounded-full shadow-lg"
        onClick={toggleCart}
      >
        <BsMinecart size={23} />
      </button>
      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          onClose={() => setIsCartOpen(false)}
          handleRemoveItem={removeCartItem}
        />
      )}
      <ToastContainer />
    </div>
  );
}
