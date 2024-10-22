import { StyleSheet, Text, View, TextInput, Pressable, ActivityIndicator, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CreateTask = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    taskTitle: '',
    taskDescription: '',
    completionDate: '',
    completionTime: ''
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const navigation = useNavigation();
  const route = useRoute(); // Use this to access params
  const fromIndex = route.params?.fromIndex || false; // Check if fromIndex is passed
  const onAddTask = route.params?.onAddTask; // Get the onAddTask function from params

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Show Date Picker
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  // Hide Date Picker
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // Handle Date Selection
  const handleConfirmDate = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      completionDate: date.toLocaleDateString()
    }));
    hideDatePicker();
  };

  // Show Time Picker
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  // Hide Time Picker
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  // Handle Time Selection
  const handleConfirmTime = (time) => {
    setFormData((prevData) => ({
      ...prevData,
      completionTime: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }));
    hideTimePicker();
  };

  const handleCreateTask = () => {
    if (!formData.taskTitle.trim() || !formData.taskDescription.trim()) {
      Alert.alert("Error", "Please fill in all fields before creating a task.");
      return;
    }

    setLoading(true);

    // Simulate task creation
    setTimeout(() => {
      setLoading(false);
      onAddTask(formData); // Call the onAddTask function

      Alert.alert(
        "Success",
        "Task created successfully!",
        [
          { text: "OK", onPress: () => navigation.navigate('task') }
        ]
      );
    }, 2000);
  };

  const handleBackPress = () => {
    if (fromIndex) {
      navigation.navigate('index'); // Go back to the index component if fromIndex is true
    } else {
      navigation.goBack(); // Go back to the previous screen, typically the task component
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a Task</Text>
      
      <TextInput
        placeholder="Enter Task Title"
        value={formData.taskTitle}
        onChangeText={(value) => handleInputChange('taskTitle', value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[styles.input, isFocused && styles.isFocused]}
      />
      
      <TextInput
        placeholder="Enter Task Description"
        value={formData.taskDescription}
        onChangeText={(value) => handleInputChange('taskDescription', value)}
        multiline
        numberOfLines={4}
        style={styles.input}
      />

      <Pressable onPress={showDatePicker} style={styles.input}>
        <Text style={{ color: formData.completionDate ? 'black' : 'gray' }}>
          {formData.completionDate ? formData.completionDate : "Select Completion Date"}
        </Text>
      </Pressable>

      <Pressable onPress={showTimePicker} style={styles.input}>
        <Text style={{ color: formData.completionTime ? 'black' : 'gray' }}>
          {formData.completionTime ? formData.completionTime : "Select Completion Time"}
        </Text>
      </Pressable>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />

      <Pressable
        style={styles.button}
        onPress={handleCreateTask}
        disabled={loading}
      >
        {loading ? <ActivityIndicator color="white" /> : <Text style={styles.buttonText}>Create Task</Text>}
      </Pressable>

      <Pressable
        onPress={handleBackPress}
        style={styles.linkButton}
      >
        <Text style={styles.linkText}>Back</Text>
      </Pressable>
    </View>
  );
};

export default CreateTask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    opacity: 0.8,
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 15,
    borderRadius: 5,
    justifyContent: 'center',
  },
  isFocused: {
    borderColor: 'white',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  linkButton: {
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 2,
    textAlign: 'center'
  },
  linkText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'center'
  }
});
