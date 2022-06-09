import {LogBox} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {AppNavigation} from "./Scr/Navigation/AppNavigation";
import {ConnectFirebase} from "./Scr/Utils"
import Toast from "react-native-toast-message"

LogBox.ignoreAllLogs();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <AppNavigation />

      </NavigationContainer>

      <Toast />
    </>
  );

}

 