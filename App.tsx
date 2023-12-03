import React, { useState } from 'react';
import ExStylesText from "./external_stylesheet/textStyles"
import {
	Text,
	View,
	Button,
	StyleSheet,
	ScrollView,
	TextInput,
} from 'react-native';

/*When you have to give multiple text components then you have use it in the "<View>" component.*/
/*
State : 
	State means it is a hook, when your are updating the value of data using 
	state then with that components gets rerendered.
	And if you use state in one component then, you can not use that same state in 
	another component. We have to two parameters when using state one is the actual value
	and another for to update the value.

	Defference state VS variable 
	if we change state value then all the components that using this value will be rerendered.
	and variable data will be printed as it is after change also , Because components will not be rerendered.
	
	We can not share state data but we can share props data.

	Before using state you have to import it Like : import React,{useState} from 'react';
	and for using like : const[name,setName] = useState("StateValue");
*/

/*
Props : With the help of Props you can transfer data between components.
		1. It is like a argument or parameter of our components.
		2. We can take data from prent to child, but can we pass data from child to parent. -> YES. you can
		i.e : called lifting up state.
		3. We use state to update variables.
		4. If you want to pass the state value to another components then you must use props. 
		5. When state update or when props upadate then our components will also rerendered.
		6. When our variable get reassigned then our components will never rerendered.
	*/

/*
Style : First we have to import it from "react-native" as import {StyleSheet} from 'react-native';
	Three types of styles in React Native :
	1. Inline   Style
	2. Internal Style
	3. External Style

	By using styles we can reduce the repeated style code and can apply it to many components.
*/
function App() {

	const [name, setName] = useState("Manoj Kale");//we using state here.

	function updateName() {
		setName("NewState"); //for updating state value.
	}
	//Here we have used ScrollView, So, that we can scroll the whole screen.
	//We use TextInput for getting input from user.
	return (
		<ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
			<View>
				<Text style={[ExStylesText.textBox, { marginTop: 10 }]}> {name}</Text>

				<Text style={styles.textLine}>=====================================</Text>
				<Text style={ExStylesText.textBox}> Text Input value, To be continued... </Text>
				<TextInput style={
					{
						borderColor: "green",
						borderWidth: 10,
						color: "yellow",
						textAlign: "center",
						fontSize: 20,
					}
				} placeholder='Enter name'>

				</TextInput>

				<Text style={styles.textLine}>=====================================</Text>
				<Text style={{ fontSize: 50 }}> Props </Text>
				<User name={name} />

				<Text style={styles.textLine}>=====================================</Text>
				<Text></Text>

				<Button title=" Update Name " onPress={updateName} />
				<Text></Text>
				<Button title=" Update props " onPress={() => setName("Madhavrao Kale")} />

				<Text style={styles.textLine}>=====================================</Text>
				<Text style={{ fontSize: 40 }}> Components </Text>

				<UserData />
				<Text></Text>

				<Text style={styles.textLine}>=====================================</Text>
				<ButtonsComponent />
			</View>
		</ScrollView>
	);
}

//Creating styles
const styles = StyleSheet.create({
	textLine: {
		color: "red",
		fontSize: 20
	}

});

//This componet is used when learning props
const User = (props: { name: string }) => {
	return (
		<View style={{ backgroundColor: "orange", padding: 5 }}>
			<Text style={{ fontSize: 25 }}> {props.name} </Text>
		</View>
	);
}

/* If we want to create a component then you should create a seperate folder and then create a '.js' file each conmonents and in that file import {Text, View , or anything} from 'react-native' and then type export default component_name. Next In main App.js write import file_name from './components/component_name' 

When you write components then you should start from Capital letter only.
*/

// First component
const UserData = () => {
	return (
		<View>
			<Text style={{ fontSize: 20 }}>Name : FirstName MiddleName SirName </Text>
			<Text style={{ fontSize: 20 }}>Age : 99 </Text>
			<Text style={{ fontSize: 20 }}>Email : sample@mail.com </Text>
		</View>
	);
}

// Second component
/*
const CompanyData = () => {
	return(
		<View>
			<Text style={{ fontSize : 20}}> Name : TCS </Text>
			<Text style={{ fontSize : 20}}> Emp no : 20000 </Text>
			<Text style={{ fontSize : 20}}> Email : tcs@mail.com </Text>
		</View>
);
}
*/
const ButtonsComponent = () => {

	const func = () => {
		console.warn("Button pressed");
	}

	return (
		<View>
			<Text style={{ fontSize: 20 }}> Button and onPress Event </Text>
			<Button title="Press" onPress={func} color={"green"} />
		</View>
	);
}


export default App;
