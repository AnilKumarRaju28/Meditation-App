import { View, Text, FlatList, Pressable, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

interface GuidedAffirmationsGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
  title,
  previews,
}: GuidedAffirmationsGalleryProps) => {
  return (
    <View className='my-2'>
      <View className='mb-6'>
        <Text className='text-white font-bold text-xl'>{title}</Text>
      </View>
      <View className='space-y-2'>
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className='h-36 w-32 rounded-lg mr-10 overflow-hidden'>
                  <Image
                    source={item.image}
                    resizeMode='cover'
                    className='w-full h-full'
                  />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default GuidedAffirmationsGallery;
