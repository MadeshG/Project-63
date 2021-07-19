import React, { Component } from 'react';
import { StyleSheet, Text, View, Header, TextInput,TouchableOpacity} from 'react-native';
import dictionary from'../database'
export default class Homescreen extends Component{
    constructor(){
        super()
        this.state ={
            text:'',
            isSearchPressed:false,
            isLoading:false,
            word:"loading",
            lexicalCategory:'',
            definition:""

        }
    }
        getWord=(text)=>{
   var text=text.toLowerCase()
   try{
     var word=dictionary[text]["word"]
     var lexicalCategory=dictionary[text]["lexicalCategory"]
     var definition = dicitionary[text]["definition"]
     this.setState({
       "word":word,
       "lexicalCategory":lexicalCategory,
      "definition":definition
     })
   }
   catch(err){
    alert("sorry this word is not avalible right now")
    this.setState({
      'text':'',
      "isSearchPressed":false
    })
   }
        }
    render(){
      
        return(
          <View>
              <Header
              backgroundColor={'red'}
              centerComponent={{
                  text:'Dictionary',
                  style:{color:'blue',fontSize:20}
              }}
              />
              <TextInput
              onChangeText={text=>{
                    this.setState({
                        text:text,
                        isSeachedPressed:false,
                        word:"Loading...",
                        lexicalCategory:'',
                        examples:[],
                        definition:""
                    })
              }}
              value={this.state.text}
              />
              <TouchableOpacity
              style={styles.searchButton}
              onPress={()=>{
                  this.setState({ isSeachedPressed:true})
                  this.getWord(this.state.text)
              }} >

              </TouchableOpacity>
              <View style={styles.outputContainer}>
        <Text style={{fontsize:20}}>
        {
          this.state.isSearchPressed&&this.state.word==="Loading..."
          ?this.state.word
          :""
        }
        </Text>
        
          this.state.word !=="Loading..."?{
        }
        <View style={{justifyContent:'center',marginLeft:10}}>
          <View style={styles.outputContainer}>
            <Text style={styles.detailsTitle}>
              word{""}
            </Text>
            <Text style={{fontSize:18}}>
              {this.state.word}
            </Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>
              Type:{""}
            </Text>
            <Text style={{fontSize:20}}>
              {this.state.lexicalCategory}
            </Text>
          </View>
        </View>
      </View>
          </View>  

          
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    inputBoxContainer: {
      flex:0.3,
      alignItems:'center',
      justifyContent:'center'
    },
    inputBox: {
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
    },
    searchButton: {
      width: '40%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderWidth: 2,
      borderRadius: 10,
    },
    searchText:{
      fontSize: 20,
      fontWeight: 'bold'
    },
    outputContainer:{
      flex:0.7,
      alignItems:'center'
    },
    detailsContainer:{
      flexDirection:'row',
      alignItems:'center'
    },
    detailsTitle:{
      color:'orange',
      fontSize:20,
      fontWeight:'bold'
    }
  });