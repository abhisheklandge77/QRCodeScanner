import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import { RNCamera } from 'react-native-camera'

const Camera = () => {
  // const {onCapture} = props;
  const [barcodes, setBarcodes] = React.useState([]);

  const barcodeRecognized = ({ barcodes }) => {
    barcodes.forEach(barcode => console.log(barcode.data))
    setBarcodes({ barcodes });
  }

  const renderBarcodes = () => (
    <View>{barcodes.map((barcode) => {
      renderBarcode(barcode);
    }
    )}</View>
  )

  const renderBarcode = ({ data }) =>
    Alert.alert(
      'Scanned Data',
      data,
      [
        {
          text: 'Okay',
          onPress: () => console.log('Okay Pressed'),
          style: 'cancel'
        }
      ],
      { cancelable: false }
    )
  // takePicture = async () => {
  //   if (this.camera) {
  //     const options = { quality: 0.5, base64: true };
  //     const data = await this.camera.takePictureAsync(options);
  //     console.log(data.uri);
  //     // CameraRoll.saveToCameraRoll( data.uri );
  //     onCapture(data.uri);
  //   }
  // };

  return (
    <View style={styles.cameraContainer}>
      <RNCamera
        ref={ref => {
          camera = ref;
        }}
        style={{
          flex: 1,
          width: '100%',
        }}
        onGoogleVisionBarcodesDetected={barcodeRecognized}
      // style={styles.preview}
      // type={RNCamera.Constants.Type.back}
      // flashMode={RNCamera.Constants.FlashMode.on}
      // androidCameraPermissionOptions={{
      //   title: 'Permission to use camera',
      //   message: 'We need your permission to use your camera',
      //   buttonPositive: 'Ok',
      //   buttonNegative: 'Cancel',
      // }}
      // androidRecordAudioPermissionOptions={{
      //   title: 'Permission to use audio recording',
      //   message: 'We need your permission to use your audio',
      //   buttonPositive: 'Ok',
      //   buttonNegative: 'Cancel',
      // }}
      >
        {renderBarcodes()}
        <Text style={{ height: '100%', width: '100%' }}>Hello</Text>
      </RNCamera>
      {/* <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
  scanner: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default Camera;
