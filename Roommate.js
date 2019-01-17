import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
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
  active: {
    backgroundColor: "white",
    margin: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
    width: "40%",
    height: "17%",
    paddingVertical: 50,
    shadowOffset: { width: 11, height: 11 },
    shadowColor: "#23513b",
    shadowOpacity: 1.0
  },

  textActive: {
    textAlign: "center",
    color: "#575757",
    fontFamily: "Helvetica",
    fontSize: 25,
    fontWeight: "bold"
  }
});
export default class Roommate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inactive: true
    };
  }

  pressed() {
    this.setState({ inactive: !this.state.inactive });
    this.props.roommateAdd(this.props.name);
  }

  render() {
    return (
      <TouchableHighlight
        onPress={() => this.pressed()}
        style={this.state.inactive ? styles.button : styles.active}
      >
        <View>
          <Text style={this.state.inactive ? styles.text : styles.textActive}>
            {this.props.name}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}
