import React, { memo, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { COLORS } from '../constants';
import { Loading } from '../components/Loading';
import { BASE_URL } from '../config/index';
import axios from "axios";
import { registrationNumberValidator, passwordValidator } from '../core/utils';
import { Error } from '../components/Error';
import { images } from '../constants';

// const Tab = createMaterialTopTabNavigator();

const LoginUser = ({ navigation }) => {
    const [registrationNumber, setRegistrationNumber] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const _onLoginPressed = async () => {
        const registrationNumberError = registrationNumberValidator(registrationNumber.value)
        const passwordError = passwordValidator(password.value);

        if (registrationNumberError || passwordError) {
            setRegistrationNumber({ ...registrationNumber, error: registrationNumberError })
            setPassword({ ...password, error: passwordError });
            return;
        }
        try {
            setLoading(true);
            const request = await axios.post(`${BASE_URL}/driver/signin`, {
                driver_id: registrationNumber.value,
                password: password.value
            })
                .then((res)=>   {
                    console.log(res.data.login.msg)
                    console.log('reg', registrationNumber.value)
                    if (res.data.login.msg == "Login Successful") {
                        console.log('here')
                        navigation.navigate('PushLocation', {
                            registration: registrationNumber.value
                        })
                        setRegistrationNumber({value: ''})
                        setPassword({value: ''})
                        setError('')
                    }
                    else {
                        setError("Invalid Credentials or Driver ID does not exist")
                    }
                }) 
            setLoading(false);
        } catch (e) {
            setError("Please check your network and try again",e);
            setLoading(false);
        }
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.container}>

                
                {/* <BackButton goBack={() => navigation.navigate('LandingScreen')} /> */}
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{
            width: '30%',
            height: '25%',
          }}
        />
                <TextInput
                    label="Driver id(e.g 11)"
                    returnKeyType="next"
                    value={registrationNumber.value}
                    onChangeText={text => setRegistrationNumber({ value: text, error: '' })}
                    error={!!registrationNumber.error}
                    errorText={registrationNumber.error}
                    
                />
                <TextInput
                    label="Password"
                    returnKeyType="done"
                    value={password.value}
                    onChangeText={text => setPassword({ value: text, error: '' })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                    outlineColor="#0d47a1"
                />

                <View style={styles.row}>
                    <Text style={styles.error}>{error}</Text>
                </View>
               
                <Button onPress={_onLoginPressed}>Login</Button>

            </View>
        <Loading loading={loading} />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 18,
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    label: {
        color: theme.colors.secondary,
        marginTop: 4
    },
    link: {
        fontWeight: 'bold',
        color: COLORS.darkblue,
        marginTop: 4
    },
    error: {
        color: "red"
    }
});

export default LoginUser;

