import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
   <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.primary }}>
    <Tabs.Screen name="nature-meditate" options={{ 
        tabBarLabel: 'Meditate',
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="flower-tulip"
              color={color}
              size={size} // Use the size parameter here
            />
        ),
    }}/>
    <Tabs.Screen name="affirmations" options={{ 
        tabBarLabel: 'Affirmations',
        tabBarIcon: ({ color, size }) => (
            <Entypo
              name="open-book" // Correct icon name
              color={color}
              size={size} // Use the size parameter here
            />
        ),
    }}/>
   </Tabs>
  );
}

export default TabsLayout;
