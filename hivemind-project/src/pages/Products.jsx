import { Link } from 'react-router-dom';

export default function ProductsContent() {
  return (
      <div className="relative flex flex-col items-start justify-start text-white hivemind-hero-section mt-10">
        <div className="hero-background" />
        <div className="w-full h-full relative z-10 pt-10 text-left backdrop-blur-2xl rounded-3xl p-5">
          <Link to="/">
            <span>&lt; back</span>
          </Link>
          <h1 className="text-4xl">Products</h1>
          <p className="mt-6 text-xl text-center w-full">
            Els productes desenvolupats per HiveMind, Inc. que et permetran millorar la teva experiència en el món de la tecnologia.
          </p>
        </div>
      </div>
  )
}