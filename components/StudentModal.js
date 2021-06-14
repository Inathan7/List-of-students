import React from 'react';
import {StyleSheet ,Modal, TextInput, Text, View, TouchableOpacity} from 'react-native';

export default class StudentModal extends React.Component {

    state = {
        title: "",
        subTitle: "",
    };

    render() {
        return(
            <Modal visible={this.props.visible} animationType="fade" transparent={true} onRequestClose={() => {}}>
                <View style={styles.container}>
                    <View style={styles.boxContainer}>
                    <TextInput 
                        style={styles.boxInput}
                        placeholder="Title"
                        value={ this.state.title }
                        onChangeText={text => this.setState({title: text})}
                        autoFocus
                    />

                    <TextInput 
                        style={styles.boxInput}
                        value={this.state.subTitle}
                        onChangeText={text => this.setState({subTitle: text})}
                        placeholder="SubTitle"
                    />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonAdd} onPress={() => this.props.onAdd(this.state.title, this.state.subTitle)}>
                            <Text style={styles.buttonText}>
                                Add
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonCancel} onPress={() => this.props.onCancel()}>
                            <Text style={styles.buttonText}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                    </View>
                    
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    boxContainer: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#FFF',
    },
    buttonAdd: {
        backgroundColor: 'green',
        borderRadius: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10, 
        padding: 20,
    },
    buttonCancel: {
        backgroundColor: 'red',
        borderRadius: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10, 
        padding: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
        height: 70,
    },
    boxInput: {
        alignSelf: 'stretch',
        height: 40,
        borderRadius: 5,
        backgroundColor: '#DDD',
        margin: 5,
    },
});