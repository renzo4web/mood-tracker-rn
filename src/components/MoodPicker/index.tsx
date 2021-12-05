import React, {useCallback, useState} from 'react';
import {
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

export interface MoodConfig {
	emoji: string;
	description: string;
}

const moodOptions: MoodConfig[] = [
	{emoji: '🧑‍💻', description: 'studious'},
	{emoji: '🤔', description: 'pensive'},
	{emoji: '😊', description: 'happy'},
	{emoji: '🥳', description: 'celebratory'},
	{emoji: '😤', description: 'frustrated'},
];

const MoodPicker: React.FC<{
	onSelect: (mood: MoodConfig) => void;
}> = ({onSelect}) => {
	const [emojiPicked, setEmojiPicked] = useState<MoodConfig | null>(null);

	const handlePick = useCallback((option: MoodConfig) => {
		setEmojiPicked(current =>
			current?.emoji === option.emoji ? null : option,
		);
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.question}>How are you right now?</Text>

			<View style={styles.wrapperEmoji}>
				{moodOptions.map(option => (
					<Pressable
						key={option.description}
						style={{marginHorizontal: 10}}
						onPress={() => handlePick(option)}>
						<Text
							style={[
								{fontSize: 30},
								option.emoji === emojiPicked?.emoji && styles.emojiSelected,
							]}>
							{option.emoji}
						</Text>
						{option.emoji === emojiPicked?.emoji && (
							<Text style={{fontSize: 10}}>{option.description}</Text>
						)}
					</Pressable>
				))}

				{!!emojiPicked && <Text>{emojiPicked.emoji}</Text>}
			</View>

			<TouchableOpacity
				style={styles.btnWrapper}
				onPress={() => !!emojiPicked && onSelect(emojiPicked)}>
				<Text style={styles.btnText}>Choose</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderColor: 'red',
		marginHorizontal: '5%',
	},

	question: {
		fontSize: 15,
		fontWeight: 'bold',
	},

	wrapperEmoji: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: '10%',
	},

	btnWrapper: {
		backgroundColor: 'blue',
		padding: 10,
		borderRadius: 20,
	},

	btnText: {
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 20,
	},

	emojiSelected: {
		backgroundColor: 'green',
		borderRadius: 100,
		padding: 10,
		borderWidth: 1,
		borderColor: '#000',
	},
});

export default MoodPicker;
