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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'colorTexto': '#164e63',
        'colorNavbar': '#ffffff',
        'colorBotonAceptar': '#51ff00',
        'colorBotonSecundario': '#196363',
        'colorBotonEliminar': '#e1103d',
        'colorBotonActualizar': '#0051ff',
        'colorForm': '#164e63',
        'colorFondo': '#ffffff',
        
        'alturaNavbar': '12',


      },
    },
  },
  plugins: [],
};
export default config;
