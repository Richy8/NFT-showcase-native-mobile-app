import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  FlatList,
  Text,
  Image,
  Platform,
} from "react-native";
import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";
import {
  FocusedStatusBar,
  DetailsHeader,
  DetailsDesc,
  DetailsBid,
} from "../components";
import { RectButton } from "../components/Button";
import { SubInfo } from "../components/SubInfo";

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <>
      <FocusedStatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        iosStatusBg={null}
      />

      <SafeAreaView style={styles.containerBody}>
        <View style={styles.bidButtonWrapper}>
          <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
        </View>

        <FlatList
          data={data.bids}
          renderItem={({ item }) => <DetailsBid bid={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
          ListHeaderComponent={() => (
            <>
              <DetailsHeader data={data} navigation={navigation} />
              <SubInfo />

              {/* DESCRIPTION */}
              <View style={{ padding: SIZES.font }}>
                <DetailsDesc data={data} />

                {data.bids.length > 0 && (
                  <Text
                    style={{
                      fontSize: SIZES.font,
                      fontFamily: FONTS.semiBold,
                      color: COLORS.primary,
                    }}
                  >
                    Current Bids
                  </Text>
                )}
              </View>
            </>
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  containerBody: {
    flex: 1,
  },

  bidButtonWrapper: {
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.font,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    zIndex: 1,
    bottom: 0,
  },
});
