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
        'colorTextoNavbar': 'rgb(96, 63, 162)',
        'colorTextoTitulo1': 'rgb(95, 103, 210)',
        'colorTextoTitulo2': 'rgb(36, 28, 34)',
        'colorTextoBarraAlta': 'white',
        'colorTextoBarraBaja': 'white',
        'colorTextoBoton': 'white',
        'colorTextoCaja': 'white',
        'colorTextoAceptada': 'rgb(0, 255, 0)',
        'colorTextoRetornada': 'rgb(217, 8, 214)',
        'colorTextoContraOferta': '#ff5b08',
        'colorTextoBotonVer': 'black',

        
        // Componentes
        'colorNavbar': '#ffffff',
        'colorFormularioLogin': 'rgb(75, 50, 126)',
        'colorSidebar': 'rgb(138, 106, 201)',
        'colorBarraBaja': 'rgb(138, 106, 201)',
        'hoverColorSidebar': 'rgb(147, 113, 215)',
        'colorBarraSuperiorTablas': 'rgb(138, 106, 201)',
        'colorCajaLogo': 'rgb(99, 66, 164)',
        'colorHoverLista': 'rgb(208, 216, 255)',

        // Botones
        'colorBotonPrincipal':'rgb(138, 106, 201)',
        'hoverColorBotonPrincipal': 'rgb(96, 63, 162)',
        'colorBotonAceptar': 'rgb(1, 224, 1)',
        'hoverColorBotonAceptar': '#07a53c',
        'colorBotonSecundario': '#196363',
        'colorBotonEliminar': '#e1103d',
        'colorBotonActualizar': '#0051ff',
        'colorBotonVer': 'rgb(237 233 254)',


        
        'colorFondo': '#ffffff',
        'colorCajaBloqueda': '#b4b0b0',
        'bgBloqueado': '#a4a1a1',
        
       


      },
        fontSize:{
          'tamañoLetra': '0.860rem',
          'tamañoLetraChica': '12px',
          
        }
    },
    
  },
  
  plugins: [],
};
export default config;
