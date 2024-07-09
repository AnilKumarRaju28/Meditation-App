import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const AppGradient = ({ children, colors }: { children: any, colors: string[] }) => {
    return (
        <LinearGradient colors={colors} className='flex-1'>
            {children}
        </LinearGradient>
    );
}

export default AppGradient;
