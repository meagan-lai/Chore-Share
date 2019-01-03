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
    backgroundColor: "blue",
    margin: 10,
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderRadius: 60,
    width: "40%",
    height: "8%"
  },
  text: {
    textAlign: "center",
    fontSize: 25
  }
});
export default class Roommate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.button}>
        <TouchableHighlight
          onPress={() => this.props.roommateAdd(this.props.name)}
        >
          <View>
            <Text style={styles.text}>{this.props.name}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
