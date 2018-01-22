import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import fonts from "./Apple ][.ttf";
import ReactDOM from 'react-dom';
// import { ToastContainer } from "react-toastr";
import { Text, View, Button, Modal, StyleSheet } from 'react';
// import './assets/fonts/Apple][.ttf';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">P00RGRRRL</h1>
        </header>
        <p className="App-intro">
          REL0AD  !"#$%&'()*+,-./0123456789:;?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz��
        </p>
        <div id="root"></div>
      </div>
    );
  }
}
// class Popup extends React.Component {
//   render() {
//     return (
//       <div className='popup'>
//         <div className='popup_inner'>
//           <h1>{this.props.text}</h1>
//         <button onClick={this.props.closePopup}>close me</button>
//         </div>
//       </div>
//     );
//   }
// }
// class Content extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showPopup: false
//     };
//   }
//   togglePopup() {
//     this.setState({
//       showPopup: !this.state.showPopup
//     });
//   }
//   render() {
//     return (
//       <div className='content'>
//         <h1>hihi</h1>
//         <button onClick={this.togglePopup.bind(this)}>show popup</button>
//         <button onClick={() => {alert('woooooooot?');}}>try me when popup is open</button>
//         <p>Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br />Ganz viel inhalt.<br /></p>
//         {this.state.showPopup ?
//           <Popup
//             text='Close Me'
//             closePopup={this.togglePopup.bind(this)}
//           />
//           : null
//         }
//       </div>
//     );
//   }
// };
export class ModalPop extends Component {
  state = {
    modalVisible: false,
  };
openModal() {
  this.setState({modalVisible:true});
}
closeModal() {
  this.setState({modalVisible:false});
}
render() {
  return (
    <View style={styles.container}>
    <Modal
    visible={this.state.modalVisible}
    animationType={'slide'}
    onRequestClose={() => this.closeModal()}>
  <View style={styles.modalContainer}>
  <View style={styles.innerContainer}>
  <Text>This is a pop up for poorgrrrl site</Text>
  <Button onPress={() => this.closeModal()}
  title="Close modal">
    </Button>
    </View>
    </View>
    </Modal>
    <Button
      onPress={() => this.openModal()}
      title="Open modal" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});


ReactDOM.render(
  <App />,
  document.getElementById('content')
);

export default App;
