import {
  StyleSheet,
  Text,
  View,
  Modal,

  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '../../../../Assets/Icon/Icon';
const ModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <Pressable
          style={styles.centeredView}
          onPress={() => setModalVisible(false)}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>Fees</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>Average Rating</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>Years of Experience</Text>
            </TouchableOpacity>
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(false)}
            accessibilityLabel="Close modal">
            <Text style={styles.textStyle}>Cancel</Text>
          </Pressable>
        </Pressable>
      </Modal>

      <TouchableOpacity
        style={styles.sortButton}
        onPress={() => setModalVisible(true)}
        accessibilityLabel="Open sort modal">
        <View style={styles.sortInner}>
          <Icon
            type={'FontAwesome'}
            name={'sort'}
            size={20}
            color={'#00C853'}
          />
          <Text style={styles.sortText}>Sort By</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  optionButton: {
    width: '100%',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  button: {
    width: '90%',
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 15,
    alignItems: 'center',
    marginBottom:35,
  },
  buttonClose: {
    backgroundColor: 'white',
  },
  textStyle: {
    color: '#e70b0b',
    fontWeight: 'bold',
    fontSize: 18,
  },
  sortButton: {
    height: 65,
    width: '40%',
    flexDirection: 'row',
    padding: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 25,
    borderRadius: 45,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '500',
  },
});
