import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';

import Navigation from './src/navigation/navigation'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}

