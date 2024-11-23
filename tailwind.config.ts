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
        'colorTextoNavbar': 'rgb(78, 81, 142)',
        'colorTextoTitulo1': 'rgb(186, 32, 153)',
        'colorTextoTitulo2': 'rgb(36, 28, 34)',
        'colorTextoBarraBaja': 'white',
        
        // Componentes
        'colorNavbar': '#ffffff',
        'colorFormularioLogin': 'rgb(98, 102, 167)',
        'colorSidebar': 'rgb(146, 153, 255)',
        'colorBarraBaja': 'rgb(95, 103, 210)',
        'hoverColorSidebar': 'rgb(134, 141, 236)',
        'colorBarraSuperiorTablas': 'rgb(122, 143, 253)',
        'colorCajaLogo': 'rgb(73, 61, 163)',

        // Botones
        'colorBotonPrincipal':'rgb(114, 122, 240)',
        'hoverColorBotonPrincipal': 'rgb(95, 103, 210)',
        'colorBotonAceptar': 'rgb(1, 224, 1)',
        'hoverColorBotonAceptar': '#07a53c',
        'colorBotonSecundario': '#196363',
        'colorBotonEliminar': '#e1103d',
        'colorBotonActualizar': '#0051ff',


        
        'colorFondo': '#ffffff',
        'colorCajaBloqueda': '#b4b0b0',
        'bgBloqueado': '#a4a1a1',
        
        


      },
    },
  },
  plugins: [],
};
export default config;
