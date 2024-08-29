import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("se registro el usuario " + email);
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h1 style={styles.title}>Registrarse</h1>
        <form onSubmit={handleRegister}>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor='email'>
              Correo Electrónico
            </label>
            <input
              type='email'
              id='email'
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor='password'>
              Contraseña
            </label>
            <input
              type='password'
              id='password'
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit' style={styles.button}>
            Ingresar
          </button>
        </form>
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
  loginBox: {
    backgroundColor: "#E0F7FA", // Fondo celeste claro
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Sombra suave
    width: "300px",
    color: "#263238", // Texto en color oscuro para contraste
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#00796B", // Verde oscuro
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#004D40", // Verde oscuro
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #B2DFDB", // Borde celeste suave
    fontSize: "14px",
    color: "#263238",
    backgroundColor: "#FFFFFF", // Fondo blanco para el input
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#00796B", // Verde oscuro
    color: "#FFFFFF",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Register;
