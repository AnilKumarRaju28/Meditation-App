import { View, Text, ImageBackground, SafeAreaView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

import beachImage from '@/assets/meditation-images/beach.webp';
import CustomButton from '@/components/CustomButton';
import AppGradient from '@/components/AppGradient';

const App = () => {
    const router = useRouter();

    return (
        <View className='flex-1'>
            <ImageBackground source={beachImage} resizeMode='cover' className='flex-1'>
                <AppGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0,0,0,0.8)"]}>
                    <SafeAreaView className='flex-1 mt-12 justify-between'>
                        <View>
                            <Text className='text-center pt-2 text-white font-bold text-4xl'>Meditation</Text>
                            <Text className='text-center mt-3 text-white font-regular text-2xl'>Simplifying meditation</Text>
                        </View>
                        <View>
                            <CustomButton onPress={() => router.push("/nature-meditate")} title='Get Started' />
                        </View>
                        <StatusBar style="light" />
                    </SafeAreaView>
                </AppGradient>
            </ImageBackground>
        </View>
    );
}

export default App;
