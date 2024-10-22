import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Table, Row, TableWrapper } from 'react-native-table-component';

const CustomTable = ({ data }) => {
  const tableHead = ['Date', 'Title', 'Status'];

  // Render table rows with conditional text color based on status
  const renderRows = () => {
    return data.map((item, index) => {
      const textStyle = [
        styles.text,
        item.status === 'Pending' ? styles.pendingText : styles.completedText
      ];

      return (
        <TableWrapper key={index} style={styles.row}>
          <Text style={textStyle}>{item.date}</Text>
          <Text style={textStyle}>{item.title}</Text>
          <Text style={textStyle}>{item.status}</Text>
        </TableWrapper>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
        <Row data={tableHead} style={styles.header} textStyle={styles.text} />
        {renderRows()}
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
  },
  header: {
    height: 40,
    backgroundColor: '#f0f0f0',
  },
  row: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#c8e1ff',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    padding: 8,
    fontWeight: 'bold'
  },
  pendingText: {
    color: 'orange',
  },
  completedText: {
    color: 'green',
  },
});

export default CustomTable;
