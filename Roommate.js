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
    width: "40%",
    height: "17%",
    borderRadius: 10,
    margin: 10
  },
  text: {
    color: "#575757",
    fontFamily: "Helvetica",
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center"
  },
  active: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "40%",
    height: "17%",
    shadowOffset: { width: 11, height: 11 },
    shadowColor: "#23513b",
    shadowOpacity: 1.0
  },

  textActive: {
    textAlign: "center",
    color: "#575757",
    fontFamily: "Helvetica",
    fontSize: 27,
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
