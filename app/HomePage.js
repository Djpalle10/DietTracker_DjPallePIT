import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, Card } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    accent: '#03dac4',
  },
};

const App = () => {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');
  const [foodItems, setFoodItems] = useState([]);

  // Add food item to the list
  const addFoodItem = () => {
    if (food && calories && !isNaN(calories)) {
      const newItem = { food, calories: parseInt(calories) };
      setFoodItems([...foodItems, newItem]);
      setFood('');
      setCalories('');
    } else {
      alert('Please enter valid food name and calories.');
    }
  };

  // Calculate total calories
  const getTotalCalories = () => {
    return foodItems.reduce((acc, item) => acc + item.calories, 0);
  };

  // Save the food list to a local file
  const saveDataToFile = async () => {
    try {
      const fileUri = FileSystem.documentDirectory + 'diet_data.txt';
      let content = 'Food Name - Calories\n';
      foodItems.forEach(item => {
        content += `${item.food} - ${item.calories} cal\n`;
      });

      await FileSystem.writeAsStringAsync(fileUri, content);
      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text style={styles.title}>Track Your Diet</Text>

        {/* Food Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Food Name"
          value={food}
          onChangeText={setFood}
        />

        {/* Calories Input */}
        <TextInput
          style={styles.input}
          placeholder="Calories"
          keyboardType="number-pad"
          value={calories}
          onChangeText={setCalories}
        />

        {/* Add Button */}
        <TouchableOpacity onPress={addFoodItem} style={styles.Addbutton}>
          <Text style={styles.buttonText}>Add Food</Text>
        </TouchableOpacity>

        {/* Food List */}
        <FlatList
          data={foodItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <View style={styles.foodItem}>
                <Text>{item.food}</Text>
                <Text>{item.calories} cal</Text>
              </View>
            </Card>
          )}
        />

        {/* Total Calories */}
        <Text style={styles.totalCalories}>Total Calories: {getTotalCalories()} cal</Text>

        {/* Save Data Button */}
        <TouchableOpacity onPress={saveDataToFile}>
          <View style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save Data</Text>
          </View>
        </TouchableOpacity>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    marginVertical: 30,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    paddingLeft: 8,
    borderRadius: 4,
    fontSize: 15,
  },
  addButton: {
    marginVertical: 10,
    fontWeight: 800,
  },

  foodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  totalCalories: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  card: {
    marginBottom: 10,
  },
  Addbutton: {
    fontWeight: 700,
    backgroundColor: '#7c3ff6',
    borderRadius: 15,

  },
  buttonText: {
    fontSize: 14,
    fontWeight: 600,
    marginVertical: 10,
    textAlign: "center",
    color: '#fff',

  },
});

export default App;
