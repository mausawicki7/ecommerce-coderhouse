const products = [
  {
    id: 1,
    name: "Producto 1",
    category: "categoria1",
    price: 100,
    stock: 10,
    image: "/src/assets/img/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ",
  },
  { id: 2,
    name: "Producto 2",
    category: "categoria2",
    price: 200,
    stock: 20,
    image: "/src/assets/img/thumbnail.png",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur"
  },
  { id: 3,
    name: "Producto 3",
    category: "categoria3",
    price: 300,
    stock: 30,
    image: "/src/assets/img/thumbnail.png",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
  },
  { id: 4,
    name: "Producto 4",
    category: "categoria1",
    price: 400,
    stock: 40,
    image: "/src/assets/img/thumbnail.png",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
  },
  { id: 5,
    name: "Producto 5",
    category: "categoria2",
    price: 500,
    stock: 50,
    image: "/src/assets/img/thumbnail.png",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
  },
  { id: 6,
    name: "Producto 6",
    category: "categoria3",
    price: 600,
    stock: 60,
    image: "/src/assets/img/thumbnail.png",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
  },
  { id: 7,
    name: "Producto 7",
    category: "categoria1",
    price: 700,
    stock: 70,
    image: "/src/assets/img/thumbnail.png",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
  },
  { id: 8,
    name: "Producto 8",
    category: "categoria2",
    price: 800,
    stock: 80,
    image: "/src/assets/img/thumbnail.png",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
  }
];

export const getFetch = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const query = id ? products.find((item) => item.id == id) : products;
      resolve(query);
    }, 1000);
  });
};
