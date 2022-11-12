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
import React, {useState} from 'react';
import Logo from '../../assets/images/logo1.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Google from '../../assets/images/google.png';
import BaseLogo from '../../assets/images/logo2.png';
import {PasswordVisibility} from '../components/PasswordVisibility/PasswordVisibility.js';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onLogin = () => {
    console.warn(username, password);
  };
  const forgotPassword = () => {
    console.warn('Forgot Password');
  };

  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    PasswordVisibility();

  const googleSignIn = () => {
    console.warn('Google Sign in');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
        <TextInput
          placeholder="Username"
          style={styles.text_input}
          autoCapitalize="none"
          value={username}
          onChangeText={username => setUsername(username)}
        />
      </View>
      <View style={styles.input}>
        <MaterialIcons name="vpn-key" size={30} style={styles.email_icon} />
        <TextInput
          placeholder="Password"
          style={styles.text_input}
          secureTextEntry={passwordVisibility}
          autoCapitalize="none"
          value={password}
          onChangeText={password => setPassword(password)}
        />
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons
            name={rightIcon}
            size={22}
            style={styles.email_icon}
          />
        </Pressable>
      </View>
      <View style={styles.remember}>
        <Text style={styles.rem}>Remember Me</Text>
        <TouchableOpacity onPress={forgotPassword}>
          <Text style={styles.rem}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.press}>
        <Pressable style={styles.button} onPress={onLogin}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
        <View
          style={{
            flex: 1,
            borderWidth: 0.5,
            height: 1,
            backgroundColor: '#000000',
          }}
        />
        <View>
          <Text style={{paddingHorizontal: 5, textAlign: 'center'}}>
            Or Sign in with Google
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            borderWidth: 0.5,
            height: 1,
            backgroundColor: '#000000',
          }}
        />
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Pressable onPress={googleSignIn} style={styles.googleSignIn}>
          <Image
            source={Google}
            style={{marginRight: 10}}
            resizeMode="contain"
          />
          <Text style={styles.label}>Sign in with Google</Text>
        </Pressable>
      </View>
      <View style={styles.baseimage}>
        <Image source={BaseLogo} style={styles.baseimage_image} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 70,
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
    paddingBottom: 30,
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
    borderBottomWidth: 2,
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
    justifyContent: 'space-between',
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
  googleSignIn: {
    padding: 5,
    margin: '5%',
    backgroundColor: 'white',
    borderRadius: 5,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  baseimage: {
    marginTop: 5,
    height: '100%',
    alignItems: 'flex-end',
  },
  baseimage_image: {
    width: 239,
    height: 120,
  },
});
export default LoginScreen;
