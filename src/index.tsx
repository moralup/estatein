import { createRoot } from 'react-dom/client';
import { App } from './app/app';

import './app/style/index.scss';

const container = document.getElementById('root');

if (!container) {
    throw new Error('root not found');
}

const root = createRoot(container);

root.render(<App />);
