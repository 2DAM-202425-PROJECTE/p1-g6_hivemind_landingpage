import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Checkout() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const product = queryParams.get('product');
  const price = queryParams.get('price');
  const description = queryParams.get('description');
  const features = queryParams.get('features')?.split(',');

  // Generate a random activation code in the format xxxx-xxxx-xxxx
  const generateActivationCode = () => {
    const segment = () => Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${segment()}-${segment()}-${segment()}`;
  };

  const activationCode = generateActivationCode();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
      <div className="hero-background" />
      <div className="w-full max-w-lg bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl">Checkout</h1>
        <p className="mt-6 text-xl text-center">
          Has comprat el producte: <strong>{product}</strong> per <strong>{price}€</strong>.
        </p>
        <p className="mt-4 text-lg text-center">
          <strong>Descripció:</strong> {description}
        </p>
        <ul className="mt-4 text-lg text-center">
          <strong>Característiques:</strong>
          {features?.map((feature, index) => (
            <li key={index}>✔️ {feature}</li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <p className="text-lg">El teu codi d'activació és:</p>
          <p className="text-2xl font-bold">{activationCode}</p>
          <p className="mt-4 text-sm">Guarda aquest codi per activar el teu producte en una data futura.</p>
          <p className="mt-4 text-sm">Registrat per a activar el producte i després ves al teu perfil i activa'l.</p>
        </div>
      </div>
    </div>
  );
}