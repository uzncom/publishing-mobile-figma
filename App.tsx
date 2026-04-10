import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PubHome, MainHome } from './src/components/screens';

const Stack = createNativeStackNavigator();

const App = () => {
    // Set global default font for Text/TextInput so Regular weight applies app-wide
    const TextAny = Text as any;
    TextAny.defaultProps = TextAny.defaultProps || {};

    const TextInputAny = TextInput as any;
    TextInputAny.defaultProps = TextInputAny.defaultProps || {};

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='PubHome'>
               {/* 퍼블리싱 네비게이션 */}
               <Stack.Screen name='PubHome' component={PubHome}/>
                {/* 메인화면 */}
                <Stack.Screen name='MainHome' component={MainHome}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
