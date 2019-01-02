import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";

export default class Roommate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  roomateAdd(name) {
    console.log("hello world" + "git test");
    console.log("Meagan");
  }
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.props.func("hello")}>
          <View>
            <Text>{this.props.name}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
