/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'

function IsCheck() {
  const [isCheck, setIsCheck] = useState('black')
  const HandleCheckButton = (ischeck) => {
    if (ischeck === 'black') {
      setIsCheck('green')
    } else {
      setIsCheck('black')
    }
  }
  return (
    <TouchableOpacity
      style={{ alignSelf: 'center', margin: 10 }}
      onPress={() => HandleCheckButton(isCheck)}
    >
      <AntDesign name="checkcircle" size={24} color={isCheck} />
    </TouchableOpacity>
  )
}

export default IsCheck
