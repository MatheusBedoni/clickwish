import React, { Component } from 'react'
import { View , StyleSheet , Image , FlatList , Dimensions , TouchableOpacity } from 'react-native'
import { Header , Avatar , Nome , Post , PostImage } from './styles'

const numColumns = 2;

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};
export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
        search: '',
        data: [
          { id: "00", name: "Relâmpago McQueen", img :require("../assets/casamento1.jpg")},
          { id: "01", name: "Agente Tom Mate",img:require("../assets/casamento2.jpg")},
          { id: "02", name: "Doc Hudson", img:require("../assets/casamento3.jpg") },
          { id: "03", name: "Cruz Ramirez", img:require("../assets/casamento4.jpg") },
          { id: "04", name: "Doc Hudson", img:require("../assets/casamento3.jpg") },
          { id: "05", name: "Cruz Ramirez", img:require("../assets/casamento4.jpg") },
          { id: "06", name: "Doc Hudson", img:require("../assets/casamento3.jpg") },
        ]
      };
    }
    
      updateSearch = search => {
        this.setState({ search });
      };
      render() {
        const search  = this.state.search;
        return(
         <View style={{flex: 1,backgroundColor: '#0F0F13'}}>
             <Header>
             <Image  source={require('../assets/logo.png')} />
            <Avatar  style={{ justifyContent: 'flex-end'}} source={require('../assets/not_folder/ativo.png')} />
            </Header>
            <FlatList
            style={styles.container}
            data={formatData(this.state.data, numColumns)}
            numColumns={numColumns}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.itemm}
                onPress={
                  () => this.props.navigation.navigate("Post")
                 } >
                  <PostImage  style={styles.item} source={require('../assets/casamento6.jpg')}/>
                </TouchableOpacity>
            )}
            />
         </View>
        );
       }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width:Dimensions.get('window').width / numColumns,
    height: Dimensions.get('window').width / numColumns,
    marginRight: 25,
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
  item: {
    flexBasis: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    borderRadius: 10,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemm: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    marginRight: 5,
    marginLeft: 5,
    height: Dimensions.get('window').width / numColumns, // approximate a square
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    borderRadius: 20,
    marginTop: 5,
    borderColor: '#ddd',
  },
});