import { Platform, StatusBar } from 'react-native';
import { tokens } from "designcenter-figma";
import { getTokenFontStyle } from "../../utils/utils";

// 퍼블리싱 네비게이션
export const pubHome : any = {
    borderB : { borderBottomWidth:1, borderStyle:'solid', borderBottomColor:'#e6e6e6' }, // pubHome.borderB
    pubHomeTextStyle: { height:60, lineHeight:60, paddingLeft: 20, fontSize: 20, color:'#000000', textAlign: 'left' }, // pubHome.pubHomeTextStyle
}

// font 영역에 사용되는 클래스 
export const fmFonts : any = {
    normal: { ...getTokenFontStyle(tokens.fontWeight.regular), color: tokens.semantic.text.strong,fontSize:tokens.typo.caption.largeDefault.fontSize},   //fmFonts.normal
    bold: { ...getTokenFontStyle(tokens.fontWeight.bold), color: tokens.semantic.text.strong,fontSize:tokens.typo.caption.largeDefault.fontSize},        //fmFonts.bold
    medium: { ...getTokenFontStyle(tokens.fontWeight.medium), color: tokens.semantic.text.strong,fontSize:tokens.typo.caption.largeDefault.fontSize},    //fmFonts.medium

    al: { textAlign: 'left' },    //fmFonts.al
    ar: { textAlign: 'right' },   //fmFonts.ar
    ac: { textAlign: 'center' },  //fmFonts.ac
    f13: {fontSize:tokens.typo.body.xsmallDefault.fontSize},          //fmFonts.f13
    f14: {fontSize:tokens.typo.body.smallDefault.fontSize},          //fmFonts.f14
    f15: {fontSize:tokens.typo.body.mediumDefault.fontSize},          //fmFonts.f15
    f21: {fontSize: 21},          //fmFonts.f21
    f22: {fontSize:tokens.typo.title.largeStronger.fontSize},          //fmFonts.f22

    lh17: {lineHeight: 17},        //fmFonts.lh17
    lh18: {lineHeight:tokens.typo.body.xsmallDefault.lineHeight},        //fmFonts.lh18
}

// 공통
export const commons : any = {
    // **************************************************
    // flexBox 공통
    // **************************************************
    // 가로,세로 배치
    hBox : { flexDirection:'row' },
    vBox : { flexDirection:'column' },
    // 부모에 할당받은 공간 설정
    flex1 : { flex:1 },
    flex2 : { flex:2 },
    flex3 : { flex:3 },
    flex4 : { flex:4 },
    flex5 : { flex:5 },
    flex6 : { flex:6 },
    flex7 : { flex:7 },
    flexGlow1: { flexGrow:1 },
    // 주축 정렬
    mainAlignStart : { justifyContent:'flex-start' },
    mainAlignEnd : { justifyContent:'flex-end' },
    mainAlignCenter : { justifyContent:'center' },
    // 교차축 정렬
    subAlignStart : { alignItems:'flex-start' },
    subAlignEnd : { alignItems:'flex-end' },
    subAlignCenter : { alignItems:'center' },       // commons.subAlignCenter
    // 정렬
    flexCenter : { justifyContent:'center',alignItems:'center' },     // commons.flexCenter
    flexLeft : { justifyContent:'flex-start',alignItems:'center' },   // commons.flexLeft
    flexAlvm : {display:'flex', justifyContent:'center',alignItems:'center' },   // commons.flexAlvm

    // flex 줄바꿈
    flexWrap : { flexWrap:'wrap' },

    // gap
    gap2: {gap:2},
    gap4: {gap:4},
    gap6: {gap:6},
    gap8: {gap:8},
    gap10: {gap:10},
    gap12: {gap:12},
    gap20: {gap:20},
    gap22: {gap:22},

    // 마진, 패딩
    mt0 : {marginTop:0},          // commons.mt0
    mt4 : {marginTop:4},          // commons.mt4
    mt5 : {marginTop:5},          // commons.mt5
    mt6 : {marginTop:6},          // commons.mt6
    mt7 : {marginTop:7},          // commons.mt7
    mt8 : {marginTop:8},          // commons.mt8
    mt10 : {marginTop:10},        // commons.mt10
    mt12 : {marginTop:12},        // commons.mt12
    mt14 : {marginTop:14},        // commons.mt14
    mt16 : {marginTop:16},        // commons.mt16
    mt17 : {marginTop:17},        // commons.mt17
    mt18 : {marginTop:18},        // commons.mt18
    mt20 : {marginTop:20},        // commons.mt20
    mt22 : {marginTop:22},        // commons.mt22
    mt24 : {marginTop:24},        // commons.mt24
    mt27 : {marginTop:27},        // commons.mt27
    mt28 : {marginTop:28},        // commons.mt28
    mt30 : {marginTop:30},        // commons.mt30
    mt32 : {marginTop:32},        // commons.mt32
    mt36 : {marginTop:36},        // commons.mt36
    mt40 : {marginTop:40},        // commons.mt40
    mt48 : {marginTop:48},        // commons.mt48
    mt50 : {marginTop:50},        // commons.mt50
    mt56 : {marginTop:56},        // commons.mt56

    mr0 : {marginRight:0},        // commons.mr0
    mr2 : {marginRight:2},        // commons.mr2
    mr4 : {marginRight:4},        // commons.mr4
    mr8 : {marginRight:8},        // commons.mr8
    mr10 : {marginRight:10},      // commons.mr10
    mr12 : {marginRight:12},      // commons.mr12
    mr14 : {marginRight:14},      // commons.mr14
    mr16 : {marginRight:16},      // commons.mr16
    mr20 : {marginRight:20},      // commons.mr20
    mr21 : {marginRight:21},      // commons.mr21
    
    mb0 : {marginBottom:0},       // commons.mb0
    mb2 : {marginBottom:2},       // commons.mb2
    mb3 : {marginBottom:3},       // commons.mb3
    mb4 : {marginBottom:4},       // commons.mb4
    mb6 : {marginBottom:6},       // commons.mb6
    mb8 : {marginBottom:8},       // commons.mb8
    mb10: {marginBottom:10},      // commons.mb10
    mb12: {marginBottom:12},      // commons.mb12
    mb16: {marginBottom:16},      // commons.mb16
    mb22: {marginBottom:22},      // commons.mb22
    mb24: {marginBottom:24},      // commons.mb24
    mb32: {marginBottom:32},      // commons.mb32
    mb50: {marginBottom:50},      // commons.mb50
    mb108 : {marginBottom:108},   // commons.mb100

    ml0 : {marginLeft:0},         // commons.ml0
    ml2 : {marginLeft:2},         // commons.ml2
    ml4 : {marginLeft:4},         // commons.ml4
    ml6 : {marginLeft:6},         // commons.ml6
    ml8 : {marginLeft:8},         // commons.ml8
    ml10 : {marginLeft:10},       // commons.ml10
    ml14 : {marginLeft:14},       // commons.ml14
    ml16 : {marginLeft:16},       // commons.ml16
    ml18 : {marginLeft:18},       // commons.ml18
    ml21 : {marginLeft:21},       // commons.ml21

    mh16 : {marginHorizontal:16}, //commons.mh16
    mh20 : {marginHorizontal:20}, //commons.mh20
    mh24 : {marginHorizontal:24}, //commons.mh24

    mv12 : {marginVertical:12},   //commons.mv12

    p0 : {paddingTop:0, paddingRight:0, paddingBottom:0, paddingLeft:0}, // commons.p0
    p24 : {padding:24},           // commons.p24

    pl4 : {paddingLeft:4},        // commons.pl4
   
    pt0 : {paddingTop:0},         // commons.pt0
    pt4 : {paddingTop:4},         // commons.pt4
    pt8 : {paddingTop:8},         // commons.pt8
    pt10 : {paddingTop:10},       // commons.pt10
    pt16 : {paddingTop:16},       // commons.pt16
    pt20 : {paddingTop:20},       // commons.pt20
    pt24 : {paddingTop:24},       // commons.pt24
    pt30 : {paddingTop:30},       // commons.pt30
    pt32 : {paddingTop:32},       // commons.pt32
    pt56 : {paddingTop:56},       // commons.pt56
    
    pb0 : {paddingBottom:0},      // commons.pb0
    pb8 : {paddingBottom:8},      // commons.pb8
    pb16 : {paddingBottom:16},    // commons.pb16
    pb48 : {paddingBottom:48},    // commons.pb48

    ph10 : {paddingHorizontal:10},   // commons.ph10
    ph16 : {paddingHorizontal:16},   // commons.ph16
    ph20 : {paddingHorizontal:20},   // commons.ph20
    ph24 : {paddingHorizontal:24},   // commons.ph24
    
    pv10 : {paddingVertical:10},     // commons.pv10
    pv12 : {paddingVertical:12},     // commons.pv12
    pv16 : {paddingVertical:16},     // commons.pv16
    pv20 : {paddingVertical:20},     // commons.pv20
    pv24 : {paddingVertical:24},     // commons.pv24
    
    p16 : {paddingVertical:16,paddingHorizontal:16},   // commons.p16
    p20 : {paddingVertical:20,paddingHorizontal:20},   // commons.p20

    // position
    posi_re : {position:'relative'},
    posi_ab : {position:'absolute'},

    //border
    borderN:{borderWidth:0, borderStyle:'solid', borderColor:'rgba(0, 0, 0, 0)',},
    borderB:{borderBottomWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralDefault}, // commons.borderB
    borderBn:{borderBottomWidth:0}, // commons.borderBn

    // **************************************************
    // 이미지 사이즈
    // **************************************************
    img14 : {width:14,height:14},
    img18 : {width:18,height:18},
    img24 : {width:24,height:24},
    img32 : {width:32,height:32},
    img40 : {width:40,height:40},
    img48 : {width:48,height:48},
    img72 : {width:72,height:72},
    img80 : {width:80,height:80},
    img136 : {width:136,height:136},

    // **************************************************
    // 딤처리
    // **************************************************
    dim : {position:'absolute',top:0,left:0,right:0,bottom:0,backgroundColor:'rgba(0,0,0,0.5)'},

    // **************************************************
    // 개발소스 반영
    // **************************************************
    androidSafeArea: { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }
}

