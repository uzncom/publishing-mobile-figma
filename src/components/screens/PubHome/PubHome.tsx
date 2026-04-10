import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { pubHome, commons, fmFonts } from '../../../assets/css/common'

const PubHome = ({navigation}:any) => {
    return (
        <View style={[commons.vBox]}>
            <ScrollView>
                {/* 메인 */}
                <TouchableOpacity style={[pubHome.borderB]} onPress={() => navigation.navigate('MainHome')}>
                    <Text style={[fmFonts.bold,pubHome.pubHomeTextStyle]}>메인</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default PubHome;