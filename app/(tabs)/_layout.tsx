import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import CarIcon from '@/assets/icons/carIcon';
import TabLoadingStationIcon from '@/assets/icons/tabloadingStationIcon';
import TabPieChartIcon from '@/assets/icons/tabPieChartIcon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].text,
        headerShown: true,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="Map"
        options={{
          title: 'Map',
          tabBarIcon: () => <TabLoadingStationIcon
           size={28} color={Colors[colorScheme ?? 'light'].text } />,
          tabBarIconStyle: {
            marginTop: 15,
            marginBottom: 5,
            fontSize: 12,
            marginLeft: 10,
         
          },
        }}
       
      />
      <Tabs.Screen
        name="Analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: () => <TabPieChartIcon size={28} color={Colors[colorScheme ?? 'light'].text } />,
          tabBarIconStyle: {
            marginTop: 15,
            marginBottom: 5,
            color: "black",
            fontSize: 12,
            fontWeight: "bold",
         
          },
        }}
      />
    </Tabs>
  );
}
