import React, { Component } from "react";
import Roommate from "../../../Roommate";
import {
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";
<style>@import url('https://fonts.googleapis.com/css?family=Vibur');</style>;

export default class ChooseRoommate extends Component {
  constructor(props) {
    super(props);
    this.roommateAdd = this.roommateAdd.bind(this);
    this.state = {
      allRoommates: [],
      roommateNames: ["Meagan", "Vi", "Emily", "Christina"]
    };
  }

  roommateAdd(name) {
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
      <ScrollView>
        <View>
          <Text style={styles.header}>Roommates</Text>
        </View>
        <View style={styles.container}>
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
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#6eeac3"
  },
  button: {
    backgroundColor: "white",
    width: "40%",
    height: "17%"
  },
  text: {
    fontFamily: "Helvetica",
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
    color: "orange"
  },

  header: {
    fontFamily: "Vibur",
    fontWeight: "bold",
    fontSize: 5,
    color: "white",
    width: "100%"
  }
});
