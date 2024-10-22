import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
      {/* This loads the tab layout from (tabs)/_layout */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false, 
        }}
      />
      <Stack.Screen name='createTask' options={{
        headerShown: false,
        headerStyle: { display: 'none' }
      }}/>
    </Stack>
  )
}

export default RootLayout;
