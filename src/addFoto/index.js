import React from 'react'
import { View , Image , StyleSheet , Dimensions , TouchableOpacity , ScrollView }  from 'react-native'
import { Header , Avatar , Nome , Post , PostImage , Viewcamera} from './styles'
import { Text } from 'galio-framework';
import ImagePicker from 'react-native-image-picker'

const options={
    title: 'Poste uma foto legal! :D',
    takePhotoButtonTitle: 'Tire uma foto com sua câmera',
    chooseFromLibraryButtonTitle: 'Escolher foto da sua galeria',
    }
export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: require('../assets/evapp.jpg'),
            pic:null
        };
      }
    getImage() {
        //alert(' button!')
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('Image Picker Error: ', response.error);
            }
        
            else {
              let source = { uri: response.uri };
        
              // You can also display the image using data:
              // let source = { uri: 'data:image/jpeg;base64,' + response.data };
              this.setState({
                avatarSource: source,
                pic:response.data
              });
        
            }
          });
      }
    render() {
    return(
        <ScrollView style={{flex: 1,backgroundColor: '#0F0F13'}}>
            
            <Header>
             <Image  source={require('../assets/logo.png')} />
                <Avatar  style={{ justifyContent: 'flex-end'}} source={require('../assets/not_folder/ativo.png')} />
            </Header>
            <View  style={styles.centro}>
            <Image  style={styles.item} source={this.state.avatarSource} />
            <Text style={styles.texto}h5 bold color="#fff">Tire uma foto pra aparecer no telão!</Text>
            <View style={styles.container}>
            <TouchableOpacity onPress={
                () => this.getImage()
               } 
              style={styles.centro}>
                <View style={styles.centro}>
                <Image  style={{width:35, height: 35}} source={require('../assets/cloud.png')} />
                <Text p  color="#fff"> Upload</Text>
                </View>
            </TouchableOpacity>
            
            </View>
            </View>
        </ScrollView>
    );
    }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    
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
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').width,
        
    }
  });