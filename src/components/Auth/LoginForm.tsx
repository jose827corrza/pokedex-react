import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'

import useAuth from '../../hooks/useAuth'

const fakeData = {
  email: 'jose@mail.com',
  password: '123456'
}
export default function LoginForm() {
  const {auth, login} = useAuth()
  console.log(useAuth());
  

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState<string | null>(null)

  const handleLogIn = () => {
    console.log('Entrando');
    if (email == '' || password == ''){
      setError('Email or password incorrect')
      setTimeout(() => {
        setError(null)
      }, 2500);
    }
    if(email === 'jose96corrza@gmail.com' && password === 'developer'){
      login!({ email: 'jose@mail.com', firstName: 'Jose', lastName: 'Corredor', userName: 'devMan'})
    }
  }
  return (
    <View>
      <Text style={styles.title}>Insert your credentials</Text>
      <TextInput 
        style={styles.input} 
        placeholder={'Type your email'}
        autoCapitalize='none'
        onChangeText={setEmail}
        value={email}
      />
      <TextInput 
        style={styles.input} 
        placeholder={'Type your email'}
        autoCapitalize='none'
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />


      <Pressable style={styles.button} onPress={handleLogIn}>
          <Text> Log in</Text>
      </Pressable> 
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    textAlign: 'center',
    fontsize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button:{
    backgroundColor: '#a6a6a6',
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius:  4,
    elevation: 3,
    marginHorizontal: 100
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
})