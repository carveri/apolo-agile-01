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
        // 'blues': '#1fb6ff',
        // 'purple': '#7e5bef',
        // 'pink': '#ff49db',
        // 'orange': '#ff7849',
        // 'green': '#13ce66',
        // 'yellow': '#ffc82c',
        // 'gray-dark': '#273444',
        // 'gray': '#8492a6',
        // 'gray-light': '#d3dce6',
        // 'mio': '#d742d2',
        'colorTexto': '#164e63',
        'colorNavbar': '#ffffff',
        'colorBotonAceptar': '#51ff00',
        'colorBotonSecundario': '#196363',
        'colorBotonEliminar': '#e1103d',
        'colorBotonActualizar': '#0051ff',
        'colorForm': '#164e63',
        
        'alturaNavbar': '12',


      },
    },
  },
  plugins: [],
};
export default config;
