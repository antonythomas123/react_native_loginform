import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import Logo from '../../assets/images/logo1.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Google from '../../assets/images/google.png';
import BaseLogo from '../../assets/images/logo2.png';

const LoginScreen = () => {
  const {height} = useWindowDimensions();

  const onLogin = () => {
    console.warn('Login');
  };
  const googleSignIn = () => {
    console.warn("Google Sign in");
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.1}]}
          resizeMode="contain"
        />

        <Text style={[styles.welcome, styles.setColorBlue]}>Welcome To</Text>
        <Text style={[styles.tms, styles.setColorBlue]}>TMS DRIVER APP</Text>
      </View>
      <View style={styles.input}>
        <MaterialIcons
          name="email"
          size={30}
          color="#666"
          style={styles.email_icon}
        />
        <TextInput placeholder="Username" style={styles.text_input} />
      </View>
      <View style={styles.input}>
        <MaterialIcons name="vpn-key" size={30} style={styles.email_icon} />
        <TextInput
          placeholder="Password"
          style={styles.text_input}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => {
            console.warn('See Me');
          }}>
          <MaterialIcons
            name="remove-red-eye"
            size={22}
            style={styles.email_icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.remember}>
        <Text style={styles.rem}>Remember Me</Text>
        <Text style={styles.rem}>Forgot Password</Text>
      </View>
      <View style={styles.press}>
        <Pressable style={styles.button} onPress={onLogin}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
      </View>
      <View style={styles.alternative_signin}>

        <Text style={styles.in_line}>or Sign in with Google</Text>
        <Pressable 
          style={styles.google_sign}
          onPress={googleSignIn}  
        >
          <View style={styles.alternate}>
            <Image source={Google} style={styles.google} resizeMode="contain" />
            <Text>Sign in with Google</Text>
          </View>
        </Pressable>
      </View>
      <View style= {styles.baseimage}>
        <Image
          source={BaseLogo}
          style={styles.baseimage_image}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 90,
  },
  logo: {
    width: 91,
    height: 61,
  },
  welcome: {
    paddingTop: 19,
    fontSize: 23,
    fontWeight: 'bold',
  },
  tms: {
    paddingBottom: 43,
    fontSize: 27,
    fontWeight: 'bold',
  },
  setColorBlue: {
    color: '#2F4E62',
  },
  email_icon: {
    marginRight: 10,
  },
  input: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#2F4E62',
    marginHorizontal: 40,
    marginBottom: 21,
  },
  text_input: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 18,
  },
  remember: {
    width: '80%',
    marginHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  rem: {
    fontWeight: 'bold',
  },
  press: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: '80%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#2F4E62',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  alternative_signin: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    borderTopWidth: 1,
  },
  in_line: {
    width: '40%',
    backgroundColor: '#FFFFFF',
    marginTop: -12,
    paddingHorizontal: 10,
  },
  alternate: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  google: {
    width: 50,
    height: 45,
  },
  baseimage: {
    marginTop: 5,
    height: '100%',
    alignItems: 'flex-end',
  },
  baseimage_image: {
    width: 239,
    height: 145,
  },
});
export default LoginScreen;
