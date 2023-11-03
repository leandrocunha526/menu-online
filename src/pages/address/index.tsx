import Link from "next/link";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";

interface Address {
  street: string;
  neighborhood: string;
  number?: string;
  zipCode?: string;
}

const AddressForm = () => {
  const [zipCode, setZipCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [address, setAddress] = useState<Address>({
    street: "",
    neighborhood: "",
    number: "",
    zipCode: "",
  });

  const loadZipCodeFromLocalStorage = () => {
    const savedZipCode = localStorage.getItem("zipCode");
    if (savedZipCode) {
      setZipCode(savedZipCode);
      searchAddressByCEP(savedZipCode); // Call search function here
    }
  };

  const saveAddressToLocalStorage = (address: Address) => {
    localStorage.setItem("address", JSON.stringify(address));
  };

  const loadAddressFromLocalStorage = () => {
    const savedAddress = localStorage.getItem("address");
    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
    }
  };

  useEffect(() => {
    loadZipCodeFromLocalStorage();
    loadAddressFromLocalStorage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = e.target.value.replace(/\D/g, "");
    setZipCode(newCep);
    searchAddressByCEP(newCep); // Call search function here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const searchAddressByCEP = (zipCode: string) => {
    console.log(zipCode);
    fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
      .then((response) => response.json())
      .then((data) => {
        setAddress({
          street: data.logradouro,
          neighborhood: data.bairro,
          number: "",
          zipCode: zipCode,
        });
        saveAddressToLocalStorage({
          street: data.logradouro,
          neighborhood: data.bairro,
          number: "",
          zipCode: zipCode,
        });
        setError("");
        toast.success("Address found and filled successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.error("Error fetching address:", error);
        setAddress({
          street: "",
          neighborhood: "",
          number: "",
          zipCode: zipCode,
        });
        setError("Unable to find the address for the provided ZIP code.");
      });
  };

  const handleSaveButtonClick = () => {
    saveAddressToLocalStorage(address);
    toast.success('Endereço salvo com sucesso', {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 flex flex-col justify-center sm:py-15">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-2xl font-semibold">
                  Address Form
                </h2>
                <Link
                  href="/"
                  className="hover:underline text-blue-500 hover:text-blue-700"
                >
                  Return to the homepage
                </Link>
                <div className="relative">
                  <label htmlFor="zipCode" className="font-bold text-gray-900">
                    CEP
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={zipCode}
                    onChange={handleCepChange}
                    placeholder="Insira o CEP"
                    className="form-input mt-1 block w-full py-3 px-4 rounded-lg border-2 border-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="street" className="font-bold text-gray-900">
                    Rua
                  </label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={address.street}
                    onChange={handleInputChange}
                    placeholder="Rua"
                    className="form-input mt-1 block w-full py-3 px-4 rounded-lg border-2 border-gray-300 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="number" className="font-bold text-gray-900">
                    Número
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    value={address.number}
                    onChange={handleInputChange}
                    placeholder="Número"
                    className="form-input mt-1 block w-full py-3 px-4 rounded-lg border-2 border-gray-300 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="neighborhood"
                    className="font-bold text-gray-900"
                  >
                    Bairro
                  </label>
                  <input
                    type="text"
                    id="neighborhood"
                    name="neighborhood"
                    value={address.neighborhood}
                    onChange={handleInputChange}
                    placeholder="Bairro"
                    className="form-input mt-1 block w-full py-3 px-4 rounded-lg border-2 border-gray-300 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <button
                  type="button"
                  onClick={handleSaveButtonClick}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-800"
                >
                  Save Address
                </button>
              </div>
              <span className="text-red-500">{error}</span>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddressForm;
