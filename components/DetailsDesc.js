import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ETHPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

const DetailsDesc = ({ data }) => {
  const [text, setText] = React.useState(data.description.slice(0, 150));
  const [readMore, setReadMore] = React.useState(false);

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <ETHPrice price={data.price} />
      </View>

      {/* DESCRIPTION */}
      <View style={{ marginVertical: SIZES.extraLarge * 1.35 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>

        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small * 1.13,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large * 1.23,
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.small * 1.065,
                fontFamily: FONTS.semiBold,
              }}
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 150));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;

const styles = StyleSheet.create({});
