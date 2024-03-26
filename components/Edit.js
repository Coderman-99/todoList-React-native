/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  SafeAreaView
} from 'react-native'

function Edit({ navigation, route }) {
  console.log(route.params.list)
  const [text, setText] = useState(route.params.text)
  const [newList, setNewList] = useState([])
  const handleButton = (newText, task) => {
    setText(newText)
    const nList = route.params.list.splice(route.params.id, 1, text)
    setNewList(nList)
  }
  return (
    <SafeAreaView>
      <TextInput
        value={text}
        defaultValue={route.params.text}
        onChangeText={(newText) => handleButton(newText, route.params.text)}
      />
      <Button
        style={styles.buttonSave}
        title="Save"
        onPress={() => navigation.navigate('Home', { newTaskList: newList })}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonSave: {
    padding: 2,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 50
  }
})

export default Edit
