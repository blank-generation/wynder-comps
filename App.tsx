import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import TabOneScreen from './screens/TabOneScreen';
import TopNav from './navigation/TopNav';
import BottomNav from './navigation/BottomNav';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    version: 3,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FF595D',
      primaryContainer: '#FFEDEB',
      secondary: '#FBCECF',
      tertiary: '#1B2800'
    },
  };


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
        <TopNav/>
          <TabOneScreen />
          {/* <Navigation colorScheme="light" /> */}

          {/* <StatusBar /> */}
        <BottomNav/>
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}
