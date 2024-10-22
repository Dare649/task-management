import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { CheckBox } from 'react-native-elements'; // Import CheckBox from react-native-elements

const Task = () => {
  const [tasks, setTasks] = useState([]); // State to hold tasks
  const navigation = useNavigation(); // Get the navigation instance

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, completed: false }]); // Add new task with default completed status as false
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed; // Toggle completion status
    setTasks(updatedTasks); // Update tasks state
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text}>Create Task Now</Text>

        {/* Use Pressable to trigger navigation */}
        <Pressable 
          style={styles.button}
          onPress={() => navigation.navigate('createTask', { onAddTask: addTask })} // Pass the addTask function
        >
          <Text style={styles.buttonText}>Add Task</Text>
        </Pressable>
      </View>

      {/* Display list of tasks */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <CheckBox
              title={item.taskTitle || "Task Title"} // Default value if title is missing
              checked={item.completed} // Check if the task is completed
              onPress={() => toggleTaskCompletion(index)} // Toggle completion status on press
            />
            <Text 
              style={[
                styles.taskDescription, 
                item.completed ? styles.lineThrough : null // Apply line-through if task is completed
              ]}
            >
              {item.taskDescription || "No description available."}
            </Text>
            <Text style={styles.dateTime}>
              {`Completion Date: ${item.completionDate || "N/A"}, Time: ${item.completionTime || "N/A"}`}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  container1: {
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  text: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 16,
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  taskItem: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    marginBottom: 10,
  },
  taskDescription: {
    fontSize: 14,
    marginTop: 5,
  },
  lineThrough: {
    textDecorationLine: 'line-through', // Line-through style when completed
    color: '#a9a9a9', // Optional: You can also change the color of completed tasks
  },
  dateTime: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 10
  }
});
