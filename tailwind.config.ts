import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
        // General
        'colorFondoGrande': '#ffffff',
        'colorFondoChico': '#ffffff',


        // textos
        'colorTextoNavbar': 'black',
        'colorTextoBoton': '#ffffff',
        
        // Componentes
        'colorNavbar': '#ffffff',

        // Botones
        'colorBotonPrincipal':'rgb(167 139 250)',
        'colorBotonAceptar': 'rgb(120, 105, 175)',
        'hoverColorBotonAceptar': '#07a53c',
        'colorBotonSecundario': '#196363',
        'colorBotonEliminar': '#e1103d',
        'colorBotonActualizar': '#0051ff',


        'colorForm': '#164e63',
        'colorFondo': '#ffffff',
        'colorVerdeClaro': '#03ff57',
        'colorCajaBloqueda': '#b4b0b0',
        'bgBloqueado': '#a4a1a1',
        
        


      },
    },
  },
  plugins: [],
};
export default config;
