/* eslint-disable react/react-in-jsx-scope */
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

function Task(props) {
  return (
    <>
      <TouchableOpacity>
        <Text>{props.taskDes}</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({})

export default Task
