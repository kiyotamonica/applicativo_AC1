
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaInicial'>
        <Stack.Screen name='TelaInicial' options={{title:'Welcome'}} component={TelaInicialScreen} />
        <Stack.Screen name='TelaLogin' options={{title:'Login'}} component={LoginScreen} />
        <Stack.Screen name='TelaCadastro' options={{title:'SingUp'}} component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const TelaInicialScreen = ({navigation})=>{
  return(
    <View style={styles.container}>
       <Image source={require('./assets/media/ichigo_vasto_lorde_fanart___bleach_by_darknieruu_dexsyui-fullview.jpg')} style={styles.img} />
      <Text style={styles.title}>Bem-vindo!</Text>
      <TouchableOpacity onPress={()=>{ navigation.navigate('TelaLogin') }} style={styles.btn}>
        <Text style={styles.txtbtn}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{ navigation.navigate('TelaCadastro') }} style={styles.btn}>
      <Text style={styles.txtbtn}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  )
}

const CadastroScreen = ({navigation})=>{
  return(
    <View style={styles.container}>
      <Image source={require('./assets/media/nel-chibi.png')} style={styles.img} />
      <Text style={styles.subtitle}>Tela de Cadastro!</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>{ navigation.navigate('TelaInicial') }} >
      <Text style={styles.txtbtn}>Voltar para Bem-vindo</Text>
      </TouchableOpacity>
    </View>
  )
}

const LoginScreen = ({navigation})=>{
  return(
    <View style={styles.container}>
      <Image source={require('./assets/media/murcielago.jpg')} style={styles.img} />
      <Text style={styles.subtitle}>Tela de Login!</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>{ navigation.navigate('TelaInicial') }}>
        <Text style={styles.txtbtn}>Voltar para Bem-vindo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:36,
    fontWeight: 'bold'
  },
  subtitle:{
    fontSize:25,
    fontWeight: '300'
  },
  btn:{
    fontSize:40,
    backgroundColor:'#2596be',
    padding:7,
    margin:10,
    borderRadius:3
  },
  txtbtn:{
    color:'#fff',
    fontWeight:'600'
  },
  img:{
    width:200,
    height:200,
    marginBottom:30
  }
});