import React, { memo, useCallback, useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const carouselWidth = windowWidth * 0.8;
const carouselHeight = windowHeight * 0.6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    height: carouselHeight,
    width: carouselWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  slideImage: { width: carouselWidth * 0.9, height: carouselHeight * 0.7 },
  slideTitle: { fontSize: 18 },
  slideSubtitle: { fontSize: 14 },

  pagination: {
    position: "absolute",
    bottom: 8,
    width: carouselWidth,
    justifyContent: "center",
    flexDirection: "row",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: { backgroundColor: "lightblue" },
  paginationDotInactive: { backgroundColor: "gray" },

  carousel: { width: carouselWidth },
});

const slideList = [
  {
    id: 1,
    image: require("../assets/loyalty.jpeg"),
    title: "Title 1",
    subtitle: "Subtitle 1",
  },
  {
    id: 2,
    image: require("../assets/loyalty2.jpeg"),
    title: "Title 2",
    subtitle: "Subtitle 2",
  },
  // Add more objects with your custom images
];

const Slide = memo(function Slide({ data }) {
  return (
    <View style={styles.slide}>
      <Image source={data.image} style={styles.slideImage}></Image>
      <Text style={styles.slideTitle}>{data.title}</Text>
      <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
    </View>
  );
});

function Pagination({ index }) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {slideList.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback((event) => {
    const slideSize = carouselWidth;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback(s => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: carouselWidth,
        offset: index * carouselWidth,
      }),
      []
    ),
  };

  const renderItem = useCallback(function renderItem({ item }) {
    return <Slide data={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={slideList}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Pagination index={index}></Pagination>
    </View>
  );
}
