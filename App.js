import React, { Component } from "react";
import Roommate from "./Roommate";
import {
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";
<style>@import url('https://fonts.googleapis.com/css?family=Vibur');</style>;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.roommateAdd = this.roommateAdd.bind(this);
    this.state = {
      allRoommates: [],
      roommateNames: ["Meagan", "Vi", "Emily", "Christina"]
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

  newRoommate(name) {
    let r = this.state.roommateNames;
    r.push(name);
    this.setState({ roommateNames: r });
  }
  render() {
    console.log(this.state.allRoommates);

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Roommates</Text>
        {this.state.roommateNames.map((name, i) => {
          return (
            <Roommate key={i} name={name} roommateAdd={this.roommateAdd} />
          );
        })}
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.newRoommate("test")}
        >
          <Text style={styles.text}>+</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7FDCC2"
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
  },
  button: {
    backgroundColor: "white",
    borderColor: "#5ac8fa",
    borderWidth: 3,
    margin: 20,
    width: 5,
    paddingVertical: 10,
    borderRadius: 30,
    width: "40%",
    height: "8%",
    opacity: 0.8
  },
  text: {
    textAlign: "center",
    color: "#5ac8fa",
    fontSize: 20,
    fontWeight: "bold"
  },

  header: {
    fontFamily: "Vibur",
    fontWeight: "bold",
    fontSize: 40,
    color: "white"
  }
});
