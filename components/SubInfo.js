import { StyleSheet, Text, View, Image } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS, assets } from "../constants";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          color: COLORS.primary,
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          color: COLORS.primary,
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export const ETHPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.medium,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  );
};

export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <View>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
          marginLeft: index === 0 ? 0 : -SIZES.font,
        }}
      />
    </View>
  );
};

export const People = () => {
  return (
    <View style={styles.people}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`Person-${index}`} />
        )
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View style={styles.endDate}>
      <Text style={styles.endDateMeta}>Ending In</Text>
      <Text style={styles.endDateBase}>12h 30m</Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View style={styles.subInfo}>
      <People />
      <EndDate />
    </View>
  );
};

const styles = StyleSheet.create({
  subInfo: {
    width: "100%",
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  people: {
    flexDirection: "row",
  },

  endDate: {
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.base,
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.light,
    elevation: 1,
    maxWidth: "50%",
  },

  endDateMeta: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },

  endDateBase: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
});
