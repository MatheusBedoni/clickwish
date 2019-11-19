import React from 'react'
import { View , Image , StyleSheet , Dimensions , TouchableOpacity , ScrollView }  from 'react-native'
import { Header , Avatar , Avatar2, Nome , Post , PostImage , Viewcamera, Desc} from './styles'
import { Text } from 'galio-framework';


export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: require('../assets/casamento6.jpg'),
            pic:null
        };
      }
    render() {
    return(
       
            <ScrollView style={{flex: 1,backgroundColor: '#1C1C23'}}>
            <Header>
              <TouchableOpacity 
              onPress={
                () => this.props.navigation.goBack()
                 }>
              <Avatar  style={{ justifyContent: 'flex-end'}} source={require('../assets/leftarrow.png')} />
              </TouchableOpacity>
           
            <Avatar  style={{ justifyContent: 'flex-end'}} source={require('../assets/download.png')} />
            </Header>
            <Desc>
             <Avatar2  source={require('../assets/matheus.jpg')} />
             <Text p  color="#fff">Matheus</Text>
             </Desc>
            
            <Image  style={styles.item} source={this.state.avatarSource} />
           <View style={styles.container}>
               <Nome style={{ marginTop: 15, marginLeft:10,marginRight:10}}>
               Hello there, my sweet Blushers!

Love can drive you crazy, at times, but it also brings out the best in you. Take these Love-infused Templates with you anytime and don't forget to share your blushy-flushy feelings!
               </Nome>
           </View>
           </ScrollView>
       
    );
 }
}


const styles = StyleSheet.create({
    container: {
      backgroundColor:'#1C1C23',
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      flex:1,
    },
    texto: {
      marginLeft: 10,
      marginTop:10
    },
    containerStyle: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      marginRight: 5,
      marginTop: 5,
    },
    centro: {
        alignItems:'center',
        paddingHorizontal:5,
        marginTop: 15,
        justifyContent:'space-between'
    },
    item: {
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').width,
         borderTopLeftRadius:20,
      borderTopRightRadius:20,
        marginTop:15
    }
  });