import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Routes} from './routes';

import HistoryScreen from '../screens/History';
import HomeScreen from '../screens/Home';
import AnalyticsScreen from '../screens/Analytics';

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator: React.FC = () => {
	return (
		<BottomTabs.Navigator initialRouteName={Routes.HOME}>
			<BottomTabs.Screen name={Routes.HOME} component={HomeScreen} />
			<BottomTabs.Screen name={Routes.HISTORY} component={HistoryScreen} />
			<BottomTabs.Screen name={Routes.ANALYTICS} component={AnalyticsScreen} />
		</BottomTabs.Navigator>
	);
};

export default BottomTabsNavigator;
