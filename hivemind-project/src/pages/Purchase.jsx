import React from 'react';
import { Link } from 'react-router-dom';

export default function Purchase() {
  return (
    <div className="relative flex flex-col items-start justify-start text-white mt-10">
      <div className="w-full h-full relative z-10 pt-10 text-left backdrop-blur-2xl rounded-3xl p-5">
        <h1 className="text-4xl">Compra els nostres productes</h1>
        <p className="mt-6 text-xl text-center w-full">
          Descobreix les opcions que oferim per millorar la teva experiència amb HiveMind.
        </p>

        {/* Product options */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-between w-full gap-5">

          {/* Basic Product */}
          <div className="product-card p-5 rounded-xl bg-gray-800 text-center w-full lg:w-1/3 flex flex-col items-center justify-between h-96">
            <h2 className="text-2xl font-bold">Producte Bàsic</h2>
            <p className="mt-2">✔️ Funcions bàsiques per començar.</p>
            <p className="mt-4 font-bold text-xl">10€</p>
            <Link to="/product/basic">
              <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-white">
                Compra ara
              </button>
            </Link>
          </div>

          {/* Standard Product */}
          <div className="product-card p-5 rounded-xl bg-gray-800 text-center w-full lg:w-1/3 flex flex-col items-center justify-between h-96">
            <h2 className="text-2xl font-bold">Producte Estàndard</h2>
            <p className="mt-2">✔️ Funcions millorades i més crèdits.</p>
            <p className="mt-4 font-bold text-xl">20€</p>
            <Link to="/product/standard">
              <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-white">
                Compra ara
              </button>
            </Link>
          </div>

          {/* Premium Product */}
          <div className="product-card p-5 rounded-xl bg-gray-800 text-center w-full lg:w-1/3 flex flex-col items-center justify-between h-96">
            <h2 className="text-2xl font-bold">Producte Premium</h2>
            <p className="mt-2">✔️ Accés total a totes les funcions premium.</p>
            <p className="mt-4 font-bold text-xl">50€</p>
            <Link to="/product/premium">
              <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-white">
                Compra ara
              </button>
            </Link>
          </div>
        </div>

        {/* Option to buy credits */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold">Compra Crèdits</h2>
          <p className="mt-2">Afegeix crèdits al teu compte per personalitzar el teu perfil i gaudir de més avantatges!</p>
          <div className="mt-5 flex justify-center gap-5">
            <Link to="/credits/100">
              <button className="px-4 py-2 bg-green-600 rounded-lg text-white">
                100 Crèdits - 2€
              </button>
            </Link>
            <Link to="/credits/500">
              <button className="px-4 py-2 bg-green-600 rounded-lg text-white">
                500 Crèdits - 8€
              </button>
            </Link>
            <Link to="/credits/1000">
              <button className="px-4 py-2 bg-green-600 rounded-lg text-white">
                1000 Crèdits - 15€
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
