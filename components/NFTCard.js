import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { CircleButton, RectButton } from "./Button";
import { SubInfo, ETHPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";

const NFTCard = ({ navigation, data }) => {
  return (
    <View style={styles.nftCard}>
      <View style={styles.nftInnerCard}>
        <Image source={data.image} resizeMode="cover" style={styles.nftImage} />

        {/* CIRCLE BUTTON */}
        <CircleButton imgUrl={assets.heart} top={10} right={10} />
      </View>

      {/* SUB INFO */}
      <SubInfo />

      {/* TITLE AREA */}
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ETHPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;

const styles = StyleSheet.create({
  nftCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    margin: SIZES.base,
    marginBottom: SIZES.extraLarge,
    ...SHADOWS.dark,
  },

  nftInnerCard: {
    width: "100%",
    height: 250,
  },

  nftImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
});
