import React, {useCallback, useState} from 'react';
import {Text, View} from 'react-native';
import MoodPicker, {MoodConfig} from '../../components/MoodPicker';

export interface MoodOptionWithTimestamp extends MoodConfig {
	timestamp: number;
}

const HomeScreen = () => {
	const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

	const selectedMood = useCallback((mood: MoodConfig) => {
		setMoodList(current => [{...mood, timestamp: Date.now()}, ...current]);
	}, []);

	return (
		<View style={{flex: 1}}>
			<Text>Home</Text>

			<MoodPicker onSelect={selectedMood} />

			{moodList.length > 0 &&
				moodList.map(option => (
					<View key={option.timestamp.toString()}>
						<Text>
							{option.emoji}
							{new Date(option.timestamp).toString()}
						</Text>
					</View>
				))}
		</View>
	);
};

export default HomeScreen;
