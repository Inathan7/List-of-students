import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Student from './components/Student';
import StudentModal from './components/StudentModal';

export default class HomeScreen extends React.Component {

  state = {
    students: [],
    modalVisible: false,
  };

  async componentDidMount() {
    this.rendAll();
  }

  clear = async () => {
    await AsyncStorage.clear();
    this.rendAll();
  };

  openModal = () => {
    this.setState({modalVisible: true});
  };

  closeModal = () => {
    this.setState({modalVisible: false});
  };  

  onAdd = async (studentTitle, studentSubTitle) => {
    const newStudent = {
      id: Math.random() * 1000,
      title: studentTitle,
      subTitle: studentSubTitle
    };
  
    const students = [
      ...this.state.students,
      newStudent
    ];
  
    this.setState({
      students,
      modalVisible: false,
    });
   
    try {
      const jsonValue = JSON.stringify(students)
      await AsyncStorage.setItem('@StudentsApp:students', jsonValue)
    } catch (e) {
      // saving error
  }
  };

  rendAll = async () => {
    students = JSON.parse(await AsyncStorage.getItem('@StudentList:students')) || [];

    this.setState({students});

    const apiCall = await fetch('http://elenilsonvieira.com.br');
    const response = await apiCall.json();

    this.onAdd(response.title, response.subTitle);
  }

 getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@StudentsApp:students')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Alunos</Text>

          <TouchableOpacity onPress={() => this.openModal()}>
            <Text style={styles.headerButton}> + </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.clear()}>
            <Text style={styles.headerButton}> - </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.studentList}>
          {this.state.students.map(student => <Student key={ student.id } title={ student.title } subTitle={ student.subTitle } />)}
        </ScrollView>

        <StudentModal 
          visible={this.state.modalVisible} 
          onCancel={this.closeModal}
          onAdd={this.onAdd}
        />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 22,
    paddingHorizontal: 50,
  },
  headerButton: {
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  studentList: {
    paddingTop: 20,
  },
});