export const fontColor : any = {
    blue : {color:tokens.semantic.text.brandDefault},       //fontColor.blue
    gray : {color:tokens.semantic.text.subtlest},       //fontColor.gray
    lightGray : {color:tokens.semantic.text.disabledDefault},  //fontColor.lightGray
    red : {color:'#e65364'},        //fontColor.red
    yellow : {color:'#f29a4e'},     //fontColor.yellow
    white : {color:tokens.semantic.text.inverse},      //fontColor.white
}

// 컨텐츠 공통
export const commCon : any = {
    // **************************************************
    // view 공통
    // **************************************************
    viewBox: { paddingHorizontal: 24 },                                            // commCon.viewBox
    viewBg: { backgroundColor: tokens.semantic.bg.inverse},                                            // commCon.viewBg
    viewBgBlue: { position:'relative',backgroundColor: tokens.semantic.bg.accentBluegraySubtlest},                 // commCon.viewBgBlue
    viewStickyBg : {backgroundColor: tokens.semantic.bg.inverse, borderBottomWidth:1, borderStyle:'solid', borderBottomColor:tokens.semantic.border.neutralSubtler}, // commCon.viewStickyBg
    botSheetLine: {
        borderTopWidth:1, borderStyle:'solid', borderColor:'#f2f2f2',backgroundColor:tokens.semantic.bg.inverse,
        // box shadow
        shadowColor: "#000000",shadowOffset: {width: 0,height: -4},shadowOpacity: 0.02,elevation: 12

    },  // commCon.botSheetLine
    botSheetLineNoSd: {borderTopWidth:1, borderStyle:'solid', borderColor:'#f2f2f2',backgroundColor:tokens.semantic.bg.inverse}, // botSheetLine 쉐도우 없는 버전 (갤럭시 oneUi 5.0 이슈)
    bullet : {width:2, height:2, borderRadius:2, marginTop:(18 - 2) / 2, marginRight:4, backgroundColor:tokens.semantic.bg.accentBluegrayDefault}, // 불릿
    bulletText : {lineHeight:tokens.typo.body.xsmallDefault.lineHeight, letterSpacing: -0.18, color:tokens.semantic.text.subtle}, // 불릿텍스트

    // **************************************************
    // empty
    // **************************************************
    emptyText01 : { fontSize:tokens.typo.body.mediumDefault.fontSize, textAlign:'center', letterSpacing:-0.22, color:tokens.semantic.text.subtlest },   // commCon.emptyText01
    emptyText02 : { marginTop:4, fontSize:tokens.typo.body.xsmallDefault.fontSize, textAlign:'center', letterSpacing:-0.2, color:tokens.semantic.text.disabledStrong },    // commCon.emptyText02
    emptyTextBox : {marginHorizontal:24,padding:20,borderRadius:12, backgroundColor:tokens.semantic.bg.inverse},
    emptyTextTit : {marginBottom:6,...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight),fontSize:tokens.typo.caption.largeDefault.fontSize, textAlign:'left', letterSpacing:-0.18, color:tokens.semantic.text.default},
    emptyTextTxt : {marginTop:6,...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight),fontSize:tokens.typo.caption.largeDefault.fontSize, textAlign:'left', letterSpacing:-0.18, color:tokens.semantic.text.subtlest},

    // **************************************************
    // 탭
    // **************************************************
    contentsTabsWrap : {paddingBottom:16,backgroundColor:tokens.semantic.bg.inverse},
    contentsTabs : {borderBottomWidth:1, borderStyle:'solid', borderBottomColor:tokens.semantic.border.neutralSubtler,backgroundColor:tokens.semantic.bg.inverse},
    contentsTabItem : {height:40,marginHorizontal:24,borderBottomWidth:2, borderStyle:'solid', borderBottomColor:'transparent'},
    contentsTabItemOn : {height:40,marginHorizontal:24,borderBottomWidth:2, borderStyle:'solid', borderBottomColor:tokens.semantic.border.brandDefault},
    contentsTabItemOnPress : {height:40,marginHorizontal:24,borderBottomWidth:2, borderStyle:'solid', borderBottomColor:tokens.semantic.border.selectedPressed},
    contentsTabItemOnDisabled : {height:40,marginHorizontal:24,borderBottomWidth:2, borderStyle:'solid', borderBottomColor:tokens.semantic.border.selectedDisabled},
    contentsTabItemText : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight),fontSize:tokens.typo.body.largeDefault.fontSize, letterSpacing:-0.32, color:tokens.semantic.text.subtlest},
    contentsTabItemTextPress : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight),fontSize:tokens.typo.body.largeDefault.fontSize, letterSpacing:-0.32, color:tokens.semantic.text.subtle},
    contentsTabItemTextDisabled : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight),fontSize:tokens.typo.body.largeDefault.fontSize, letterSpacing:-0.32, color:tokens.semantic.text.disabledDefault},
    contentsTabItemTextOn : {...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), fontSize:tokens.typo.body.largeDefault.fontSize, letterSpacing:-0.32, color:tokens.semantic.text.brandDefault},
    contentsTabItemTextOnPress : {...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight),fontSize:tokens.typo.body.largeDefault.fontSize, letterSpacing:-0.32, color:tokens.semantic.text.selectedPressed},
    contentsTabItemTextOnDisabled : {...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight),fontSize:tokens.typo.body.largeDefault.fontSize, letterSpacing:-0.32, color:tokens.semantic.text.selectedDisabled},
    btnTabWrap : {marginTop:12, borderRadius:8, backgroundColor:tokens.semantic.bg.neutralSubtle},
    btnTabOn : {position:'absolute', top:0, left:0, bottom:0, right:0, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.brandDefault, borderRadius:8, backgroundColor:tokens.semantic.bg.selected},
    btnTabDisa : {position:'absolute', top:0, left:0, bottom:0, right:0, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.selectedDisabled, borderRadius:8, backgroundColor:tokens.semantic.bg.selected},
    btnTabText : {fontSize:tokens.typo.body.xsmallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), textAlign:'center', letterSpacing:-0.2, color:tokens.semantic.text.subtlest},
    btnTabTextDisa : {fontSize:tokens.typo.body.xsmallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), textAlign:'center', letterSpacing:-0.2, color:tokens.semantic.text.disabledDefault},
    btnTabTextOnDisa : {fontSize:tokens.typo.body.xsmallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), textAlign:'center', letterSpacing:-0.2, color:'#a1bff7'},
    tabNumBall : {justifyContent:'center',alignItems:'center', width:20, height:20, marginRight:6, borderRadius:30, backgroundColor:'#b0b5bf'},
    tabNumBallOn : {width:20, height:20, borderRadius:30, backgroundColor:tokens.semantic.bg.brandDefault},
    
    // **************************************************
    // 컴포넌트
    // **************************************************
    textInput :{...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight),marginTop:15, marginBottom:14, fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.23, color:tokens.semantic.text.strong, padding:0},
    textInputDisabled :{...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight),marginTop:15, marginBottom:14, fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.23, color:tokens.semantic.text.disabledDefault, padding:0},
    textArea :{...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight), fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21, color:tokens.semantic.text.strong},

    textInputWrap : {position:'relative'},
    textInputBox : {height:56,borderWidth:1,borderRadius:12,borderColor:tokens.semantic.border.neutralSubtle,paddingLeft:16,paddingRight:48,fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.23, color:tokens.semantic.text.strong},
    textInputBoxFocus : {borderColor:tokens.semantic.border.brandDefault},
    textInputBoxError : {borderColor:'#e65364'},
    textInputBoxDisa : {backgroundColor:tokens.semantic.bg.neutralSubtle},
    textInputBoxPw : {height:56,borderWidth:1,borderRadius:12,borderColor:tokens.semantic.border.neutralSubtle,paddingLeft:16,paddingRight:80,fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.23, color:tokens.semantic.text.strong},
    textInputBtn : {position:'absolute',top:15,right:0},

    textSearchWrap : {position:'relative'},
    textSearchBox : {height:48,borderWidth:1,borderRadius:12,borderColor:tokens.semantic.border.neutralSubtle,paddingLeft:16,paddingRight:80,fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.23, color:tokens.semantic.text.strong},
    textSearchBoxFocus : {borderColor:tokens.semantic.border.brandDefault},
    textSearchBtn : {position:'absolute'},

    // 스위치
    switchBox : {position:'relative',width:40,height:24,borderRadius:24,backgroundColor:'#d8dbe2'},
    switchBoxOn : {position:'relative',width:40,height:24,borderRadius:24,backgroundColor:tokens.semantic.bg.brandDefault},
    switchBoxDisabled : {position:'relative',width:40,height:24,borderRadius:24,backgroundColor:tokens.semantic.bg.brandSubtlest},
    switchBtn : {position:'absolute',top:2,left:2,width:20,height:20,borderRadius:20,backgroundColor:tokens.semantic.bg.inverse}, 
    switchBtnOn : {position:'absolute',top:2,right:2,width:20,height:20,borderRadius:20,backgroundColor:tokens.semantic.bg.inverse}, 
    switchBtnDisabled : {position:'absolute',top:2,right:2,width:20,height:20,borderRadius:20,backgroundColor:'rgba(255,255,255,0.74)'}, 

    smallSwitchBox : {position:'relative',width:32,height:18,borderRadius:18,backgroundColor:'#d8dbe2'},
    smallSwitchBoxOn : {position:'relative',width:32,height:18,borderRadius:18,backgroundColor:tokens.semantic.bg.brandDefault},
    smallSwitchBoxDisabled : {position:'relative',width:32,height:18,borderRadius:18,backgroundColor:tokens.semantic.bg.brandSubtlest},
    smallSwitchBtn : {position:'absolute',top:2,left:2,width:14,height:14,borderRadius:14,backgroundColor:tokens.semantic.bg.inverse}, 
    smallSwitchBtnOn : {position:'absolute',top:2,right:2,width:14,height:14,borderRadius:14,backgroundColor:tokens.semantic.bg.inverse}, 
    smallSwitchBtnDisabled : {position:'absolute',top:2,right:2,width:14,height:14,borderRadius:14,backgroundColor:'rgba(255,255,255,0.74)'}, 

    bigSwitchBox : {position:'relative',height:48,paddingHorizontal:4,paddingVertical:4,borderRadius:24,backgroundColor:tokens.semantic.bg.neutralDefault},
    bigSwitch_p : {position:'relative',height:'100%',borderRadius:20,backgroundColor:tokens.semantic.bg.neutralStrong},
    bigSwitchOn : {position:'relative',height:'100%',borderRadius:20,backgroundColor:tokens.semantic.bg.inverse,shadowColor: "#000000",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 },
    bigSwitchOn_d : {position:'relative',height:'100%',borderRadius:20,backgroundColor:tokens.semantic.bg.inverse},
    bigSwitchOn_p : {position:'relative',height:'100%',borderRadius:20,backgroundColor:tokens.semantic.bg.neutralSubtle,shadowColor: "#000000",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.29, shadowRadius: 4.65, elevation: 7},
    bigSwitchText : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight),fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.3,color:tokens.semantic.text.subtlest},
    bigSwitchText_d : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight),fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.3,color:tokens.semantic.text.disabledDefault},
    bigSwitchText_p : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight),fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.3,color:tokens.semantic.text.subtle},
    bigSwitchTextOn : {...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight),fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.23,color:tokens.semantic.text.brandDefault},
    bigSwitchTextOn_d : {...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight),fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.23,color:tokens.semantic.text.selectedDisabled},
    bigSwitchTextOn_p : {...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight),fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.23,color:tokens.semantic.text.selectedPressed},

    // 스크롤 탭
    scrollTabWrap : {borderBottomWidth:1, borderBottomStyle:'solid', borderBottomColor:tokens.semantic.border.neutralSubtler},
    scrollTab : {paddingTop:8, paddingBottom:13, marginHorizontal:12},
    scrollTabOn : {paddingTop:8, paddingBottom:13, marginHorizontal:12, borderBottomWidth:2, borderBottomStyle:'solid', borderBottomColor:tokens.semantic.border.brandDefault},
    scrollTabText : {fontSize:tokens.typo.body.largeDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight), letterSpacing:-0.32, color:tokens.semantic.text.subtlest},
    scrollTabTextOn : {fontSize:tokens.typo.body.largeDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), letterSpacing:-0.32, color:tokens.semantic.text.brandDefault},
    scrollTabTextDisabled : {fontSize:tokens.typo.body.largeDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), letterSpacing:-0.32, color:tokens.semantic.text.disabledDefault},

    // 첨부파일 경로
    breadcrumbsWrap : {paddingVertical:15,paddingHorizontal:20,rowGap:4,columnGap:4},
    breadcrumbsText : {fontSize:tokens.typo.body.mediumDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), letterSpacing:-0.23, color:tokens.semantic.text.subtle},
    breadcrumbsTextBold : {fontSize:tokens.typo.body.mediumDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), letterSpacing:-0.23, color:tokens.semantic.text.subtle},

    // 카운트가 있는 아이콘
    icoBtn : { position:'relative' },
    icoBtnCnt : { position:'absolute', top:-5, left:'50%', minWidth:12, height:12, borderRadius:12, backgroundColor:'#f56363' },
    icoBtnCntSmall : { position:'absolute', minWidth:12, height:12, borderRadius:12, backgroundColor:'#f56363' },
    icoBtnCntNum : { fontSize:tokens.typo.caption.smallStrong.fontSize, letterSpacing:-0.14, color:tokens.semantic.text.inverse, textAlign:'center',lineHeight:12 },

    // 첨부파일 미리보기
    filePreviewBg : {position:'relative',paddingTop:24,paddingHorizontal:24,backgroundColor:'rgba(0,0,0,0.4)',},
    filePreviewContents : {width:'100%',marginBottom:14,backgroundColor:tokens.semantic.bg.inverse},
    filePreviewNumBox : {position:'absolute',left:'50%',bottom:16,marginLeft:-25,width:100,height:24,borderRadius:24,backgroundColor:'rgba(36,40,51,0.8)',},
    filePreviewNumTxt : {fontSize:tokens.typo.caption.largeDefault.fontSize,letterSpacing:-0.18,color:tokens.semantic.text.inverse},
    fileFootBtn : { paddingTop:16,paddingBottom:24,paddingHorizontal:24, columnGap:8, backgroundColor: tokens.semantic.bg.inverse, borderTopWidth:1, borderStyle:'solid', borderColor:'#f2f2f2',shadowColor: "#000000",shadowOffset: {width: 0,height: -2},shadowOpacity: 0.07,elevation: 12 },

    // 캘린더
    calendarWrap : {position:'relative'},
    calenderFn : {marginTop:22},
    calendarDate : {fontSize:tokens.typo.title.smallStronger.fontSize,color:'#222222'},
    calendarCon : {marginTop:14},
    calendarHText : {height:24,lineHeight:tokens.typo.body.largeDefault.lineHeight,fontSize:tokens.typo.caption.largeDefault.fontSize,color:tokens.semantic.text.subtlest,textAlign:'center'},
    calendarTextBox : {position:'relative',height:48},
    calendarDText : {height:34,lineHeight:34,fontSize:tokens.typo.body.largeDefault.fontSize,color:tokens.semantic.text.strong,textAlign:'center'},
    calendarDTextDisabled : {height:34,lineHeight:34,fontSize:tokens.typo.body.largeDefault.fontSize,color:tokens.semantic.text.strong,textAlign:'center',opacity:0.3},
    calendarToday : {width:34,height:34,borderRadius:34,backgroundColor:tokens.semantic.bg.brandDefault},
    calendarSunday : {fontSize:tokens.typo.body.largeDefault.fontSize,color:'#e65364',textAlign:'center'},
    calendarSundayDisabled : {fontSize:tokens.typo.body.largeDefault.fontSize,color:'#e65364',textAlign:'center',opacity:0.3},
    calendarSatday : {fontSize:tokens.typo.body.largeDefault.fontSize,color:tokens.semantic.text.brandDefault,textAlign:'center'},
    calendarSatdayDisabled : {fontSize:tokens.typo.body.largeDefault.fontSize,color:tokens.semantic.text.brandDefault,textAlign:'center',opacity:0.3},

    calendarSelectWrap : {columnGap:-1},
    calendarSelect : {borderRadius:40,backgroundColor:'#e4f0f5',height:44,marginVertical:2},
    calendarSelectPress : {borderRadius:40,backgroundColor:'#d3d8de',height:44,marginVertical:2},
    calendarSelectStart : {borderTopLeftRadius:40,borderBottomLeftRadius:40,backgroundColor:'#e4f0f5',height:44,marginVertical:2},
    calendarSelectStartPress : {borderTopLeftRadius:40,borderBottomLeftRadius:40,backgroundColor:'#ebeef2',height:44,marginVertical:2},
    calendarSelectMiddle : {borderRadius:0,backgroundColor:'#e4f0f5',height:44,marginVertical:2},
    calendarSelectMiddlePress : {borderRadius:0,backgroundColor:'#ebeef2',height:44,marginVertical:2},
    calendarSelectEnd : {borderTopRightRadius:40,borderBottomRightRadius:40,backgroundColor:'#e4f0f5',height:44,marginVertical:2},
    calendarSelectEndPress : {borderTopRightRadius:40,borderBottomRightRadius:40,backgroundColor:'#ebeef2',height:44,marginVertical:2},
    
    calendarDTextToday : {height:34,lineHeight:34,fontSize:tokens.typo.body.largeDefault.fontSize,color:tokens.semantic.text.inverse,textAlign:'center'},
    calendarEventDay : {position:'absolute',top:12,right:'45%',marginRight:-10,width:4,height:4,borderRadius:4,backgroundColor:'#f56363'},

    // 라디오버튼
    radioSelectItemText : {fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.23},
    radioText : {fontSize:tokens.typo.body.smallDefault.fontSize,letterSpacing:-0.21},
    radioSubText : {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.subtlest},

    // 체크박스
    checkText : {fontSize:tokens.typo.body.mediumDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), letterSpacing:-0.23, color:tokens.semantic.text.strong},
    checkTextDisabled : {fontSize:tokens.typo.body.mediumDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), letterSpacing:-0.23, color:tokens.semantic.text.disabledStrong},
    
    // 폼
    formBl1: {borderLeftWidth:1, borderStyle:'solid', borderColor:'#e1e3e6'},
    formBt1: {borderTopWidth:1, borderStyle:'solid', borderColor:'#e1e3e6'},
    formBr1: {borderRightWidth:1, borderStyle:'solid', borderColor:'#e1e3e6'},
    formBb1: {borderBottomWidth:1, borderStyle:'solid', borderColor:'#e1e3e6'},
    formTh: {paddingVertical:12, paddingHorizontial:10, backgroundColor:tokens.semantic.bg.neutralSubtle},
    formThText: {textAlign:'center', fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.default},
    formTd: {paddingVertical:14, paddingHorizontial:12, backgroundColor:tokens.semantic.bg.inverse},
    formTdText: {textAlign:'center', fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.subtle, lineHeight:tokens.typo.body.smallDefault.lineHeight},

    // **************************************************
    // 버튼
    // **************************************************
    //Large (56)
    btn_Large : {fontSize:tokens.typo.body.mediumDefault.fontSize, borderRadius:12, letterSpacing: -0.23, textAlign: 'center', textAlignVertical:'center', justifyContent: 'center', alignItems: 'center', minHeight:56, lineHeight:56, paddingHorizontal:24}, 
        // 파랑버튼
        blueBtn_L_E : {fontSize:tokens.typo.body.mediumDefault.fontSize,color: tokens.semantic.text.inverse, backgroundColor:tokens.semantic.bg.brandDefault, textAlign: 'center'},
        blueBtn_L_D : {fontSize:tokens.typo.body.mediumDefault.fontSize,color: 'rgba(255,255,255, 0.74)', backgroundColor:tokens.semantic.bg.brandSubtlest, textAlign: 'center'},
        blueBtn_L_P : {fontSize:tokens.typo.body.mediumDefault.fontSize,color: tokens.semantic.text.inverse, backgroundColor:tokens.semantic.bg.brandStrong, textAlign: 'center'},
        // 회색버튼
        grayBtn_L_E : {fontSize:tokens.typo.body.mediumDefault.fontSize,color: tokens.semantic.text.default, backgroundColor:tokens.semantic.bg.neutralDefault, textAlign: 'center'},
        grayBtn_L_D : {fontSize:tokens.typo.body.mediumDefault.fontSize,color: 'rgba(53,60,73, 0.28)', backgroundColor:tokens.semantic.bg.neutralSubtle, textAlign: 'center'},
        grayBtn_L_P : {fontSize:tokens.typo.body.mediumDefault.fontSize,color: tokens.semantic.text.default, backgroundColor:tokens.semantic.bg.neutralStrong, textAlign: 'center'},
        // 흰색버튼
        whiteBtn_L_E : {fontSize:tokens.typo.body.mediumDefault.fontSize,color: tokens.semantic.text.default, backgroundColor:tokens.semantic.bg.inverse, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralDefault, textAlign: 'center',},
        whiteBtn_L_D : {fontSize:tokens.typo.body.mediumDefault.fontSize,color: 'rgba(53,60,73, 0.28)', backgroundColor:tokens.semantic.bg.inverse, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralSubtler, textAlign: 'center'},
        whiteBtn_L_P : {fontSize:tokens.typo.body.mediumDefault.fontSize,color: tokens.semantic.text.default, backgroundColor:tokens.semantic.bg.inverse, borderWidth:1, borderStyle:'solid', borderColor:'#a9abb0', textAlign: 'center'},

    //Medium (40)
    btn_Medium : {borderRadius:8, fontSize:tokens.typo.body.xsmallDefault.fontSize,letterSpacing: -0.2, textAlign: 'center', textAlignVertical:'center', justifyContent: 'center', alignItems: 'center', height:40, lineHeight:40,paddingHorizontal:24},
        // 파랑버튼
        blueBtn_M_E : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: tokens.semantic.text.inverse, backgroundColor:tokens.semantic.bg.brandDefault, textAlign: 'center'},
        blueBtn_M_D : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: 'rgba(255,255,255, 0.74)', backgroundColor:tokens.semantic.bg.brandSubtlest, textAlign: 'center'},
        blueBtn_M_P : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: tokens.semantic.text.inverse, backgroundColor:tokens.semantic.bg.brandStrong, textAlign: 'center'},
        // 회색버튼
        grayBtn_M_E : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: tokens.semantic.text.default, backgroundColor:tokens.semantic.bg.neutralDefault, textAlign: 'center'},
        grayBtn_M_D : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: 'rgba(53,60,73, 0.28)', backgroundColor:tokens.semantic.bg.neutralSubtle, textAlign: 'center'},
        grayBtn_M_P : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: tokens.semantic.text.default, backgroundColor:tokens.semantic.bg.neutralStrong, textAlign: 'center'},
        // 흰색버튼
        whiteBtn_M_E : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: tokens.semantic.text.default, backgroundColor:tokens.semantic.bg.inverse, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralDefault, textAlign: 'center'},
        whiteBtn_M_D : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: 'rgba(53,60,73, 0.28)', backgroundColor:tokens.semantic.bg.inverse, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralSubtler, textAlign: 'center'},
        whiteBtn_M_P : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: tokens.semantic.text.default, backgroundColor:tokens.semantic.bg.inverse, borderWidth:1, borderStyle:'solid', borderColor:'#a9abb0', textAlign: 'center'},
    
    //Small (32)
    btn_Small : {borderRadius:6, fontSize:tokens.typo.body.xsmallDefault.fontSize,letterSpacing: -0.2, textAlign: 'center', textAlignVertical:'center', justifyContent: 'center', alignItems: 'center', height:32, lineHeight:tokens.typo.title.largeStronger.lineHeight,paddingHorizontal:16,},
        // 파랑버튼 
        blueBtn_S_E : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: tokens.semantic.text.inverse, backgroundColor:tokens.semantic.bg.brandDefault, textAlign: 'center'},
        blueBtn_S_D : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: 'rgba(255,255,255, 0.74)', backgroundColor:tokens.semantic.bg.brandSubtlest, textAlign: 'center'},
        blueBtn_S_P : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: tokens.semantic.text.inverse, backgroundColor:tokens.semantic.bg.brandStrong, textAlign: 'center'},
        // 회색버튼
        grayBtn_S_E : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: tokens.semantic.text.default, backgroundColor:tokens.semantic.bg.neutralDefault, textAlign: 'center'},
        grayBtn_S_D : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: 'rgba(#53,60,73, 0.28)', backgroundColor:tokens.semantic.bg.neutralSubtle, textAlign: 'center'},
        grayBtn_S_P : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: tokens.semantic.text.default, backgroundColor:tokens.semantic.bg.neutralStrong, textAlign: 'center'},
        // 흰색버튼
        whiteBtn_S_E : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: tokens.semantic.text.default, backgroundColor:tokens.semantic.bg.inverse, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralDefault, textAlign: 'center'},
        whiteBtn_S_D : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: 'rgba(53,60,73, 0.28)', backgroundColor:tokens.semantic.bg.inverse, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralSubtler, textAlign: 'center'},
        whiteBtn_S_P : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color: tokens.semantic.text.default, backgroundColor:tokens.semantic.bg.inverse, borderWidth:1, borderStyle:'solid', borderColor:'#a9abb0', textAlign: 'center'},

    // Extra Small
    // 기본
    btn_etc: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralSubtle, backgroundColor:tokens.semantic.bg.inverse},
    btn_ect_P: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, borderWidth:1, borderStyle:'solid', borderColor:'#a9abb0', backgroundColor:tokens.semantic.bg.inverse},
    btn_etcText: {letterSpacing:-0.18, color:tokens.semantic.text.default}, // enabled, pressed text
    btn_ect_D: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralSubtler, backgroundColor:tokens.semantic.bg.inverse},
    btn_etcText_D: {letterSpacing:-0.18, color:'rgba(53, 60, 73, 0.28)'},
    // 블루
    btn_etc_blue: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, backgroundColor:tokens.semantic.bg.brandDefault},
    btn_etc_blue_P: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, backgroundColor:tokens.semantic.bg.brandStrong},
    btn_etcText_blue: {letterSpacing:-0.18, color:tokens.semantic.text.inverse}, // enabled, pressed text
    btn_etc_blue_D: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, backgroundColor:tokens.semantic.bg.brandSubtlest},
    btn_etcText_blue_D: {letterSpacing:-0.18, color:'rgba(255, 255, 255, 0.74)'},
    // 회색 (텍스트는 기본 버튼 텍스트와 똑같음)
    btn_etc_gray: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, backgroundColor:tokens.semantic.bg.neutralDefault},
    btn_etc_gray_P: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, backgroundColor:tokens.semantic.bg.neutralStrong},
    btn_etc_gray_D: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, backgroundColor:tokens.semantic.bg.neutralSubtle},

    // 여부 버튼
    btn_wt: {flex:1, justifyContent:'center', alignItems:'center', minHeight:40, borderRadius:8, borderWidth:1, borderStyle:'solid', borderColor:'#f7f8fa', backgroundColor:tokens.semantic.bg.neutralSubtle},
    btn_wt_on: {flex:1, justifyContent:'center', alignItems:'center', minHeight:40, borderRadius:8, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.brandDefault, backgroundColor:'#f5f8ff'},
    btn_wtText: {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.subtlest},
    btn_wtText_on: {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.brandDefault},
}

