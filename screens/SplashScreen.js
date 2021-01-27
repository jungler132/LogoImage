import React, {Component} from 'react';
import {View, Animated, Easing , Text , Image} from 'react-native';
import LogoImage from './logoImage'


export default class SplashScreen extends React.Component{
    constructor(props) {

            super(props) 
            this.animatedValueLogo = new Animated.Value(0)

        }

        componentDidMount() {
            this.animate()
        }
        animate () {
        
            Animated.timing(
                this.animatedValueLogo,
                {
                    toValue:1,
                    duration:2000,
                    easing: Easing.cubic,
                    useNativeDriver:true
                }
            ).start()   
        }







        render() {
            const opacity = this.animatedValueLogo.interpolate({
                inputRange:[0 , 1],
                outputRange:[0 , 1]
            })
            return (
                <View style={{backgroundColor:"#004D61" , flex:1 , alignItems:"center" , justifyContent:"center"}}>
                    <Animated.View style={{opacity}}>
                        <LogoImage/>
                    </Animated.View>
                </View>
            )
        }
    }







