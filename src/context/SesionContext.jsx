import { createContext, useContext, useState } from "react";

const SesionContext = createContext(null);

export function SesionProvider({ children }) {
  const [usuarioLogueado, setUsuarioLogueado] = useState(() => {
    const guardado = localStorage.getItem("usuarioLogueado");
    return guardado ? JSON.parse(guardado) : null;
  });

  function iniciarSesion(datosUsuario) {
    setUsuarioLogueado(datosUsuario);
    localStorage.setItem("usuarioLogueado", JSON.stringify(datosUsuario));
  }

  function cerrarSesion() {
    setUsuarioLogueado(null);
    localStorage.removeItem("usuarioLogueado");
  }

  return (
    <SesionContext.Provider value={{ usuarioLogueado, iniciarSesion, cerrarSesion }}>
      {children}
    </SesionContext.Provider>
  );
}

export function useSesion() {
  const contexto = useContext(SesionContext);
  if (!contexto) {
    throw new Error("useSesion debe usarse dentro de un SesionProvider");
  }
  return contexto;
}