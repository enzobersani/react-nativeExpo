import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import PageInit from '../pages/PageInit';
import PageFinanceControl from '../pages/PageFinanceControl';
import PageFinanceControlMain from '../pages/PageFinanceControlMain';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="PageInit"
                component={PageInit}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="PageFinanceControl"
                component={PageFinanceControl}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="PageFinanceControlMain"
                component={PageFinanceControlMain}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}