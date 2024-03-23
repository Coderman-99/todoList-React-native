/* eslint-disable react/react-in-jsx-scope */
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function HiddenButton(props) {
  const del = () => {}
  return (
    <>
      <TouchableOpacity onPress={del}>
        <View style={styles.buttonDel}>
          <Text>delete</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.buttonEdit}>
          <Text>edit</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  buttonDel: {
    padding: 2,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 50
  },
  buttonEdit: {
    padding: 2,
    backgroundColor: 'green',
    borderRadius: 10,
    width: 50
  }
})

export default HiddenButton
