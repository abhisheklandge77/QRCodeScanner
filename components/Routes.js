import { createAppContainer } from "react-navigation";
import Home from "./Home";
import QRCodeScannerScreen from "./QRCodeScannerScreen";
import QRCodeData from "./QRCodeData"; // <--- New Line
import { createStackNavigator } from "react-navigation-stack";
import Login from "./Login";

const mainStack = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    QRCodeScannerScreen: QRCodeScannerScreen,
    QRCodeData: QRCodeData // <--- New line
  },
  { defaultNavigationOptions: { headerShown: false } }
);

const AppContainer = createAppContainer(mainStack);

export default AppContainer;
