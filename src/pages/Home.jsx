import React from "react";
import productos from "../DB/productos";
import ProductItem from "../componentes/productItem";

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.banner}>
        <h1 style={styles.bannerText}>Bienvenido al Market</h1>
      </div>
      <div style={styles.productList}>
        <div>
          {productos.map((producto, index) => (
            <ProductItem
              key={index}
              nombre={producto.nombre}
              precio={producto.precio}
              stock={producto.stock}
              id={producto.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#263238", // Fondo oscuro para contraste
    minHeight: "100vh", // Para que el fondo cubra toda la altura de la pantalla
    color: "#FFFFFF", // Color del texto en blanco para contraste
  },
  banner: {
    backgroundColor: "#E0F7FA", // Celeste claro
    padding: "30px",
    borderRadius: "15px", // Bordes redondeados
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Sombra
    marginBottom: "30px",
  },
  bannerText: {
    color: "#00796B", // Verde oscuro
    textAlign: "center",
    fontSize: "24px",
  },
  productList: {
    marginTop: "20px",
  },
  productListTitle: {
    fontSize: "20px",
    color: "#80CBC4", // Verde suave, más claro para contraste
    marginBottom: "10px",
  },
  productListItems: {
    listStyleType: "none",
    padding: "0",
  },
  productItem: {
    padding: "10px",
    backgroundColor: "#F1F8E9", // Verde muy claro
    borderRadius: "10px",
    marginBottom: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    color: "#263238", // Texto en color oscuro para contraste
  },
};

export default Home;
