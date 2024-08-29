import React from "react";
import productos from "../DB/productos";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  let producto = productos[id];
  return (
    <div style={styles.container}>
      <div style={styles.productDetail}>
        <h1 style={styles.productTitle}>{producto.nombre}</h1>
        <div style={styles.productInfo}>
          <div style={styles.productRow}>
            <span style={styles.label}>Precio:</span>
            <span style={styles.value}>${producto.precio} /KG</span>
          </div>
          <div style={styles.productRow}>
            <span style={styles.label}>Stock:</span>
            <span style={styles.value}>{producto.stock}</span>
          </div>
          <div style={styles.productRow}>
            <span style={styles.label}>Código:</span>
            <span style={styles.value}>{producto.id}</span>
          </div>
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
    minHeight: "100vh", // Altura mínima para cubrir toda la pantalla
    display: "flex",
    justifyContent: "center", // Centra el contenido horizontalmente
    alignItems: "center", // Centra el contenido verticalmente
  },
  productDetail: {
    backgroundColor: "#E0F7FA", // Fondo celeste claro
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Sombra suave
    width: "400px",
    color: "#263238", // Texto en color oscuro para contraste
  },
  productTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#00796B", // Verde oscuro
    textAlign: "center",
  },
  productInfo: {
    fontSize: "16px",
  },
  productRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  label: {
    fontWeight: "bold",
    color: "#004D40", // Verde oscuro
  },
  value: {
    color: "#00796B", // Verde más claro
  },
};

export default ProductDetails;
