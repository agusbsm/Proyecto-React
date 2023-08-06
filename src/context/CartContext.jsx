import { createContext, useState } from "react";

export const CartContext = createContext();

// El componente tiene que retornar el contexto con el metodo .provider
// Todo lo que quiera que se tenga que usar en otro lado, va en el value. Lo que recibe el value es un objeto y pueden pasarse varios.

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Método some lo que hace es iterar el arreglo, pasandole una condición. Se llama some porque puede devolver un booleano true o false dependiendo si cumple la condición o no.

  const addToCart = (producto) => {
    let verificar = cart.some((elemento) => elemento.id === producto.id);

    // Método map siempre pide retornar(return) un nuevo [] y todo lo que retorne se va agregando al [].

    if (verificar) {
      let nuevoArray = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            quantity: producto.quantity,
          };
        } else {
          return elemento;
        }
      });

      localStorage.setItem("cart", JSON.stringify(nuevoArray));
      setCart(nuevoArray);
    } else {
      localStorage.setItem("cart", JSON.stringify([...cart, producto]));
      setCart([...cart, producto]);
    }
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  // Tipica de entrevista de react, siempre es el método filter para borrar en el carrito.

  //Filter devuelve un nuevo arreglo con todos los elementos que cumplan la condicion.

  const deleteById = (id) => {
    let nuevoArray = cart.filter((elemento) => elemento.id !== id);
    localStorage.setItem("cart", JSON.stringify(nuevoArray));
    setCart(nuevoArray);
  };

  // Función para calcular y retornar el total del de cantidades.

  const totalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  // Función para calcular y retornar el total de precios.

  const totalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.precio * elemento.quantity;
    }, 0);
    return total;
  };

  // Dado un id, saber que cantidad hay dentro del carrito hay de un producto o varios.

  let quantityById = (id) => {
    let producto = cart.find((elemento) => elemento.id === +id);
    return producto?.quantity;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    totalPrice,
    totalQuantity,
    quantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
