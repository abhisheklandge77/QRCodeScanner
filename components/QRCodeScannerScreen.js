import React, { Component } from "react";
import { StyleSheet, Dimensions, View, Alert } from "react-native";
import { Button } from "react-native-paper";
import QRCodeScanner from "react-native-qrcode-scanner";

export default class QRCodeScannerScreen extends Component {
    onSuccess = async e => {
      await this.props.navigation.navigate("QRCodeData", {
        data: e.data,
        scanner: this.scanner
      });
    };

  render() {
    return (
      <View style={styles.container}>
        <QRCodeScanner
          onRead={this.onSuccess}
          showMarker={true}
          checkAndroid6Permissions={true}
          ref={elem => {
            this.scanner = elem;
          }}
          cameraStyle={{ height: Dimensions.get("window").height }}
        />
        <Button
        style={styles.btn}
        onPress={ () => this.props.navigation.navigate("Home")}
        >
          Close Scanner
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  btn:{
    backgroundColor : "#fff",
    color : "#000"
  }
});
