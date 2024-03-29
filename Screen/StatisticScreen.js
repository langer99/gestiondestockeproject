import React from 'react';
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph';
import LineGraph from '@chartiful/react-native-line-graph';

const App = () => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.graphContainer}>
          <VerticalBarGraph
            data={[20, 45, 28, 80, 99, 43, 200]}
            labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
            width={windowWidth - 90}
            height={200}
            barRadius={5}
            barWidthPercentage={0.65}
            barColor='#53ae31'
            baseConfig={{
              hasXAxisBackgroundLines: false,
              xAxisLabelStyle: {
                position: 'right',
                prefix: '$'
              }
            }}
            style={styles.graph}
          />
        </View>

        <View style={styles.graphContainer}>
          <LineGraph
            data={[10, 15, 7, 20, 14, 12, 10, 20]}
            width={windowWidth - 90}
            height={200}
            lineColor='#347975'
            dotColor='#347975'
            lineWidth={3}
            isBezier
            hasDots={true}
            baseConfig={{
              startAtZero: false,
              hasXAxisBackgroundLines: false,
              xAxisLabelStyle: {
                prefix: '$',
                offset: 0
              }
            }}
            style={styles.graph}
          />
        </View>

        <View style={styles.graphContainer}>
          <HorizontalBarGraph
            data={[125, 100, 50, 75, 100, 125]}
            labels={['Q1, 2019', 'Q2, 2019', 'Q3, 2019', 'Q4, 2019', 'Q1, 2020', 'Q2, 2020']}
            width={windowWidth - 100}
            height={225}
            barRadius={7}
            barColor='#82d551'
            baseConfig={{
              hasYAxisBackgroundLines: false,
              xAxisLabelStyle: {
                rotation: 0,
                fontSize: 11,
                width: 60,
                yOffset: 4,
                xOffset: -12
              },
              yAxisLabelStyle: {
                rotation: 30,
                fontSize: 13,
                prefix: '$',
                position: 'bottom',
                xOffset: 15,
                yOffset: -10,
                decimals: 2,
                height: 50
              }
            }}
            style={styles.graph}
          />
        </View>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  graphContainer: {
    marginBottom: 30,
    padding: 10,
    paddingTop: 20,
    borderRadius: 20,
    backgroundColor: '#dff4d7',
  },
  map: {
    width: Dimensions.get('window').width,
    height: 300,
    marginTop: 20,
  },
});

export default App;
