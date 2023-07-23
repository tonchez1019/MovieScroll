import React, { useContext, useEffect, useState } from 'react'
import { TouchableOpacity, Image, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const NavBar = ({ opacity }) => {
    const navigation = useNavigation()

    return (
        <Header
            backgroundColor="#1E2747"
            barStyle="default"
            style={opacity}
            containerStyle={[{ height: 110 }]}
            leftContainerStyle={{ justifyContent: 'center' }}
            rightContainerStyle={{ justifyContent: 'center' }}
            leftComponent={
                <TouchableOpacity
                    onPress={() => navigation.navigate('LenguageScreen')}
                    style={{ position: 'absolute' }}>
                    <Icon
                        name='home'
                        size={25}
                        type='font-awesome'
                        color='white' />
                </TouchableOpacity>
            }
        />

    )
}

export default NavBar
