import React from "react";
import { StyleSheet, View, StatusBar, Platform } from "react-native";
import { useIsFocused } from "@react-navigation/core";

const MyStatusBar = ({ iosStatusBg, ...props }) => {
  return (
    <View>
      {Platform.OS === "ios" && (
        <View
          style={[styles.iosStatusBar, { backgroundColor: iosStatusBg }]}
        ></View>
      )}
      <StatusBar translucent animated={true} {...props} />
    </View>
  );
};

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();
  return isFocused && <MyStatusBar {...props} />;
};

export default FocusedStatusBar;

const styles = StyleSheet.create({
  iosStatusBar: {
    height: 44,
  },
});
