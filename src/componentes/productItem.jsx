import React from "react";

function ProductItem({ nombre, precio, stock, id }) {
  return (
    <div style={styles.productItem}>
      <a href={`/productos/${id}`}>
        <div style={styles.productInfo}>
          <div style={styles.productTitle}>{nombre}</div>
          <div style={styles.productPrice}>${precio} /kg</div>
        </div>
        <div style={styles.productStock}>Stock: {stock}</div>
      </a>
    </div>
  );
}

const styles = {
  productItem: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#E0F7FA", // Fondo celeste claro
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Sombra suave
    borderLeft: "5px solid #00796B", // Borde izquierdo para destacar
  },
  productInfo: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  productTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#00796B", // Verde oscuro
  },
  productPrice: {
    fontSize: "16px",
    color: "#004D40", // Verde más oscuro
  },
  productStock: {
    fontSize: "14px",
    color: "#004D40", // Verde más oscuro
  },
};

export default ProductItem;
