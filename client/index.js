import React from 'react';
import { createRoot } from 'react-dom/client';
import { Form } from './components';

const root = createRoot(document.getElementById('index'));

root.render(<Form />);
