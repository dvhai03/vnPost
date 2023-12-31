/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
*/

import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import commonStyles from '../../../style/style';
import IconNotifi from '../../../../asset/svg/iconNotifi2';
import IconQR from '../../../../asset/svg/iconQR2';
import { Divider } from 'react-native-paper';
import Arow from '../../../../asset/svg/Configuration/arow';

import IconHotro from '../../../../asset/svg/Support/iconHotro2';
import IconThuVien from '../../../../asset/svg/Support/iconThuVien';
import IconManagerSupport from '../../../../asset/svg/Support/iconManagerSupport';
import ViewRowOnpress from '../../../components/ListTileVIew';

export type RootStackParamList = {
    Login: undefined,
    Sigup: undefined,
    Authenphone: undefined,
    ChooseOrganization: undefined,
    ForgetPhone: undefined,
    ForgetPhone2: undefined,
    ChangePass: undefined,
    Home: undefined,
    Notification: undefined
};
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};
const RootStack = createStackNavigator<RootStackParamList>();
function Support(): JSX.Element {


    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={commonStyles.tool_bar}>
                <Text style={[commonStyles.text_20, { width: '75%' }]}>Hỗ trợ   </Text>

                <TouchableOpacity style={{ marginHorizontal: 20 }}>
                    <IconQR />
                </TouchableOpacity>
                <TouchableOpacity>
                    <IconNotifi />
                </TouchableOpacity>

            </View>
            <View style={{ width: '100%', padding: 15, height: '30%', backgroundColor: '#FFFFFF', marginTop: 20 }}>
                <ViewRowOnpress
                    iconLeft={Arow}
                    height='35%'
                    iconRight={IconManagerSupport}
                    title='Quản lí yêu cầu hỗ trợ'
                />


                <ViewRowOnpress
                    iconLeft={Arow}
                    iconRight={IconThuVien}
                    height='35%'
                    title='Trung tâm hỗ trợ'
                />



                <ViewRowOnpress
                    iconLeft={Arow}
                    iconRight={IconHotro}
                    height='35%'
                    title='Trung tâm hỗ trợ'
                    isDiver={false}
                />
            </View>


        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#F3F3F3',
        alignItems: 'center'
    },
    view: {
        width: '100%',
        marginVertical: 25
    },

});

export default Support;
