import { StyleSheet, View } from 'react-native';
import AppNavigationContainer from "./src/navigation";

export default function App() {
	return (
		<View style={styles.container}>
			<AppNavigationContainer />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 33
	},
});
