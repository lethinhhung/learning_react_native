import { SplashScreen, Stack } from 'expo-router';

import './globals.css';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'Rukbik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
        'Rukbik-ExtraBold': require('../assets/fonts/Rubik-ExtraBold.ttf'),
        'Rukbik-Light': require('../assets/fonts/Rubik-Light.ttf'),
        'Rukbik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
        'Rukbik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
        'Rukbik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return <Stack />;
}