// snackbar
export const snackBar : any = {
    snackBarWrap : {position:'absolute',bottom:24,width:'100%',paddingHorizontal:16,zIndex:999},
    snackBarCon : {borderRadius:12,paddingVertical:12,paddingLeft:16,paddingRight:50,backgroundColor:'rgba(36,40,51, 0.9)',overflow:'hidden'},
    snackBarIco : {marginRight:12},
    snackBarTxt : {fontSize:tokens.typo.body.smallDefault.fontSize,letterSpacing:-0.21,color:tokens.semantic.text.inverse},
}

// bottom sheet
export const botSheet : any = {
    bsWrap : {
        position:'absolute',bottom:0,width:'100%',minHeight:242,paddingBottom:24,borderTopLeftRadius:24,borderTopRightRadius:24,backgroundColor:tokens.semantic.bg.inverse,
        // box shadow
        shadowColor: "#000000",shadowOffset: {width: 0,height: -2},shadowOpacity: 0.07,elevation: 12
    },
    bsCon16 : {marginTop:8,marginHorizontal:16},
    bsCon24 : {marginTop:8,marginHorizontal:24},
    bsCon28 : {marginTop:8,marginHorizontal:28},

    hLine : {marginVertical:12,width:'100%',height:1,backgroundColor:tokens.semantic.bg.neutralDefault},
    
    bsTitle : {height:62,marginHorizontal:24,paddingTop:8, borderBottomWidth:1, borderStyle:'solid', borderBottomColor:tokens.semantic.border.neutralSubtler},
    bsTitleTxt : {fontSize:tokens.typo.title.smallStronger.fontSize,letterSpacing:-0.26,color:tokens.semantic.text.default},
    
    selectList : {paddingTop:8},
    selectItem : {height:56,paddingHorizontal:24,backgroundColor:tokens.semantic.bg.inverse},
    selectItemOn : {height:56,paddingHorizontal:24,backgroundColor:tokens.semantic.bg.neutralSubtle},
    selectItemPressed : {height:56,paddingHorizontal:24,backgroundColor:tokens.semantic.bg.neutralDefault},
    selectItemText : {fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.22,color:tokens.semantic.text.strong},
    selectItemText02 : {fontSize:tokens.typo.body.smallDefault.fontSize,letterSpacing:-0.21,color:tokens.semantic.text.strong},
    selectItemText03 : {fontSize:tokens.typo.caption.largeDefault.fontSize,letterSpacing:-0.18,color:tokens.semantic.text.subtlest},
    selectItemText04 : {fontSize:tokens.typo.body.smallDefault.fontSize,letterSpacing:-0.21,color:tokens.semantic.text.subtlest},

    selectChips : {paddingTop:8,marginHorizontal:24},
    selectChipsTitle : {height:40},
    selectChipsTitleTxt : {fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.22,color:tokens.semantic.text.subtlest},
    selectChipsBox : {paddingTop:8,rowGap:12,columnGap:8},
    selectChipItem : {height:36,paddingHorizontal:16,borderRadius:18,backgroundColor:tokens.semantic.bg.neutralSubtle},
    selectChipItem_p : {height:36,paddingHorizontal:16,borderRadius:18,backgroundColor:tokens.semantic.bg.neutralDefault},
    selectChipItemOn : {height:36,paddingHorizontal:15,borderRadius:18,borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.brandDefault,backgroundColor:tokens.semantic.bg.selected},
    selectChipItemOn_p : {height:36,paddingHorizontal:15,borderRadius:18,borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.brandDefault,backgroundColor:'#e0eaff'},
    selectChipItemText : {fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.22,color:tokens.semantic.text.strong},
    selectChipItemTextOn : {fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.22,color:tokens.semantic.text.brandDefault},

    periodItem : {paddingVertical:6},
    periodTitle : {fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.22,color:tokens.semantic.text.subtlest},
   
    periodBox : {paddingVertical:9,paddingHorizontal:12,borderRadius:8,backgroundColor:tokens.semantic.bg.neutralSubtle},
    periodBoxPressed : {paddingVertical:9,paddingHorizontal:12,borderRadius:8,backgroundColor:tokens.semantic.bg.neutralDefault},
    periodBoxOn : {paddingVertical:9,paddingHorizontal:12,borderRadius:8,borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.brandDefault,backgroundColor:tokens.semantic.bg.selected},
    periodText : {fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.22,color:tokens.semantic.text.strong},
    periodTextOn : {fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.22,color:tokens.semantic.text.brandDefault},

    pwTitleBox : {marginTop:8,height:56},
    pwTitle : {fontSize:tokens.typo.title.mediumStrong.fontSize,color:tokens.semantic.text.default,letterSpacing:-0.28},
    pwTxtBox : {marginBottom:24},
    pwTxt : {fontSize:tokens.typo.body.xsmallDefault.fontSize,color:tokens.semantic.text.subtlest,letterSpacing:-0.2,textAlign:'center'},
    pwBtn : {paddingTop:16, paddingBottom:34, paddingHorizontal:24},

    // 체크 이미지 영역
    checkBox : {width:24, height:24, marginRight:1},
    
    //하단 버튼
    footBtn : {paddingTop:16, paddingHorizontal:24},

    // 이용약관 체크
    termsCheck : {justifyContent:'center', alignItems:'flex-start', },
    termsCheckText : {textDecorationLine: "none", fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.23,color:tokens.semantic.text.strong, marginLeft:-9,},

    // 도움말
    infoBox : {borderRadius:12, backgroundColor: tokens.semantic.bg.neutralSubtle, padding:20, marginTop:8, marginHorizontal:24},
    infoBoxTitle: {fontSize:tokens.typo.body.xsmallDefault.fontSize,color:tokens.semantic.text.default,letterSpacing:-0.2},
    infoBoxText: {fontSize:tokens.typo.caption.largeDefault.fontSize,color:tokens.semantic.text.subtle,letterSpacing:-0.18,marginTop:8, lineHeight:17},
    infoBoxDot : {width:2,height:2,borderRadius:2,backgroundColor:'#6b7991',marginTop:15, marginRight:4},
}

