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
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.newRoommate("test")}
        >
          <View>
            <Text style={styles.text}>+</Text>
          </View>
        </TouchableHighlight>
        {this.state.roommateNames.map((name, i) => {
          return (
            <Roommate key={i} name={name} roommateAdd={this.roommateAdd} />
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7FDCC2",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    borderWidth: 1
  },

  button: {
    backgroundColor: "white",
    borderColor: "#7FDCC2",
    borderWidth: 5,
    margin: 10,
    paddingVertical: 10,
    borderRadius: 10,
    width: "40%",
    height: "17%"
  },
  text: {
    textAlign: "center",
    color: "#575757",
    fontFamily: "Helvetica",
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 40
  },

  header: {
    textAlign: "left",
    fontFamily: "Vibur",
    fontWeight: "bold",
    fontSize: 60,
    color: "white",
    width: "100%",
    paddingLeft: 40,
    paddingTop: 100
  }
});
