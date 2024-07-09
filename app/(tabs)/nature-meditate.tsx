import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";
import MEDITATION_IMAGES from "@/constants/meditation-images";

import { MEDITATION_DATA, MeditationType } from "@/constants/MeditationData";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const NatureMediatate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#044d4a", "#766367"]}>
        <View className="mb-6">
          <Text className="text-gray-200 pt-16 pl-4 font-bold text-5xl text-left">
            Welcome, Anil
          </Text>
          <Text className="text-indigo-100 text-2xl pl-4 font-medium">
            Start your meditation
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => router.push(`/meditate/${item.id}`)}
                className="h-48 my-3 rounded-md overflow-hidden"
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  className="flex-1 rounded-lg justify-center"
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    className="flex-1 justify-center items-center"
                  >
                    <Text className="text-gray-100 text-3xl font-bold text-center">
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
      <StatusBar style="light" />
    </View>
  );
};

export default NatureMediatate;
