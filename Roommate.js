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

  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => this.props.roomateAdd(this.props.name)}
        >
          <View>
            <Text>{this.props.name}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
