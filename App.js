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
        <View style={styles.header}>
          <Text style={styles.headerText}>Roommates</Text>
        </View>
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
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "space-evenly"
  },

  button: {
    backgroundColor: "grey",
    width: "20%",
    height: "20%",
    borderRadius: 100,
    margin: 10
  },
  text: {
    color: "orange",
    fontFamily: "Helvetica",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center"
  },

  header: {
    backgroundColor: "#94D5C1",
    width: "100%",
    paddingVertical: "20%"
  },
  headerText: {
    fontFamily: "Vibur",
    fontSize: 65,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  }
});
