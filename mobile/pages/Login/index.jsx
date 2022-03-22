import { View, Text, Button } from "react-native";
import React from "react";

const index = ({ toggle }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>Login Page</Text>
      <Button title="Login" onPress={toggle} />
    </View>
  );
};

export default index;
