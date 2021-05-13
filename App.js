import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stream: null,
//     };
//   }

//   render = () => {
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text>Hello World!</Text>
//       </SafeAreaView>
//     );
//   };
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     j
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   rtcview: {
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '40%',
//     backgroundColor: 'black',
//   },
//   rtc: {
//     width: '100%',
//     height: '100%',
//   },
// });
import JitsiMeet, {JitsiMeetView} from 'react-native-jitsi-meet';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onConferenceTerminated = this.onConferenceTerminated.bind(this);
    this.onConferenceJoined = this.onConferenceJoined.bind(this);
    this.onConferenceWillJoin = this.onConferenceWillJoin.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      const url = 'https://meet.jit.si/kesher'; // can also be only room name and will connect to jitsi meet servers
      const userInfo = {
        displayName: 'Ankush Kumar',
        email: 'ankush@example.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      JitsiMeet.call(url, userInfo);
      /* You can also use JitsiMeet.audioCall(url) for audio only call */
      /* You can programmatically end the call with JitsiMeet.endCall() */
    }, 1000);
  }

  onConferenceTerminated(nativeEvent) {
    console.log("onConferenceWillJoin", nativeEvent);
    /* Conference terminated event */
  }

  onConferenceJoined(nativeEvent) {
    console.log("onConferenceJoined", nativeEvent);
    /* Conference joined event */
  }

  onConferenceWillJoin(nativeEvent) {
    console.log("onConferenceWillJoin", nativeEvent);
    /* Conference will join event */
  }

  render() {
    return (
      <View style={{backgroundColor: 'black', flex: 1}}>
        <JitsiMeetView
          onConferenceTerminated={this.onConferenceTerminated}
          onConferenceJoined={this.onConferenceJoined}
          onConferenceWillJoin={this.onConferenceWillJoin}
          style={{flex: 1, height: '100%', width: '100%'}}
        />
      </View>
    );
  }
}

export default App;
