export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    slices?: {
        quantity: number;
        price: number;
    }[];
};

export interface ProductsByCategory {
    [category: string]: Product[];
}

export const productsByCategory: ProductsByCategory = {
    "🍕 Pizzas": [
        {
            id: 1, name: "Pizza Calabresa", price: 35, quantity: 1, image: "/pizzas/calabresa.jpeg",
            slices: [
                {
                    quantity: 6,
                    price: 35
                },
                {
                    quantity: 8,
                    price: 40
                },
                {
                    quantity: 12,
                    price: 55
                },
                {
                    quantity: 16,
                    price: 60
                },]
        },
        {
            id: 2, name: "Pizza Frango Catupiry", price: 35, quantity: 1, image: "/pizzas/frangoCatupiry.jpg",
            slices: [
                {
                    quantity: 6,
                    price: 35
                },
                {
                    quantity: 8,
                    price: 40
                },
                {
                    quantity: 12,
                    price: 55
                },
                {
                    quantity: 16,
                    price: 60
                },]
        },
        {
            id: 3, name: "Pizza Moda da Casa", price: 35, quantity: 1, image: "/pizzas/modaDaCasa.jpg",
            slices: [
                {
                    quantity: 6,
                    price: 35
                },
                {
                    quantity: 8,
                    price: 40
                },
                {
                    quantity: 12,
                    price: 55
                },
                {
                    quantity: 16,
                    price: 60
                },]
        },
        {
            id: 4, name: "Pizza Feijoada", price: 35, quantity: 1, image: "/pizzas/feijoada.jpg",
            slices: [
                {
                    quantity: 6,
                    price: 35
                },
                {
                    quantity: 8,
                    price: 40
                },
                {
                    quantity: 12,
                    price: 55
                },
                {
                    quantity: 16,
                    price: 60
                },]
        },
        {
            id: 5, name: "Pizza 4 Queijos", price: 35, quantity: 1, image: "/pizzas/quatroQueijos.jpg",
            slices: [
                {
                    quantity: 6,
                    price: 35
                },
                {
                    quantity: 8,
                    price: 40
                },
                {
                    quantity: 12,
                    price: 55
                },
                {
                    quantity: 16,
                    price: 60
                },]
        },
        {
            id: 6, name: "Pizza Mussarela", price: 35, quantity: 1, image: "/pizzas/mussarela.jpg",
            slices: [
                {
                    quantity: 6,
                    price: 35
                },
                {
                    quantity: 8,
                    price: 40
                },
                {
                    quantity: 12,
                    price: 55
                },
                {
                    quantity: 16,
                    price: 60
                },]
        },
    ],
    "🍕 Pizzas Doces": [
        {
            id: 1, name: "Pizza de Banana", price: 12.0, quantity: 1, image: "/pizzasDoces/banana.jpg", slices: [
                {
                    quantity: 6,
                    price: 35
                },
                {
                    quantity: 8,
                    price: 40
                },
                {
                    quantity: 12,
                    price: 55
                },
                {
                    quantity: 16,
                    price: 60
                },]
        },
        {
            id: 2, name: "Pizza Chocolate ao Leite", price: 18.0, quantity: 1, image: "/pizzasDoces/chocolateAoLeite.jpg", slices: [
                {
                    quantity: 6,
                    price: 35
                },
                {
                    quantity: 8,
                    price: 40
                },
                {
                    quantity: 12,
                    price: 55
                },
                {
                    quantity: 16,
                    price: 60
                },]
        },
        {
            id: 3, name: "Pizza Chocobana", price: 12.0, quantity: 1, image: "/pizzasDoces/choconana.jpg", slices: [
                {
                    quantity: 6,
                    price: 35
                },
                {
                    quantity: 8,
                    price: 40
                },
                {
                    quantity: 12,
                    price: 55
                },
                {
                    quantity: 16,
                    price: 60
                },]
        },
        {
            id: 4, name: "Pizza Dois Amores", price: 18.0, quantity: 1, image: "/pizzasDoces/doisAmores.jpg", slices: [
                {
                    quantity: 6,
                    price: 35
                },
                {
                    quantity: 8,
                    price: 40
                },
                {
                    quantity: 12,
                    price: 55
                },
                {
                    quantity: 16,
                    price: 60
                },]
        },
        {
            id: 5, name: "Pizza Prestigio", price: 12.0, quantity: 1, image: "/pizzasDoces/prestigio.png", slices: [
                {
                    quantity: 6,
                    price: 35
                },
                {
                    quantity: 8,
                    price: 40
                },
                {
                    quantity: 12,
                    price: 55
                },
                {
                    quantity: 16,
                    price: 60
                },]
        },
        {
            id: 6, name: "Pizza Romeu e Julieta", price: 18.0, quantity: 1, image: "/pizzasDoces/romeuEJulieta.jpg", slices: [
                {
                    quantity: 6,
                    price: 35
                },
                {
                    quantity: 8,
                    price: 40
                },
                {
                    quantity: 12,
                    price: 55
                },
                {
                    quantity: 16,
                    price: 60
                },]
        },
    ],
    "🍺 Bebidas": [
        { id: 1, name: "Coca Cola 1l", price: 3.89, quantity: 1, image: "" },
        { id: 2, name: "Guaraná Antática 1l", price: 18.0, quantity: 1, image: "" },
        { id: 3, name: "Fanta Laranja 1l", price: 12.0, quantity: 1, image: "" },
        { id: 4, name: "Kuat 1l", price: 18.0, quantity: 1, image: "" },
        { id: 5, name: "Sprite Fresh", price: 12.0, quantity: 1, image: "" },
        { id: 6, name: "Fanta Uva 1l", price: 18.0, quantity: 1, image: "" },
    ],
    "🍨 Sobremesas": [
    ],
};
