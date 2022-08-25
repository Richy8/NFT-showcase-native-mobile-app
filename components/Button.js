import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { COLORS, FONTS, SIZES, SHADOWS } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles.circleButton, { ...props }]}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles.rectButton, { minWidth: minWidth, ...props }]}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.extraLarge,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.light,
  },

  rectButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.extraLarge,
    padding: SIZES.small,
  },
});
