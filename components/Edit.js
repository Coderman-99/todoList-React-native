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
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback
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
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        defaultValue={route.params.text}
        onChangeText={(newText) => handleButton(newText, route.params.text)}
        multiline={true}
      />
      <View style={styles.buttonSave}>
        <Button
          title="Save"
          onPress={() => navigation.navigate('Home', { newTaskList: newList })}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: '5%',
    flex: 1
  },
  textInput: {
    height: 'fit-content',
    backgroundColor: '#e1e4e8',
    marginBottom: '5%',
    marginTop: '5%',
    padding: '5%',
    borderRadius: 10
  },

  buttonSave: {
    padding: 2,
    borderRadius: 10,
    width: '50%',
    alignSelf: 'center'
  }
})

export default Edit
