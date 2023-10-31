import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, TabActions, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Oder from './Oder';
import Configuration from './Configuration';

import Add from '../../../../asset/svg/add';
import Support from './Support';
import You from '.././User/You';

import IconDonHang from '../../../../asset/svg/iconDonHang';
import IconDonHang2 from '../../../../asset/svg/iconDonHang2';
import CauHinh from '../../../../asset/svg/cauHinh';
import CauHinh2 from '../../../../asset/svg/cauHinh2';
import IconHotro from '../../../../asset/svg/iconHotro';
import IconHotro2 from '../../../../asset/svg/iconHotro2';
import IconCanhan from '../../../../asset/svg/iconCanhan';
import IconCanhan2 from '../../../../asset/svg/iconCanhan2';
import FBottomSheet from '../../../components/BottomSheetBar';
import Out from '../../../../asset/svg/delete';
import commonStyles from '../../../style/style';
import { Divider } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Login: undefined,
    Sigup: undefined,
    Authenphone: undefined,
    ChooseOrganization: undefined,
    ForgetPhone: undefined,
    ForgetPhone2: undefined,
    ChangePass: undefined,
    Home: undefined,
    CreateOrders: undefined
};
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};
const Tab = createBottomTabNavigator();

function MyTabs() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [isFBottomSheet, setFBottomSheer] = React.useState(false);
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarLabel: route.name,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Đơn hàng') {
                            iconName = focused
                                ? <IconDonHang />
                                : <IconDonHang2 />;
                        } else if (route.name === 'Home') {
                            iconName = focused
                                ? <Add />
                                : <Add />;
                        }
                        else if (route.name === 'Cấu hình') {
                            iconName = focused
                                ? <CauHinh />
                                : <CauHinh2 />;
                        }
                        else if (route.name === 'Hỗ trợ') {
                            iconName = focused
                                ? <IconHotro />
                                : <IconHotro2 />;
                        } else {
                            iconName = focused
                                ? <IconCanhan />
                                : <IconCanhan2 />;
                        }
                        return iconName;
                    },
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        fontSize: 14,
                    },
                    tabBarActiveTintColor: 'rgba(251, 175, 23, 1)',
                    tabBarInactiveTintColor: 'rgba(191, 191, 191, 1)',
                })}




            >
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Đơn hàng"
                    component={Oder}
                />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Cấu hình"
                    component={Configuration}
                />
                <Tab.Screen
                    name="Home"
                    component={Oder}
                    options={{
                        headerShown: false,
                        tabBarLabel: () => null,
                        tabBarButton: (props) => (
                            <TouchableOpacity style={{ marginBottom: 5, marginHorizontal: 20 }} onPress={() => {
                                setFBottomSheer(!isFBottomSheet);
                            }}>
                                {props.children}
                            </TouchableOpacity>
                        ),
                    }}
                />

                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Hỗ trợ"
                    component={Support} />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Cá nhân"
                    component={You}

                />

            </Tab.Navigator>
            <FBottomSheet
                isVisible={isFBottomSheet}
                style={{ height: '30%' }}
                children={
                    <View style={{ width: '100%', alignItems: 'center', padding: 10 }}>
                        <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { setFBottomSheer(!isFBottomSheet) }}>
                                <Out />
                            </TouchableOpacity>

                            <View style={{ width: '85%', marginHorizontal: 15, alignItems: 'center' }}>
                                <Text style={commonStyles.text_16}>Hành động</Text>
                            </View>

                        </View>
                        <View style={{ width: '100%' }}>
                            <Divider style={{ marginVertical: 15 }} />
                            <TouchableOpacity style={{ width: '100%', padding: 5, marginLeft: 10 }}>
                                <Text style={commonStyles.text_14}>Tạo yêu cầu hỗ trợ</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '100%' }}>
                            <Divider style={{ marginVertical: 15 }} />
                            <TouchableOpacity style={{ width: '100%', padding: 5, marginLeft: 10 }}
                                onPress={() => { navigation.navigate('CreateOrders') }}
                            >
                                <Text style={commonStyles.text_14}>Tạo đơn hàng</Text>
                            </TouchableOpacity>
                        </View>


                    </View>}
                closeModal={() => { setFBottomSheer(!isFBottomSheet) }}
            />
        </View>

    );
}

export default function Home() {
    return (
        <MyTabs />
    );
}
