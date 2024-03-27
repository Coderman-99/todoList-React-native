/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from 'expo-status-bar'
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  PanResponder,
  Platform,
  KeyboardAvoidingView,
  keyboardVerticalOffset,
  TouchableOpacityBase
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Task from './components/Task'
import { useState } from 'react'
import Edit from './components/Edit'
import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  useHeaderHeight
} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function Home({ navigation }) {
  const tasks = []
  const [taskText, setTaskText] = useState('')
  const [tasksList, setTasksList] = useState([])

  const [editText, setEditText] = useState('')
  const del = (delTask) => {
    console.log(tasksList)
    const newTasksList = tasksList.filter((taskRm) => taskRm !== delTask)
    setTasksList(newTasksList)
  }
  const edit = (event, delTask) => {
    setEditText(event)
    const index = tasksList.indexOf(delTask)
    console.log(editText)
    console.log(index)
    const newTasksList = tasksList.splice(index, 1, editText)
    setTasksList(newTasksList)
  }

  const addTask = () => {
    tasks.push(taskText)
    setTasksList([...tasksList, ...tasks])
    setTaskText('')
    console.log(tasksList)
  }

  const panResponder = (id) => {
    let dx = 0
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        dx = gestureState.dx
      },
      onPanResponderRelease: (_, gestureState) => {
        if (dx > 50) {
          del(id)
        }
      }
    })
  }

  const [isCheck, setIsCheck] = useState(0)
  const [changeCheckcolor, setChangcheckColor] = useState('black')
  const HandleCheckButton = (ischeck) => {
    if (isCheck === 0) {
      setIsCheck(1)
      setChangcheckColor('green')
    } else {
      setIsCheck(0)
      setChangcheckColor('black')
    }
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} />
        <Text style={styles.appTitle}>Today Todo Tasks</Text>
        <View style={styles.bodyList}>
          <ScrollView>
            {tasksList.map((task, id) => (
              <>
                <View style={{ flexDirection: 'row' }} key={id}>
                  <View {...panResponder(id).panHandlers} style={styles.task}>
                    <View style={styles.delEditContainer}>
                      <TouchableOpacity
                        style={styles.buttonDel}
                        onPress={() => del(task)}
                      >
                        <Text>Delete</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.buttonEdit}
                        onPress={() =>
                          navigation.navigate('Edit', {
                            text: task,
                            list: tasksList,
                            id: id
                          })
                        }
                      >
                        <Text>Edit</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.taskContent}>
                      <Task taskDes={task} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={{ alignSelf: 'center', margin: 10 }}
                    onPress={() => HandleCheckButton()}
                  >
                    <AntDesign
                      name="checkcircle"
                      size={24}
                      color={changeCheckcolor}
                    />
                  </TouchableOpacity>
                </View>
              </>
            ))}
          </ScrollView>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
          style={styles.keyboard}
        >
          <View style={styles.taskAddContainer}>
            <TouchableOpacity onPress={addTask}>
              <AntDesign name="pluscircleo" size={50} color="black" />
            </TouchableOpacity>
            <TextInput
              style={styles.taskInput}
              placeholder="Add task here"
              onChangeText={(newTaskText) => setTaskText(newTaskText)}
              defaultValue={taskText}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  keyboard: {
    flexDirection: 'row'
  },
  delEditContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'start',
    marginRight: 10,
    borderRightWidth: 2,
    paddingRight: 10
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%'
  },
  bodyList: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    textAlign: 'center'
  },
  bodyAdd: {},
  taskContainer: {
    padding: 10,
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    maxWidth: '50%',
    borderRadius: 10
  },
  taskAddContainer: {
    backgroundColor: '#e1e4e8',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    maxHeight: '70%',
    borderRadius: 20,
    maxWidth: '100%',
    marginBottom: '7%'
  },
  taskInput: {
    marginLeft: 10,
    width: 300,
    maxWidth: '70%',
    height: 50,
    borderRadius: 10,
    fontSize: 20
  },
  addTaskButton_active: {
    borderWidth: 5
  },
  task: {
    backgroundColor: '#e1e4e8',
    borderRadius: 10,
    width: 300,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  buttonDel: {
    backgroundColor: '#f799a1',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    padding: 5,
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  buttonEdit: {
    backgroundColor: '#a2f5ce',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 5,
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  taskContent: {
    maxWidth: '70%'
  }
})