// popup
export const popup : any = {
    popupWrap : {
        position:'absolute',top:'50%',left:'50%',width:312,borderRadius:12,backgroundColor:tokens.semantic.bg.inverse,overflow:'hidden',
        // box shadow
        shadowColor: "#000000",shadowOffset: {width: 0,height: -2},shadowOpacity: 0.07,elevation: 12
    },
    popupCon : {paddingHorizontal:16, paddingBottom:32},
    popupCon24 : {paddingHorizontal:24, paddingBottom:32},
    popupIcon : {marginTop:32,marginBottom:16},
    mainText : {marginBottom:8,lineHeight:tokens.typo.body.mediumDefault.lineHeight,fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.22,color:tokens.semantic.text.default,textAlign:'center'},
    subText : {fontSize:tokens.typo.body.xsmallDefault.fontSize,letterSpacing:-0.2,color:tokens.semantic.text.subtlest,textAlign:'center',lineHeight:tokens.typo.body.xsmallDefault.lineHeight},
    subTextBold : {fontSize:tokens.typo.body.xsmallDefault.fontSize,letterSpacing:-0.2,color:tokens.semantic.text.subtlest,textAlign:'center',lineHeight:tokens.typo.body.xsmallDefault.lineHeight,fontWeight:'bold'},
    subTextBlue : {fontSize:tokens.typo.body.xsmallDefault.fontSize,letterSpacing:-0.2,color:tokens.semantic.text.brandDefault,textAlign:'center',lineHeight:tokens.typo.body.xsmallDefault.lineHeight},
    subBigTxt : {fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.23,textAlign:'center',color:tokens.semantic.text.default},
    
    grayBox : {borderRadius: 12, backgroundColor:tokens.semantic.bg.neutralSubtle, marginTop:16,alignItems:'center',paddingHorizontal:20, paddingVertical:17},   // popup.grayBox
    grayBoxScroll : {borderRadius: 12, backgroundColor:tokens.semantic.bg.neutralSubtle, marginTop:16, paddingVertical:20},   // popup.grayBox
    grayBoxTitText : {height:20, lineHeight:tokens.typo.body.xsmallDefault.lineHeight, marginRight:8, letterSpacing: -0.18, color:tokens.semantic.text.subtle},
    grayBoxText : {lineHeight:tokens.typo.body.xsmallDefault.lineHeight, marginRight:8, letterSpacing: -0.18},
    grayBoxTextDate : {fontSize:tokens.typo.body.xsmallDefault.fontSize, height:20, lineHeight:tokens.typo.body.xsmallDefault.lineHeight, marginRight:8, letterSpacing: -0.18},

    //하단 버튼
    btn_Large : {fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing: -0.23, textAlign: 'center', textAlignVertical:'center', justifyContent: 'center', alignItems: 'center', minHeight:56, lineHeight:56, paddingHorizontal:24}, 
        // 파랑버튼
        blueBtn_L_E : {fontSize:tokens.typo.body.mediumDefault.fontSize,color: tokens.semantic.text.inverse, backgroundColor:tokens.semantic.bg.brandDefault, textAlign: 'center'},
        blueBtn_L_D : {fontSize:tokens.typo.body.mediumDefault.fontSize,color: 'rgba(255,255,255, 0.74)', backgroundColor:tokens.semantic.bg.brandSubtlest, textAlign: 'center'},
        blueBtn_L_P : {fontSize:tokens.typo.body.mediumDefault.fontSize,color: tokens.semantic.text.inverse, backgroundColor:tokens.semantic.bg.brandStrong, textAlign: 'center'},
        // 회색버튼
        grayBtn_L_E : {fontSize:tokens.typo.body.mediumDefault.fontSize,color: tokens.semantic.text.default, backgroundColor:tokens.semantic.bg.neutralDefault, textAlign: 'center'},
        grayBtn_L_D : {fontSize:tokens.typo.body.mediumDefault.fontSize,color: 'rgba(53,60,73, 0.28)', backgroundColor:tokens.semantic.bg.neutralSubtle, textAlign: 'center'},
        grayBtn_L_P : {fontSize:tokens.typo.body.mediumDefault.fontSize,color: tokens.semantic.text.default, backgroundColor:tokens.semantic.bg.neutralStrong, textAlign: 'center'},
}

// FAB
export const fab : any = {
    fabWrapType1 : {position:'absolute',bottom:24,right:0,marginHorizontal:16}, // 리스트 화면일 때 wrap
    fabWrapType2 : {paddingBottom:24,paddingHorizontal:16}, // empty 화면일 때 wrap
    fabBox1 : {justifyContent:'center',width:56,height:56,borderRadius:28,shadowColor: "#000000",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.23,shadowRadius: 2.62,elevation: 4}, // 이미지 버튼
    fabBox2 : {width:'100%',display:'flex', justifyContent:'center',alignItems:'center',height:56,borderRadius:999,shadowColor: "#000000",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.23,shadowRadius: 2.62,elevation: 4}, // 이미지+텍스트 버튼
    fabText : {paddingLeft:6,...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight),fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.23,color:tokens.semantic.text.inverse},
    fabTextPressed : {paddingLeft:6,...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight),fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.23,color:'rgba(255, 255, 255, 0.6)'},
}