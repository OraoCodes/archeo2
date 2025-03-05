
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Safety check for import.meta to prevent errors in non-module contexts
const isDevMode = typeof import.meta !== 'undefined' && import.meta.env?.MODE === 'development';

// Get the root element and render the app
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Failed to find root element");
}
