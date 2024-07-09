import TimerProvider from '@/context/timerContext';
import { useFonts } from 'expo-font'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react';
import { Modal } from 'react-native';


// This will prevent the splash screen from auto hiding until loading all the font assets...
SplashScreen.preventAutoHideAsync();

function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        'Roboto': require('../assets/fonts/RobotoMono-Regular.ttf')
        
    });

    useEffect(()=>{
        if(error) throw error;
        if(fontsLoaded) SplashScreen.hideAsync();
    },[fontsLoaded, error])

    if(!fontsLoaded) return null;
    if(!fontsLoaded && !error) return null;
 

    return (
        <TimerProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}} />
                <Stack.Screen name="index" options={{headerShown: false}} />
                <Stack.Screen name="meditate/[id]" options={{headerShown: false}} />
                <Stack.Screen name="(modal)/adjust-meditation-duration"
                options={{headerShown: false, presentation: 'modal'}} />
            </Stack>
        </TimerProvider>
    )
}

export default RootLayout