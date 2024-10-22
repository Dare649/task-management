import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const Chart = ({ taskData }) => {
  // Format data for the chart
  const labels = taskData.map(item => item.date);
  const dataPoints = taskData.map(item => item.tasksCompleted);

  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 15, marginBottom: 10, fontWeight: 'bold' }}>Completed Task</Text>
      <LineChart
        data={{
          labels: labels, // Date labels
          datasets: [
            {
              data: dataPoints, // Number of tasks completed
            },
          ],
        }}
        width={screenWidth - 16} // Width of the chart
        height={220}
        yAxisLabel=""
        yAxisSuffix=" tasks"
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0, // Round to integer
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier // To make the line smoother
        style={{
          marginVertical: 8,
        }}
      />
    </View>
  );
};

export default Chart;
