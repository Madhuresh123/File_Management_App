const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import EditProfile from "./screens/EditProfile";
import Trash from "./screens/Trash";
import DashboardSlide from "./screens/DashboardSlide";
import Documents from "./screens/Documents";
import DarkDashboardSlide from "./screens/DarkDashboardSlide";
import DarkDashboard from "./screens/DarkDashboard";
import Dashboard from "./screens/Dashboard";
import SignPage from "./screens/SignPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="SignPage"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Trash"
              component={Trash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardSlide"
              component={DashboardSlide}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Documents"
              component={Documents}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DarkDashboardSlide"
              component={DarkDashboardSlide}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DarkDashboard"
              component={DarkDashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignPage"
              component={SignPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
