import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { commons, fmFonts, commCon, fontColor, snackBar } from '../../../assets/css/common'
import { main, coachmark, DJBank } from '../../../assets/css/contents'
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

// 이미지 호출
import logo_forme_24_bk_enabled from '../../../assets/imgs/bg/logo_forme_24_bk_enabled3x.png';                     // 로고
import menu_outlined_bd_24_bk_enabled from '../../../assets/imgs/ico/ic_menu_outlined_bd_24_bk_enabled3x.png';     // 메뉴 enabled
import menu_outlined_bd_24_bk_pressed from '../../../assets/imgs/ico/ic_menu_outlined_bd_24_bk_pressed3x.png';     // 메뉴 pressed
import menu_outlined_bd_24_bk_disabled from '../../../assets/imgs/ico/ic_menu_outlined_bd_24_bk_disabled3x.png';   // 메뉴 disabled
import character_morning_176 from '../../../assets/imgs/bg/img_character_morning_1763x.png';                       // 캐릭터 이미지
import company_outlined_18_wh_enabled from '../../../assets/imgs/ico/ic_company_outlined_18_wh_enabled3x.png';     // 회사 아이콘
import user_check_filled_48_enabled from '../../../assets/imgs/ico/ic_user_check_filled_48_enabled3x.png';         // 출퇴근체크
import user_check_filled_48_disabled from '../../../assets/imgs/ico/ic_user_check_filled_48_disabled3x.png';       // 출퇴근체크
import company_time_filled_48_enabled from '../../../assets/imgs/ico/ic_company_time_filled_48_enabled3x.png';     // 근무시간동의
import company_time_filled_48_disabled from '../../../assets/imgs/ico/ic_company_time_filled_48_disabled3x.png';   // 근무시간동의

import folder_user_filled_48_enabled from '../../../assets/imgs/ico/ic_folder_user_filled_48_enabled3x.png';       // 증명서관리
import user_time_filled_48_enabled from '../../../assets/imgs/ico/ic_user_time_filled_48_enabled3x.png';           // 근무시간
import user_time_filled_48_disabled from '../../../assets/imgs/ico/ic_user_time_filled_48_disabled3x.png';         // 근무시간 disabled
import briefcase_filled_48_enabled from '../../../assets/imgs/ico/ic_briefcase_filled_48_enabled3x.png';           // 근태관리
import briefcase_filled_48_disabled from '../../../assets/imgs/ico/ic_briefcase_filled_48_disabled3x.png';         // 근태관리 disabled
import mail_open_pay_filled_48_enabled from '../../../assets/imgs/ico/ic_mail_open_pay_filled_48_enabled3x.png';   // 급여명세서
import calendar_filled_48_disabled from '../../../assets/imgs/ico/ic_calendar_filled_48_disabled3x.png';           // 휴가관리 disabled
import calendar_filled_48_enabled from '../../../assets/imgs/ico/ic_calendar_filled_48_enabled3x.png';             // 휴가관리
import computer_edu_filled_48_enabled from '../../../assets/imgs/ico/ic_computer_edu_filled_48_enabled3x.png';     // 법정의무교육 
import computer_edu_filled_48_disabled from '../../../assets/imgs/ico/ic_computer_edu_filled_48_disabled3x.png';   // 법정의무교육 disabled

import users_check_outlined_md_32_bk_enabled from '../../../assets/imgs/ico/ic_users_check_outlined_md_32_bk_enabled3x.png';    // 근무시간승인
import users_check_outlined_md_32_bk_disabled from '../../../assets/imgs/ico/ic_users_check_outlined_md_32_bk_disabled3x.png';  // 근무시간승인 disabled
import users_check_outlined_md_32_bk_pressed from '../../../assets/imgs/ico/ic_users_check_outlined_md_32_bk_pressed3x.png';    // 근무시간승인 pressed

import users_pen_outlined_md_32_bk_enabled from '../../../assets/imgs/ico/ic_users_pen_outlined_md_32_bk_enabled3x.png';       // 근태결재승인
import users_pen_outlined_md_32_bk_disabled from '../../../assets/imgs/ico/ic_users_pen_outlined_md_32_bk_enabled3x.png';      // 근태결재승인 disabled
import users_pen_outlined_md_32_bk_pressed from '../../../assets/imgs/ico/ic_users_pen_outlined_md_32_bk_pressed3x.png';       // 근태결재승인 pressed

