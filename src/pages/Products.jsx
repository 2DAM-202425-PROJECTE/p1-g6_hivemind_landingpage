import { Link } from 'react-router-dom';

export default function ProductsContent() {
  return (
    <div className="relative flex flex-col items-start justify-start text-white hivemind-hero-section mt-10">
      <div className="hero-background" />
      <div className="w-full h-full relative pt-10 text-left backdrop-blur-2xl rounded-3xl p-5">
        <Link to="/" />
        <h1 className="text-4xl">Productes</h1>
        <p className="mt-6 text-xl text-center w-full">
            Benvingut a la nostra pàgina de productes! Aquí trobaràs una àmplia gamma de subscripcions i crèdits per personalitzar el teu perfil. Explora les nostres opcions i tria la que millor s'adapti a les teves necessitats.
        </p>

        {/* Explanation About Tiers */}
        <div className="mt-10 text-center">
          <p className="text-lg">
            Aquestes son els tiers que pots escullir per accedir a funcionalitats exclusives i personalitzar el teu perfil.
          </p>
        </div>

        {/* Premium Tiers */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-between w-full gap-5">
          <div className="tier-card p-5 rounded-xl bg-gray-800 text-center w-full lg:w-1/3 flex flex-col items-center justify-between h-96">
            <h2 className="text-2xl font-bold">Basic</h2>
            <div>
              <p className="mt-2">✔️ Accés a funcionalitats bàsiques.</p>
              <p>✔️ Inclou 1 icona de perfil exclusiva com a recompensa inicial.</p>
              <p>✔️ Aporta 100 crèdits mensuals per personalitzar.</p>
            </div>
            <p className="mt-4 font-bold text-xl">Gratuït</p>
            <Link to="/Register">
              <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-white">Registrat</button>
            </Link>
          </div>
          <div className="tier-card p-5 rounded-xl bg-gray-800 text-center w-full lg:w-1/3 flex flex-col items-center justify-between h-96">
            <h2 className="text-2xl font-bold">Standard Premium</h2>
            <div>
              <p className="mt-2">✔️ Funcions avançades per una experiència millorada.</p>
              <p>✔️ Inclou 3 icones exclusives com a recompensa inicial.</p>
              <p>✔️ 500 crèdits mensuals, ideals per comprar fons o animacions.</p>
            </div>
            <p className="mt-4 font-bold text-xl">10€/mes</p>
            <Link to="/purchase?product=standard&price=10&description=Funcions avançades per una experiència millorada&features=Inclou 3 icones exclusives com a recompensa inicial, 500 crèdits mensuals, ideals per comprar fons o animacions">
              <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-white">Compra ara</button>
            </Link>
          </div>
          <div className="tier-card p-5 rounded-xl bg-gray-800 text-center w-full lg:w-1/3 flex flex-col items-center justify-between h-96">
            <h2 className="text-2xl font-bold">Ultimate Premium</h2>
            <div>
              <p className="mt-2">✔️ Accés total a totes les funcions, icones i crèdits bonus.</p>
              <p>✔️ Inclou 10 icones exclusives com a recompensa inicial.</p>
              <p>✔️ 1000 crèdits mensuals + bonificacions per usuaris fidels.</p>
            </div>
            <p className="mt-4 font-bold text-xl">20€/mes</p>
            <Link to="/purchase?product=ultimate&price=20&description=Accés total a totes les funcions, icones i crèdits bonus&features=Inclou 10 icones exclusives com a recompensa inicial, 1000 crèdits mensuals + bonificacions per usuaris fidels">
              <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-white">Compra ara</button>
            </Link>
          </div>
        </div>

        {/* Buy Credits */}
        <div className="mt-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold">Compra Crèdits</h2>
          <p className="mt-2">
            Els crèdits són la moneda interna de HiveMind per personalitzar el teu perfil amb icones, fons i animacions únics.
          </p>
          <p className="mt-2">
            Pots guanyar crèdits mensualment amb subscripcions o comprar-ne directament!
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-5">
            <Link to="/purchase?product=credits100&price=2&description=100 Crèdits&features=Compra de crèdits per personalitzar el teu perfil">
              <button className="px-4 py-2 bg-green-600 rounded-lg text-white">100 Crèdits - 2€</button>
            </Link>
            <Link to="/purchase?product=credits500&price=8&description=500 Crèdits&features=Compra de crèdits per personalitzar el teu perfil">
              <button className="px-4 py-2 bg-green-600 rounded-lg text-white">500 Crèdits - 8€</button>
            </Link>
            <Link to="/purchase?product=credits1000&price=15&description=1000 Crèdits&features=Compra de crèdits per personalitzar el teu perfil">
              <button className="px-4 py-2 bg-green-600 rounded-lg text-white">1000 Crèdits - 15€</button>
            </Link>
            <Link to="/purchase?product=credits5000&price=60&description=5000 Crèdits&features=Compra de crèdits per personalitzar el teu perfil">
              <button className="px-4 py-2 bg-green-600 rounded-lg text-white">5000 Crèdits - 60€</button>
            </Link>
          </div>
        </div>

        {/* Cosmetics Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center">Cosmètics</h2>
          <p className="mt-2 text-center">
            Descobreix les opcions per personalitzar el teu perfil: icones, fons i animacions únics!
          </p>

          {/* Profile Pictures */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center">Icons de Perfil</h2>
            <p className="mt-2 text-center">
              Personalitza el teu perfil amb icones úniques que reflecteixen la teva personalitat.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
              <div className="cosmetic-card p-4 bg-gray-800 rounded-lg text-center">
                🎭 **Icona Joker** <br/>
                <em>Per a usuaris amb esperit juganer.</em> <br/>
                <strong>200 Crèdits</strong>
              </div>
              <div className="cosmetic-card p-4 bg-gray-800 rounded-lg text-center">
                🐉 **Icona Drac** <br/>
                <em>Simbolitza força i poder.</em> <br/>
                <strong>300 Crèdits</strong>
              </div>
              <div className="cosmetic-card p-4 bg-gray-800 rounded-lg text-center">
                🌟 **Icona Estrella** <br/>
                <em>Brilla amb aquest disseny elegant.</em> <br/>
                <strong>150 Crèdits</strong>
              </div>
              <div className="cosmetic-card p-4 bg-gray-800 rounded-lg text-center">
                👑 **Icona Corona** <br/>
                <em>Per aquells que es consideren reis o reines.</em> <br/>
                <strong>250 Crèdits</strong>
              </div>
            </div>
          </div>

          {/* Backgrounds */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center">Fons</h2>
            <p className="mt-2 text-center">
              Tria entre una varietat de fons per donar un toc especial al teu perfil.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
              <div className="cosmetic-card p-4 bg-gray-800 rounded-lg text-center">
                🌌 **Galàxia** <br/>
                <em>Explora l'infinit del cosmos.</em> <br/>
                <strong>500 Crèdits</strong>
              </div>
              <div className="cosmetic-card p-4 bg-gray-800 rounded-lg text-center">
                🏙️ **Ciutat Nocturna** <br/>
                <em>Sent l'energia d'una ciutat vibrant.</em> <br/>
                <strong>400 Crèdits</strong>
              </div>
              <div className="cosmetic-card p-4 bg-gray-800 rounded-lg text-center">
                🏔️ **Muntanya** <br/>
                <em>Ideal per a amants de la natura.</em> <br/>
                <strong>300 Crèdits</strong>
              </div>
              <div className="cosmetic-card p-4 bg-gray-800 rounded-lg text-center">
                🌺 **Floració** <br/>
                <em>Estil floral per a perfils artístics.</em> <br/>
                <strong>350 Crèdits</strong>
              </div>
            </div>
          </div>

          {/* Animations */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center">Animacions</h2>
            <p className="mt-2 text-center">
              Afegeix animacions al teu perfil per fer-lo més dinàmic i atractiu.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
              <div className="cosmetic-card p-4 bg-gray-800 rounded-lg text-center">
                ✨ **Brillantor** <br/>
                <em>Un efecte brillant subtil.</em> <br/>
                <strong>600 Crèdits</strong>
              </div>
              <div className="cosmetic-card p-4 bg-gray-800 rounded-lg text-center">
                💨 **Vent** <br/>
                <em>Moviments suaus i dinàmics.</em> <br/>
                <strong>700 Crèdits</strong>
              </div>
              <div className="cosmetic-card p-4 bg-gray-800 rounded-lg text-center">
                🔥 **Foc** <br/>
                <em>Afegir intensitat amb flames animades.</em> <br/>
                <strong>800 Crèdits</strong>
              </div>
              <div className="cosmetic-card p-4 bg-gray-800 rounded-lg text-center">
                🌊 **Onada** <br/>
                <em>Efecte calmant d'aigua en moviment.</em> <br/>
                <strong>750 Crèdits</strong>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center">Emojis Personalitzats</h2>
            <p className="mt-2 text-center">
              Afegeix emojis únics al teu perfil per mostrar la teva personalitat.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
              <div className="cosmetic-card p-4 bg-gray-800 rounded-lg text-center">
                😎 **Emoji Cool** <br/>
                <em>Per a una aparença relaxada i confiada.</em> <br/>
                <strong>100 Crèdits</strong>
              </div>
              <div className="cosmetic-card p-4 bg-gray-800 rounded-lg text-center">
                😂 **Emoji Rient** <br/>
                <em>Per mostrar el teu sentit de l'humor.</em> <br/>
                <strong>80 Crèdits</strong>
              </div>
              <div className="cosmetic-card p-4 bg-gray-800 rounded-lg text-center">
                ❤️ **Emoji Cor** <br/>
                <em>Per a mostrar afecte o estima.</em> <br/>
                <strong>90 Crèdits</strong>
              </div>
              <div className="cosmetic-card p-4 bg-gray-800 rounded-lg text-center">
                🌟 **Emoji Estrella** <br/>
                <em>Brilla amb estil.</em> <br/>
                <strong>110 Crèdits</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}