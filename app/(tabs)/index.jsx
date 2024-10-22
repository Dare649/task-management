import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import Chart from '../../src/component/chat';
import { taskData, table } from '../../src/component/dummy';
import Table from '../../src/component/table';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import React, { useState } from 'react';

const Index = () => {
  const [tasks, setTasks] = useState([]); // State to hold tasks
  const task = taskData;
  const navigation = useNavigation(); // Get the navigation instance

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task to the list
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container0}>
        <View style={styles.container1}>
          <Text style={styles.text1}>Hello, Damilare</Text>
          <Image source={require('../../public/boy1.jpg')} style={styles.image} /> 
        </View>
        {/* <Pressable 
          style={styles.linkButton}
          onPress={() => navigation.navigate('createTask', { onAddTask: addTask })} // Pass the addTask function
        >
          <Text style={styles.linkText}>Add Task</Text>
        </Pressable> */}
      </View>
      
      <View style={styles.container2}>
        <View style={styles.box}>
          <Text style={styles.boxText}>Completed Tasks</Text>
          <Text style={styles.boxText1}>{tasks.filter(task => task.completionDate && task.completionTime).length}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>Uncompleted Tasks</Text>
          <Text style={styles.boxText1}>{tasks.length - tasks.filter(task => task.completionDate && task.completionTime).length}</Text>
        </View>
      </View>
      
      <Chart taskData={task} />
      <Table data={table} style={styles.table}/>
      
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    marginBottom: 20,
  },
  container0: {
    backgroundColor: 'black',
    padding: 10,
    marginVertical: 15,
    width: '100%',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Align image and text vertically
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20, // Added some spacing between elements
  },
  box: {
    backgroundColor: 'black',
    width: '48%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center', // Center the text vertically
  },
  boxText: {
    color: 'white',
    fontSize: 16,
    textTransform: 'capitalize',
    marginBottom: 5, // Added space between title and number
  },
  boxText1: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  text1: {
    fontWeight: '600',
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 20,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  linkButton: {
    backgroundColor: 'white',
    width: '40%',
    marginVertical: 10,
    color: 'black',
    padding: 10,
    textTransform: 'capitalize',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  table: {
    marginVertical: 20,
  },
  linkText: {
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
