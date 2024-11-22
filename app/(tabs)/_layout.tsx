import { Image, Text, View } from 'react-native'
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants';
// Import your global CSS file
import "../global.css";

const TabIcon = ({ icon, color, name, focused }:any) => {
  return (
    <View>
      <Image 
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-5 h-5"
      />
      
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="home"
        options={{
          title: 'Home',
          headerShown: false, 
          tabBarIcon: ({color, focused}) => (
            <TabIcon 
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          )
        }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
