# Galactic Worldd

Galactic Worldd es una tienda de remeras inspirada en el cosmos.

Galactic Worldd is a cosmic-themed e-commerce store built with **React**, **Vite** and **Tailwind CSS**.

## Setup

1. Instala las dependencias / Install dependencies

   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo / Start the dev server

   ```bash
   npm run dev
   ```

3. Copia el archivo `.env.example` a `.env` y completa los valores de tu
   proyecto de Firebase / Copy `.env.example` to `.env` and fill it with your
   Firebase configuration values.

## Build

Para generar los archivos de producción ejecuta / Build the project with:

```bash
npm run build
```

Puedes revisar la compilación localmente con / Preview locally with:

```bash
npm run preview
```

## Tecnologías principales / Main technologies

- React
- Vite
- Tailwind CSS

## Firebase

Este proyecto utiliza Firebase. Configura un archivo `.env` con las
siguientes variables (ver `.env.example`):

```bash
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWZQqqFG3CDm3Qi27S8nVM6lBlpZxc8LY",
  authDomain: "galactic-worldd.firebaseapp.com",
  projectId: "galactic-worldd",
  storageBucket: "galactic-worldd.firebasestorage.app",
  messagingSenderId: "235508839573",
  appId: "1:235508839573:web:7c47eae58bb25e9858979c",
  measurementId: "G-8C0ZBY3GH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```