import pocket_pay_coin_filled_48_enabled from '../../../assets/imgs/ico/ic_pocket_pay_coin_filled_48_enabled3x.png';          // 연말정산

import guide_80_enabled from '../../../assets/imgs/bg/img_guide_80_enabled3x.png';                                        // Forme 처음이신가요?
import chev_right_outlined_18_bk_enabled from '../../../assets/imgs/ico/ic_chev_right_outlined_18_bk_enabled3x.png';      // Forme 처음이신가요? 화살표

import error_circle_filled_24_ye_enabled from '../../../assets/imgs/ico/ic_error_circle_filled_24_ye_enabled3x.png';      // 스낵바 check
import home_circle_filled_48_bl_enabled from '../../../assets/imgs/ico/ic_home_circle_filled_48_bl_enabled3x.png';        // 홈

import coachmark_01_1_arr from '../../../assets/imgs/coachmark/coachmark_01_1_arr3x.png'; // 코치마크 화살표
import coachmark_01_2_arr from '../../../assets/imgs/coachmark/coachmark_01_2_arr3x.png'; // 코치마크 화살표
import coachmark_01_3_arr from '../../../assets/imgs/coachmark/coachmark_01_3_arr3x.png'; // 코치마크 화살표
import checkbox_unselected_24_enabled from '../../../assets/imgs/ico/checkbox_unselected_24_enabled3x.png'; // 체크 unselected
import checkbox_selected_24_enabled from '../../../assets/imgs/ico/checkbox_selected_24_enabled3x.png'; // 체크 selected
import close_outlined_bd_24_wh_enabled from '../../../assets/imgs/ico/ic_close_outlined_bd_24_wh_enabled3x.png'; // 코치마크 닫기
import attnBl from '../../../assets/imgs/ico/ic_circle_attnBl2x.png';


// DJ뱅크 티저 배너  
import djbank_mainBanner_img_bg from '../../../assets/imgs/temp/djbank_mainBanner_img_bg3x.png';      
import lg_djbank from '../../../assets/imgs/temp/lg_djbank3x.png';       
import lg_jejubank from '../../../assets/imgs/temp/lg_jejubank3x.png';  

// DJ뱅크 본편 배너 
import bank_img_bg from '../../../assets/imgs/bg/bank_img_bg3x.png'; 
import list_18_ic_chev_right_outlined_18_bk_enabled from '../../../assets/imgs/temp/list_18_ic_chev_right_outlined_18_bk_enabled3x.png';    

