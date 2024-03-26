/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

function Task(props) {
  return (
    <>
      <Text>{props.taskDes}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  task: {
    backgroundColor: '#c9c7bf'
  }
})

export default Task
