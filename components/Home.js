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
  View
} from 'react-native'
import TodoList from './components/TodoList'
import { AntDesign } from '@expo/vector-icons'
import Task from './components/Task'
import { useState } from 'react'
import Edit from './components/Edit'

export default function Home1({ navigation }) {
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
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Today Todo Tasks</Text>
        <View style={styles.bodyList}>
          <ScrollView>
            {tasksList.map((task, id) => (
              <View key={id} style={styles.task}>
                <View style={styles.delEditContainer}>
                  <TouchableOpacity onPress={() => del(task)}>
                    <Text style={styles.textDel}>Delete</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Edit', {
                        text: task,
                        list: tasksList
                      })
                    }
                  >
                    <Text style={styles.textEdit}>Edit</Text>
                  </TouchableOpacity>
                </View>
                <TextInput
                  value={editText}
                  defaultValue={task}
                  onChangeText={(newTaskText) => setEditText(newTaskText)}
                />
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.taskAddContainer}>
          <TouchableOpacity onPress={addTask}>
            <AntDesign name="pluscircleo" size={50} color="black" />
          </TouchableOpacity>
          <TextInput
            style={styles.taskAdd}
            placeholder="Add task here"
            onChangeText={(newTaskText) => setTaskText(newTaskText)}
            defaultValue={taskText}
            on
          />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  delEditContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'start',
    marginRight: 10
  },
  container: {
    backgroundColor: '#8c82ff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    padding: '5%'
  },
  bodyList: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    margin: 20
  },
  bodyAdd: {},
  taskContainer: {
    padding: 10,
    borderWidth: 2,
    backgroundColor: 'green',
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    maxWidth: '50%',
    borderRadius: 10
  },
  taskAddContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 50,
    backgroundColor: 'red',
    maxHeight: '70%'
  },
  taskAdd: {
    backgroundColor: 'green',
    marginLeft: 50,
    width: 300,
    maxWidth: '50%',
    height: 50,
    borderRadius: 10
  },
  addTaskButton_active: {
    backgroundColor: 'blue',
    borderWidth: 5
  },
  task: {
    width: 300,
    padding: 10,
    backgroundColor: 'green',
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  textDel: {
    padding: 5,
    backgroundColor: 'red',
    width: 50,
    textAlign: 'center'
  },
  textEdit: {
    padding: 5,
    backgroundColor: 'green',
    width: 50,
    textAlign: 'center'
  }
})
