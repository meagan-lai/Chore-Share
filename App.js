import React, { Component } from "react";
import Roommate from "./Roommate";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.roommateAdd = this.roommateAdd.bind(this);
    this.state = {
      allRoommates: []
    };
  }

  roommateAdd(name) {
    console.log("hello world" + "git test");

    var allRoommates = this.state.allRoommates;
    var newAllRoommates = allRoommates.concat(name);
    if (allRoommates.includes(name)) {
      var index = allRoommates.indexOf(name);
      allRoommates.splice(index, 1);
      console.log(allRoommates);
    } else {
      this.setState({ allRoommates: newAllRoommates });
      console.log(allRoommates);
    }
  }
  render() {
    console.log(this.state.allRoommates);

    return (
      <View style={styles.container}>
        <Roommate name="Meagan" roommateAdd={this.roommateAdd} />
        <Roommate name="Vi" roommateAdd={this.roommateAdd} />
        <Roommate name="Emily" roommateAdd={this.roommateAdd} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
