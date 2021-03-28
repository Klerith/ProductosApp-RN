import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { AuthProvider } from './src/context/AuthContext';
import { ProductsProvider } from './src/context/ProductsContext';


const AppState = ({ children }: any ) => {
  return (
    <AuthProvider>
      <ProductsProvider>
       { children }
      </ProductsProvider>
    </AuthProvider>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  )
}


export default App;
