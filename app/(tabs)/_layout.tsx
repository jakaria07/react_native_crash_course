import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router';
// Import your global CSS file
import "../global.css";

const TabsLayout = () => {
  return (
    <>
    {/* <Stack>  // "Stack" refers to a type of navigation structure that allows users to navigate between different screens in a hierarchical manner.
      <Stack.Screen name="index" options={{ headerShown:false}} />
      
    </Stack> */}
    <div>
      Hello From tabs
    </div>
    <Slot/>
    </>
  )
}

export default TabsLayout
