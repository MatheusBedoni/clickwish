import React, { Component } from "react";
import { createAppContainer,  createSwitchNavigator , } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import home from "./Feed/index";
import addfoto from "./addFoto/index";
import notific from "./notific/index";
import postDetails from "./postDetails/index";
import {  Avatar2 } from './Feed/styles'



const TabNavigator = createBottomTabNavigator({
    Feed: {
      screen:home,
      navigationOptions: {
        tabBarLabel:" ",
        tabBarIcon: ({ tintColor }) => (
          <Avatar2   source={require('./assets/home_folder/inativo.png')} /> 
        )
       
      },
    },
    FotoAdd:{ 
      screen:addfoto,
      navigationOptions: {
        tabBarLabel:" ",
        tabBarIcon: ({ tintColor }) => (
          <Avatar2   source={require('./assets/focus.png')} />
        )
      },
    },
    Notificacoes:{ 
      screen:notific,
      navigationOptions: {
        tabBarLabel:" ",
        tabBarIcon: ({ tintColor }) => (
          <Avatar2   source={require('./assets/not_folder/inativo.png')} />
        )
      },
    }
  },
  {
    tabBarOptions : {
      style: {
        borderTopColor: '#000',
        borderColor:'#000',
        backgroundColor: '#000',
      }
    }
  });

  const navigator = createStackNavigator({
    Tab:{
      screen: TabNavigator,
      navigationOptions: {
        header: null
      }
    },
    Post: {
      screen: postDetails,
      navigationOptions: {
        header: null
      }
    },
  })

  export default createAppContainer(navigator);