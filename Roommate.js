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
  active: {
    borderColor: "#5ac8fa",
    borderWidth: 3,
    backgroundColor: "black",
    margin: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 30,
    width: "40%",
    height: "8%",
    opacity: 0.8
  },

  textActive: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
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
