import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  console.log("isHome", isHome);

  return (
    <header className="bg-slate-800">
      <div className="container mx-auto px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logotipo" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shandow space-y-6">
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white font-extrabold text-lg uppercase"
              >
                Nombre o Ingredientes
              </label>
              <input
                type="text"
                id="ingredient"
                name="ingredient"
                className="bg-white p-3 w-full rounded-lg focus:outline-none"
                placeholder="Ej: Vodka, Tequila, Cafe"
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white font-extrabold text-lg uppercase"
              >
                Categoria
              </label>
              <select
                id="ingredient"
                name="ingredient"
                className="bg-white p-3 w-full rounded-lg focus:outline-none"
              >
                <option value="">-- Seleccione --</option>
              </select>
            </div>
            <input
              type="submit"
              value={"Buscar Recetas"}
              className="cursor-pointer bg-orange-800 hover:bg-orange-900 w-full rounded-lg p-2 font-extrabold uppercase text-white"
            />
          </form>
        )}
      </div>
    </header>
  );
}
