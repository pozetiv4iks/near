import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Author } from "./Author";
import { Registr } from "./Registr";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return 
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Authorization" component={Author} option={{headerShown: false}}/>
            <Stack.Screen name="Registration" component={Registr} option={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
}
