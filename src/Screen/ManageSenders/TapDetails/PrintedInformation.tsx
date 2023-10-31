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
import Cancle from '../../../../asset/svg/cancel';
import Option from '../../../../asset/svg/option';
import PopupMenu from '../../../../asset/svg/popupMenu';
import FBottomSheet from '../../../components/BottomSheetBar';
import Out from '../../../../asset/svg/delete';

export type RootStackParamList = {
    Login: undefined,
    Sigup: undefined,
    Authenphone: undefined,
    ChooseOrganization: undefined,
    ForgetPhone: undefined,
    ForgetPhone2: undefined,
    ChangePass: undefined,
    Home: undefined,
    Notification: undefined,
    PersonalInformation: undefined,
    EditPersonalInformation: undefined,
};
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};
const RootStack = createStackNavigator<RootStackParamList>();
function PrintedInformation(): JSX.Element {

    const [isFBottomSheet, setFBottomSheer] = useState(false);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ width: '100%', padding: 15, height: '30%' }}>





                <View style={styles.config}>
                    <Text style={[commonStyles.text_14, styles.text]}>Họ và tên in</Text>
                    <Text style={[commonStyles.text_14, styles.textRight]}>Nguyễn Văn A</Text>
                </View>
                <Divider style={{ marginVertical: 10 }} />



                <View style={styles.config}>
                    <Text style={[commonStyles.text_14, styles.text]}>Số điện thoại in</Text>
                    <Text style={[commonStyles.text_14, styles.textRight]}>0345784256</Text>
                </View>
                <Divider style={{ marginVertical: 10 }} />

                <View style={styles.config}>
                    <Text style={[commonStyles.text_14, styles.text]}>Địa chỉ in</Text>
                    <Text style={[commonStyles.text_14, styles.textRight]}>23 Minh Khai</Text>
                </View>
                <Divider style={{ marginVertical: 10 }} />



                <View style={styles.config}>
                    <Text style={[commonStyles.text_14, styles.text]}>Tỉnh/TP</Text>
                    <Text style={[commonStyles.text_14, styles.textRight]}>Hà Nội</Text>
                </View>
                <Divider style={{ marginVertical: 10 }} />

                <View style={styles.config}>
                    <Text style={[commonStyles.text_14, styles.text]}>Quận/Huyện</Text>
                    <Text style={[commonStyles.text_14, styles.textRight]}>Hai Bà Trưng</Text>
                </View>

                <Divider style={{ marginVertical: 10 }} />

                <View style={styles.config}>
                    <Text style={[commonStyles.text_14, styles.text]}>Phường/Xã</Text>
                    <Text style={[commonStyles.text_14, styles.textRight]}>Minh Khai</Text>
                </View>




            </View>

        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'rgba(243, 243, 243, 1)',
        alignItems: 'center'
    },
    config: {
        width: '100%',
        height: '25%',
        flexDirection: 'row',
        alignItems: 'center',

    },
    text: {
        marginHorizontal: 10,
        width: '40%',
        color: 'rgba(140, 140, 140, 1)'
    },
    divider: {
        backgroundColor: 'rgba(243, 243, 243, 1)',
        height: 1
    },
    textRight: {
        marginHorizontal: 10,
        width: '50%',
        color: 'rgba(38, 38, 38, 1)',
        textAlign: 'right',
        fontWeight: '800'
    },
});

export default PrintedInformation;
