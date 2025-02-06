"use client";
import { useState } from "react";

const CheckoutButton = ({ planId }: { planId: string }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (planId === "Gratuito") {
      // Redirigir manualmente a la pantalla de inicio de sesión
      window.location.href = "/ingresa";
      return;
    }
    setLoading(true);
    console.log(loading) //Usando loading, mientras nos ayudamos de alternativas
    try {
      const response = await fetch(
        "https://demokraticabackend.onrender.com/api/payments/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ planId }), // Enviar el plan seleccionado
        },
      );

      if (!response.ok) {
        console.log(response);
        throw new Error("Error al procesar el pago");
      }

      const { url } = await response.json();

      // Abrir la pasarela de pago en una ventana emergente
      window.open(url, "_blank", "width=1000,height=600");
    } catch (error) {
      console.error(error);
      alert("Hubo un problema al iniciar el pago.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className={`rounded px-4 py-2 ${
        planId === "free"
          ? "bg-green-500 hover:bg-green-700"
          : "bg-blue-500 hover:bg-blue-700"
      }`}
    >
      {planId === "Gratuito" ? "Iniciar sesión" : "Suscribirse"}
    </button>
  );
};

export default CheckoutButton;