// 메인
const MainHome = () => {
    // pressed 상태값 예시
    const [isPressed, setIsPressed] = useState<{[key: number]: boolean}>({
        1: false,
        2: false,
    });

    const handleAppBarBtnPress = (btnId: number, isPressed: boolean) => {
        setIsPressed(prevState => ({
            ...prevState, [btnId]: isPressed
        }));
    }

    // 코치마크
    const coachmarkOn = false;

    return (
        <View style={[commons.flex1,main.mainWrap,commons.vBox,commCon.viewBg]}> 
            <ScrollView style={[commons.flex1,commons.vBox]}>
                <View style={[commons.vBox,main.headerBg]}>
                    {/* 로고 및 메뉴 */}
                    <View style={[main.logo,commons.hBox,commons.subAlignCenter]}>
                        <View style={[commons.flex1]}>
                            <Image style={[main.logoImg]} source={logo_forme_24_bk_enabled}/>
                        </View>
                        <LottieView
                            source={require('../lottieJson/btn_oneai.json')}
                            autoPlay={true} 
                            loop={false} 
                            style={{width:28, height:28, marginRight:16}}
                        />
                        <Image style={[commons.img24]} source={menu_outlined_bd_24_bk_enabled}/>
                    </View>    
                        
                    <View style={[commons.vBox]}>
                        <ImageBackground style={[commons.vBox,main.headerImgBg]} source={character_morning_176} resizeMode="cover"></ImageBackground>
                        {/* 사원명, 요일 */}
                        <View style={[commons.vBox]}>
                            <Text style={[fmFonts.normal,main.userName]}><Text style={[fmFonts.bold,fmFonts.f21]}>장더존 사원님,</Text> 안녕하세요.{"\n"}좋은 아침입니다.</Text>
                            <Text style={[fmFonts.normal,main.today]}>1월 31일 수요일</Text>
                        </View>

                        {/* 회사/근태적용 */}
                        <LinearGradient start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={['#5596ff', '#5b55f5']} style={[main.companyBox]}>
                            <View style={[commons.hBox,main.companyBoxPadding]}>
                                <View style={[commons.hBox,commons.flex1,commons.flexCenter]}>
                                    <Image style={[commons.img18]} source={company_outlined_18_wh_enabled}/>
                                    <Text style={[fmFonts.bold,commons.flex1,main.companyText]} numberOfLines={1} ellipsizeMode="tail">솔루션개발본부</Text>
                                </View>
                                <View style={[commons.vBox,main.companyApp]}>
                                    {/* 근태적용 */}
                                    <View style={[main.box,main.type1]}>
                                        <View style={[main.type1Bl]}></View>
                                        <Text style={[main.type1]}> 근태적용</Text>
                                    </View>
                                    {/* 근태미적용 */}
                                    {/* <View style={[main.box,main.type2]}>
                                        <View style={[main.type2Bl]}></View>
                                        <Text style={[main.type2]}> 근태미적용</Text>
                                    </View> */}
                                </View>
                            </View>
                        </LinearGradient>
                        
                        {/* 출퇴근체크/근무시간동의 */}
                        <View style={[main.workBox]}>
                            <View style={[commons.hBox]}>
                                {/* 기본 : main.attnBox / pressed : main.attnBoxPressed */}
                                <TouchableOpacity activeOpacity={1} style={[commons.hBox,commons.flex1,main.attnBoxPressed]}>
                                    <Image style={[commons.img48]} source={company_time_filled_48_enabled}/>
                                    <View style={[commons.vBox,commons.mainAlignCenter,commons.flex1]}>                        
                                        <Text style={[fmFonts.bold,main.attnBoxDt]}>출퇴근체크 <Image style={[main.attnBl]} source={attnBl} /></Text>
                                        <Text style={[fmFonts.normal,main.attnBoxDd]}>출근 미등록</Text>
                                    </View>                                  
                                </TouchableOpacity>  
                                <View style={[main.attnBoxLine]}></View>                              
                                <TouchableOpacity activeOpacity={1} style={[commons.hBox,commons.flex1,main.attnBox]}>
                                    <Image style={[commons.img48]} source={user_check_filled_48_enabled}/>
                                    <View style={[commons.vBox,commons.mainAlignCenter,commons.flex1]}> 
                                        <Text style={[fmFonts.bold,main.attnBoxDt]}>근무시간동의 <Image style={[main.attnBl]} source={attnBl} /></Text>
                                        <Text style={[fmFonts.normal,main.attnBoxDd]}>미동의 3건</Text>                                        
                                    </View>                                  
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* 출퇴근체크/근무시간동의 Disable */}
                        {/* <View style={[main.workBoxDisable]}>
                            <View style={[commons.hBox]}>
                                <TouchableOpacity activeOpacity={1} style={[commons.hBox,commons.flex1,main.attnBox]}>
                                    <Image style={[commons.img48]} source={company_time_filled_48_disabled}/>
                                    <View style={[commons.vBox,commons.mainAlignCenter,commons.flex1]}>                        
                                        <Text style={[fmFonts.bold,main.attnBoxDtDisable]}>출퇴근체크</Text>
                                        <Text style={[fmFonts.normal,main.attnBoxDdDisable]}>출근 미등록</Text>
                                    </View>
                                </TouchableOpacity> 
                                <View style={[main.attnBoxLine]}></View>                                 
                                <TouchableOpacity activeOpacity={1} style={[commons.hBox,commons.flex1,main.attnBox]}>
                                    <Image style={[commons.img48]} source={user_check_filled_48_disabled}/>
                                    <View style={[commons.vBox,commons.mainAlignCenter,commons.flex1]}> 
                                        <Text style={[fmFonts.bold,main.attnBoxDtDisable]}>근무시간동의</Text>
                                        <Text style={[fmFonts.normal,main.attnBoxDdDisable]}>미동의 3건</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View> */}

                    </View>                   
                </View>

                <View style={[main.mainCon]}>
                    {/* 메뉴 바로가기 */}
                    <View style={[commons.flex1,commons.hBox]}>
                        <View style={[commons.flex1,commons.vBox,commons.mr8]}>
                            {/* 증명서관리 */}
                            {/* Pressed 경우 : main.menuBox => main.menuBoxPressed */}
                            <TouchableOpacity activeOpacity={1} style={[commons.flex1,main.menuBoxPressed]}>
                                <Image style={[commons.img48,main.menuImg]} source={folder_user_filled_48_enabled}/>
                                <Text style={[fmFonts.bold,main.menuBoxDt]}>증명서관리</Text>
                                <Text style={[fmFonts.normal,main.menuBoxDd]}>제증명 서류 신청</Text>
                            </TouchableOpacity>
                            {/* 급여명세서 */}
                            <TouchableOpacity activeOpacity={1} style={[commons.flex1,main.menuBox,commons.mt8]}>
                                <Image style={[commons.img48,main.menuImg]} source={mail_open_pay_filled_48_enabled}/>
                                <View style={[commons.vBox]}>
                                    <Text style={[fmFonts.bold,main.menuBoxDt]}>급여명세서</Text>
                                    <View style={[main.menuBl]}></View>
                                </View>
                                <Text style={[fmFonts.normal,main.menuBoxDd]}>급여 공제액 확인</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[commons.flex2,commons.vBox]}>
                            <View style={[commons.flex1,commons.hBox]}>
                                {/* 근무시간 */}
                                <TouchableOpacity activeOpacity={1} style={[commons.flex1,main.menuBox,commons.mr8]}>
                                    <Image style={[commons.img48,main.menuImg]} source={user_time_filled_48_enabled}/>
                                    <Text style={[fmFonts.bold,main.menuBoxDt]}>근무시간</Text>
                                    <Text style={[fmFonts.normal,main.menuBoxDd]}>주/월간 근무 관리</Text>
                                </TouchableOpacity>

                                {/* disable => main.menuBoxDisable, main.menuBoxDtDisable, main.menuBoxDdDisable 스타일로 변경 */}
                                {/* 활성 : user_time_filled_48_disabled, 비활성 : user_time_filled_48_disabled */}
                                {/* <TouchableOpacity activeOpacity={1} style={[commons.flex1,main.menuBox,commons.mr8,main.menuBoxDisable]}>
                                    <Image style={[commons.img48,main.menuImg]} source={user_time_filled_48_disabled}/>
                                    <Text style={[fmFonts.bold,main.menuBoxDtDisable]}>근무시간</Text>
                                    <Text style={[fmFonts.normal,main.menuBoxDdDisable]}>주/월간 근무 관리</Text>
                                </TouchableOpacity> */}                                

                                {/* disable => main.menuBoxDisable, main.menuBoxDtDisable, main.menuBoxDdDisable 스타일로 변경 */}
                                {/* 활성 : briefcase_filled_48_enabled, 비활성 : briefcase_filled_48_disabled */}
                                {/* 근무시간 */}
                                <TouchableOpacity activeOpacity={1} style={[commons.flex1,main.menuBox]}>
                                    <Image style={[commons.img48,main.menuImg]} source={briefcase_filled_48_enabled}/>
                                    <Text style={[fmFonts.bold,main.menuBoxDt]}>근태관리</Text>
                                    <Text style={[fmFonts.normal,main.menuBoxDd]}>나의 근태 확인</Text>
                                </TouchableOpacity>
                            </View>
                            
                            {/* disable => main.menuBoxDisable, main.menuBoxDtDisable, main.menuBoxDdDisable 스타일로 변경 */}
                            {/* 활성 : calendar_filled_48_enabled, 비활성 : calendar_filled_48_disabled */}
                            
                            {/* 1단박스 - 휴가관리 */}                            
                            {/* <TouchableOpacity activeOpacity={1} style={[commons.flex2,main.menuBox,commons.mt8]}>                               
                                <Image style={[commons.img48,main.menuImg]} source={calendar_filled_48_enabled}/>
                                <Text style={[fmFonts.bold,main.menuBoxDt]}>휴가관리</Text>
                                <View style={[commons.hBox]}>
                                    <Text style={[fmFonts.normal,main.menuBoxDd]}>기본 연차 15일 제공</Text>
                                    <Text style={[fmFonts.normal,main.menuBoxLine]}>l</Text>
                                    <Text style={[fmFonts.normal,main.menuBoxDd,commons.pl4]}>잔여연차 4일</Text>
                                </View>
                            </TouchableOpacity> */}

                            {/* 2단박스 - 휴가관리, 법정의무교육  */}
                            <View style={[commons.flex1,commons.hBox,commons.mt8]}>
                                {/* 휴가관리 */}
                                <TouchableOpacity activeOpacity={1} style={[commons.flex1,main.menuBox,commons.mr8]}>
                                    <Image style={[commons.img48,main.menuImg]} source={user_time_filled_48_enabled}/>
                                    <Text style={[fmFonts.bold,main.menuBoxDt]}>휴가관리</Text>
                                    <Text style={[fmFonts.normal,main.menuBoxDd]}>잔여연차 4일</Text>
                                </TouchableOpacity>

                                {/* 법정의무교육 */}
                                <TouchableOpacity activeOpacity={1} style={[commons.flex1,main.menuBox]}>
                                    <Image style={[commons.img48,main.menuImg]} source={computer_edu_filled_48_enabled}/>
                                    <Text style={[fmFonts.bold,main.menuBoxDt]}>법정의무교육</Text>
                                    <Text style={[fmFonts.normal,main.menuBoxDd]}>교육수강 관리</Text>
                                </TouchableOpacity>
                            </View>                               
                        </View>
                    </View>

                    {/* 연말정산 */}
                    <TouchableOpacity activeOpacity={1} style={[commons.flex1,main.menuBox,commons.mt8]}>
                        <View style={[commons.hBox]}>
                            <View style={[commons.flex1]}>
                                <Image style={[commons.img48,main.menuImg]} source={pocket_pay_coin_filled_48_enabled}/>
                            </View>
                            <View style={[main.menuProgress]}>
                                <Text style={[main.menuProText]}>작성중</Text>
                            </View>
                        </View>    
                        <Text style={[fmFonts.bold,main.menuBoxDt]}>2024 연말정산</Text>
                        <View style={[commons.hBox]}>
                            <Text style={[fmFonts.normal,main.menuBoxDd]}>연말정산 자료입력기간</Text>
                            <Text style={[fmFonts.normal,main.menuBoxDay]}>2025.01.17 ~ 2025.01.22</Text>
                        </View>
                    </TouchableOpacity>
                    
                    {/* 승인 */}
                    <View style={[commons.hBox,commons.flex1,main.approval]}>                   
                        {/* 근무시간 승인 */}
                        <TouchableOpacity activeOpacity={1} style={[main.appBox]}>
                            <View>
                                <View style={[main.appBtnCnt]}>
                                    <Text style={[fmFonts.bold,main.appBtnCntNum]}>100</Text>
                                </View>
                                {/* 기본 : users_check_outlined_md_32_bk_enabled / disabled : users_check_outlined_md_32_bk_disabled / pressed : users_check_outlined_md_32_bk_pressed */}
                                <Image style={[commons.img32]} source={users_check_outlined_md_32_bk_enabled}/>
                            </View>
                            {/* 기본 : appText / disabled : appTextDisable / pressed : appTextPressed */}
                            <Text style={[fmFonts.medium,main.appText]}>근무시간 승인</Text>  
                        </TouchableOpacity>
                        
                        <View style={[main.appLine]}></View>
                        
                        {/* 근태결재 승인 */}
                        <TouchableOpacity activeOpacity={1} style={[main.appBox]}>
                            <View>
                                <View style={[main.appBtnCnt]}>
                                    <Text style={[fmFonts.bold,main.appBtnCntNum]}>6</Text>
                                </View>
                                {/* 활성 : users_pen_outlined_md_32_bk_enabled / disabled : users_pen_outlined_md_32_bk_disabled / pressed : users_pen_outlined_md_32_bk_pressed */}
                                <Image style={[commons.img32]} source={users_pen_outlined_md_32_bk_enabled}/>
                            </View>
                            {/* 기본 : appText / disabled : appTextDisable / pressed : appTextPressed */}
                             <Text style={[fmFonts.medium,main.appText]}>근태결재 승인</Text> 
                        </TouchableOpacity>                       
                    </View>

                    {/* 배너 */}
                    {/* Pressed 경우 : main.Banner => main.BannerPressed */}
                    <TouchableOpacity activeOpacity={1} style={[commons.hBox,main.Banner]}>
                        <Image style={[commons.img80]} source={guide_80_enabled}/>
                        <View style={[commons.vBox,commons.flex1,main.bannerText]}>
                            <Text style={[fmFonts.bold,main.bannerDt]}><Text style={[fontColor.blue]}>ForMe</Text>가 처음이신가요?</Text>
                            <Text style={[fmFonts.normal,main.bannerDd]}>ForMe 이용가이드에서 확인해보세요! </Text>
                        </View>
                        <Image style={[commons.img18]} source={chev_right_outlined_18_bk_enabled}/>
                    </TouchableOpacity>

                </View>
            </ScrollView>

            {/* 스낵바 */}
            {/* <View style={[commons.vBox,snackBar.snackBarWrap]}>
                <View style={[commons.hBox,commons.flex1,commons.subAlignCenter,snackBar.snackBarCon]}>
                    <Image style={[snackBar.snackBarIco,commons.img24]} source={error_circle_filled_24_ye_enabled}/>
                    <Text style={[fmFonts.normal,snackBar.snackBarTxt]}>
                        근태적용 회사만 사용 가능한 기능입니다.{"\n"}
                        ‘설정 {'>'} 회사 설정’에서 회사를 변경해주세요.
                    </Text>
                </View>
            </View> */}

            {/* DG Bank */}        
            {/* 티저 */}
            <TouchableOpacity activeOpacity={1} style={[DJBank.bannerBankWrap]}>
                <ImageBackground style={[commons.hBox,commons.flex1,DJBank.bannerBankBox]} source={djbank_mainBanner_img_bg} resizeMode="cover">   
                    <View style={[commons.vBox,commons.flex1]}>   
                        <View style={[commons.hBox]}>
                            <Image style={[DJBank.djbank59]} source={lg_djbank}/>
                            <Text style={[ DJBank.line]}></Text>
                            <Image style={[DJBank.jejubank56]} source={lg_jejubank}/>
                        </View>        
                        <Text style={[fmFonts.bold,DJBank.text]}>더존과 제주은행이 함께 <Text style={[DJBank.textBlue]}>새로운 금융</Text>을 시작합니다.</Text>
                    </View>       
                    <Image style={[commons.img18]} source={list_18_ic_chev_right_outlined_18_bk_enabled}/>  
                </ImageBackground>
            </TouchableOpacity>

            {/* 본편 */}
            <TouchableOpacity activeOpacity={1} style={[DJBank.bannerBankWrap]}>
                <ImageBackground style={[commons.hBox,commons.flex1,DJBank.bannerBox]} source={bank_img_bg} resizeMode="cover">   
                    <LottieView
                        source={require('../lottieJson/banner_img.json')}
                        autoPlay={true} 
                        loop={true} 
                        style={{width: 64, height: 64, marginTop:5}}
                    />
                    <View style={[commons.hBox,commons.flex1,DJBank.bannerTextBox]}>  
                        <Text style={[fmFonts.bold,DJBank.bannerText,commons.flex1]}>
                            김더존님을 위한 {"\n"}
                            <Text style={[DJBank.bannerBlueText]}>DJ Bank 금융서비스</Text> 
                            {" "}오픈!
                        </Text>
                        <Image style={[commons.img18]} source={list_18_ic_chev_right_outlined_18_bk_enabled}/>  
                    </View>    
                </ImageBackground>
            </TouchableOpacity>
             

            {/* 코치마크 */}
            {
                coachmarkOn ?
                <View style={[coachmark.dim]}>
                    {/* 메인 */}
                    <View style={[commons.mh16,commons.flexCenter,commons.flex1]}>
                        {/* unit01 */}
                        <View style={[{position:'absolute',top:'10%',left:0,right:0}]}>
                            {/* 근태 */}
                            <View style={[commons.subAlignEnd,coachmark.mainCon1,commons.hBox]}>
                                <View style={[commons.vBox,coachmark.mainCon1,commons.flex1,{left:10}]}>
                                    <Text style={[coachmark.coachTxt]}><Text style={[coachmark.coachTxtBold]}>나의 근태를 관리</Text>하기 위해서 <Text style={[coachmark.coachTxtBold]}>근태적용 여부</Text>를</Text>
                                    <Text style={[coachmark.coachTxt]}>확인해 주세요. 근태 관련 메뉴가 비활성화된 경우,</Text>
                                    <Text style={[coachmark.coachTxt]}>관리자에게 문의하세요.</Text>
                                </View>
                                <Image style={[coachmark.mainArr1,commons.img32,{top:20, right:'60%'}]} source={coachmark_01_1_arr}/>
                            </View>
                            <View style={[{top:30, height:56}]}>
                                <LinearGradient start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={['#5596ff', '#5b55f5']} style={[commons.hBox,main.companyBox]}>
                                    <Image style={[commons.img18]} source={company_outlined_18_wh_enabled}/>
                                    <Text style={[fmFonts.bold,commons.flex1,main.companyText]} numberOfLines={1} ellipsizeMode="tail">솔루션개발본부</Text>
                                    
                                    <View style={[commons.vBox,main.companyApp,{height:24}]}>
                                        <View style={[main.box,main.type1]}>
                                            <View style={[main.type1Bl]}></View>
                                            <Text style={[main.type1,{top:-1}]}> 근태적용</Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </View>
                            {/* 출퇴근체크/근무시간동의 */}   
                            <View style={[main.workBox,{top:30, left:0}]}>
                                <View style={[commons.hBox]}>
                                    <View style={[commons.hBox,commons.flex1,main.attnBox]}>
                                        <Image style={[commons.img48]} source={company_time_filled_48_enabled}/>
                                        <View style={[commons.vBox,commons.mainAlignCenter,commons.flex1]}>                        
                                            <Text style={[fmFonts.bold,main.attnBoxDt]}>출퇴근체크 <Image style={[main.attnBl]} source={attnBl} /></Text>
                                            <Text style={[fmFonts.normal,main.attnBoxDd]}>출근 미등록</Text>
                                        </View>                                       
                                    </View>  
                                    <View style={[main.attnBoxLine]}></View>                              
                                    <View style={[commons.hBox,commons.flex1,main.attnBox]}>
                                        <Image style={[commons.img48]} source={user_check_filled_48_enabled}/>
                                        <View style={[commons.vBox,commons.mainAlignCenter,commons.flex1]}> 
                                            <Text style={[fmFonts.bold,main.attnBoxDt]}>근무시간동의 <Image style={[main.attnBl]} source={attnBl} /></Text>
                                            <Text style={[fmFonts.normal,main.attnBoxDd]}>미동의 3건</Text>                                        
                                        </View>    
                                    </View>
                                </View>
                            </View>
                        
                            <View style={[commons.hBox,{top:35,left:0}]}>   
                                <View style={[commons.vBox,commons.flex1]}>   
                                    <Image style={[coachmark.mainImg2,{left:26}]} source={coachmark_01_2_arr}/>                         
                                    <View style={[commons.vBox,{left:8}]}>
                                        <Text style={[coachmark.coachTxt]}>이제 ForMe에서</Text>
                                        <Text style={[coachmark.coachTxt]}><Text style={[coachmark.coachTxtBold]}>출퇴근 체크</Text>를</Text>
                                        <Text style={[coachmark.coachTxt]}>할 수 있어요.</Text>
                                    </View>
                                </View>
                                <View style={[commons.subAlignEnd,commons.vBox]}>  
                                    <Image style={[coachmark.mainImg3,{right:29}]} source={coachmark_01_3_arr}/>                         
                                    <View style={[commons.vBox,{right:8, top:0}]}>
                                        <Text style={[coachmark.coachTxt,fmFonts.ar]}><Text style={[coachmark.coachTxtBold]}>나의 근무시간</Text>을 확인하고</Text>
                                        <Text style={[coachmark.coachTxt,fmFonts.ar]}>동의하거나 조정신청을 해보세요.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* 다시 보지 않기 */}
                    <View style={[commons.hBox,commons.subAlignCenter,coachmark.closeTextWrap]}>
                        <TouchableOpacity activeOpacity={1}>
                            {/* 체크 선택 : checkbox_selected_24_enabled, 체크 미선택 : checkbox_unselected_24_enabled */}
                            <Image source={checkbox_selected_24_enabled} style={[commons.img24]}/>
                        </TouchableOpacity>
                        <Text style={[coachmark.closeText]}>다시 보지 않기</Text>
                        <TouchableOpacity activeOpacity={1}>
                            <Image source={close_outlined_bd_24_wh_enabled} style={[commons.img24]}/>
                        </TouchableOpacity>
                    </View>
                </View>
                : null
            }
        </View>       
    );
};

export default MainHome;