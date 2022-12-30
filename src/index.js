import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
      root.render(<App />);



