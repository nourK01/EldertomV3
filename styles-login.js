import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  form_main: {
    width: 320,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 30,
    borderRadius: 30,
    boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.062)',
  },
  heading: {
    fontSize: 20,  // Adjust as needed
    color: '#2e2e2e',
    fontWeight: '700',
    margin: '15px 0 30px 0',
  },
  inputContainer: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',  // React Native flexDirection is 'row' by default
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputIcon: {
    position: 'absolute',
    left: 10,
  },
  inputField: {
    width: '100%',
    height: 40,
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(173, 173, 173)',
    borderRadius: 30,
    marginVertical: 10,
    color: 'black',
    fontSize: 14,  // Adjust as needed
    fontWeight: '500',
    paddingLeft: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 2,
    backgroundColor: '#53ddaa',
    height: 40,
    color: 'white',
    fontSize: 20,  // Adjust as needed
    fontWeight: '500',
    letterSpacing: 1,
    borderRadius: 30,
    borderColor:'#474553',
    marginVertical: 10,
    overflow: 'hidden',
  },
  signupContainer: {
    marginTop:15,
    margin: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  
  },
  signupText: {
    fontSize: 15,  // Adjust as needed
    fontWeight: '500',
    color: 'black',
  },

  remindMe: {

    color: '#ffffff',
  },
  signupLink: {
    marginVertical: 10,
    marginTop:20,
    borderRadius: 50,
    borderWidth: 1,
    fontSize: 12,  // Adjust as needed
    fontWeight: '500',
    backgroundColor: '#2e2e2e',
    borderColor: '#000000',
    textDecorationLine: 'none',  // React Native uses textDecorationLine
    paddingVertical: 8,
    paddingHorizontal: 15,
   
  },
});

export default styles;
