import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigator from './src/Navigator/BottomTabs.navigator';

const App = () => {
	return (
		<NavigationContainer>
			<BottomTabsNavigator />
		</NavigationContainer>
	);
};

export default App;
