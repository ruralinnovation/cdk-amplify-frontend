import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ContextProvider from './contexts/ContextProvider';
import ApiContextProvider from './contexts/ApiContextProvider';
import MapContainer from './components/Map';

function App() {
  return (
    <ContextProvider>
      <ApiContextProvider>
        <CssBaseline />
        <MapContainer />
      </ApiContextProvider>
    </ContextProvider>
  );
}

export default App;
