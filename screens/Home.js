import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  FlatList,
  Platform,
} from "react-native";
import { FocusedStatusBar, NFTCard, HomeHeader } from "../components";
import { COLORS, NFTData } from "../constants";

const Home = ({ navigation }) => {
  const [nftData, setNftData] = React.useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    filteredData.length ? setNftData(filteredData) : setNftData(NFTData);
  };

  return (
    <>
      <FocusedStatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
        iosStatusBg={COLORS.primary}
      />

      <SafeAreaView style={styles.containerBody}>
        <View style={{ flex: 1 }}>
          <View style={{ zIndex: 0 }}>
            <FlatList
              data={nftData}
              renderItem={({ item }) => (
                <NFTCard navigation={navigation} data={item} />
              )}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
            />
          </View>

          {/* BACKGROUND COLOR */}
          <View style={styles.nftBackground}>
            <View
              style={{
                height: 300,
                backgroundColor: COLORS.primary,
              }}
            />
            <View style={{ flex: 1, backgroundColor: COLORS.white }} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerBody: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
    flex: 1,
  },

  nftBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
});
