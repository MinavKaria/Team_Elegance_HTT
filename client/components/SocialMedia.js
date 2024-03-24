import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const SocialMedia = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://widget.taggbox.com/152449' }}
        style={styles.webView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default SocialMedia;
