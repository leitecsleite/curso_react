import React, {useState} from 'react'; 
import {View, Text, StyleSheet,SafeAreaView , StatusBar,
TouchableOpacity , FlatList , Modal}  from 'react-native'

import {Ionicons} from'@expo/vector-icons';
import TaskList from './src/components/TaskList/index.js';
import * as Animatable from 'react-native-animatable';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App(){

     const [task , setTask] = useState ([
       {key: 1, task : 'Comprar pao'},
       {key: 2, task : 'Ir para academia'},
       {key: 3, task : 'Fazer os exercícios da faculdade'},
       {key: 4, task : 'Comprar chocolate com Coca Cola'},
       {key: 5, task : 'Assistir Algum vídeo no Youtube'},

      ]);

      const [open, setOpen] = useState(false);

    return (
      <SafeAreaView style = {styles.container}>
        <StatusBar backgroundColor = '#a171d31' border = 'light'/>

        <View style = {styles.content}> 
        <Text style = {styles.title}>Minhas Tarefas</Text>
        </View>
        
        {/* Aqui vai a lista */}


      <FlatList 
       marginHorizontal = {10}
       showsHorizontalScrollIndicator = {false}
       data ={task}
       keyExtractor = {(item) => String(item.key)}
       renderItem ={({item}) => <TaskList data ={item}/>}
      />

       <Modal animationType ="slide"  transparent = {false} visible ={open}>
          <SafeAreaView>
            <Text> modal 123</Text>
          </SafeAreaView>
       </Modal>




      <AnimatedBtn
       style = {styles.fab}
       useNativeDriver 
       animation = 'bounceInUp'
       durantion = {1500}
        onPress = {() => setOpen(true)}
       >

         <Ionicons name = "ios-add" size  ={35} color = "#fff" />
      </AnimatedBtn>


      </SafeAreaView>
    )
}

const styles  = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#171D31', 
      
    }, 
    title:{
      marginTop: 10 , 
      paddingBottom: 10 , 
      fontSize: 30, 
      textAlign: 'center',
      color: '#fff', 
    }, 
    fab:{
      position: "absolute", 
      width: 60,
      height:60, 
      backgroundColor:'#0094FF',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30, 
      right: 25,
      bottom: 25, 
      elevation: 2,
      zIndex: 9,
      shadowColor: '#000', 
      shadowOpacity: 0.2, 
      shadowOffset:{
        width: 1, 
        height:3, 
      }


    }

})