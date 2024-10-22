import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const TabsLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "gray",
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: 'black',
          },
          headerShown: false, // Hide the header
          tabBarShowLabel: false, // Hide the tab labels
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome size={28} name='home' color={color} />,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="task"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome size={28} name='list' color={color} />,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome size={28} name='user' color={color} />,
            headerShown: false,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

export default TabsLayout;
