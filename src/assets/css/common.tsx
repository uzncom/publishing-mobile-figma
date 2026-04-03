import { Platform, StatusBar } from 'react-native';

// 퍼블리싱 네비게이션
export const pubHome : any = {
    borderB : { borderBottomWidth:1, borderStyle:'solid', borderBottomColor:'#e6e6e6' }, // pubHome.borderB
    pubHomeTextStyle: { height:60, lineHeight:60, paddingLeft: 20, fontSize: 20, color:'#000000', textAlign: 'left' }, // pubHome.pubHomeTextStyle
}

// font 영역에 사용되는 클래스 
export const fmFonts : any = {
    normal: { fontFamily: 'Pretendard-Regular', color: '#1d2129',fontSize:12},   //fmFonts.normal
    bold: { fontFamily: 'Pretendard-Bold', color: '#1d2129',fontSize:12},        //fmFonts.bold
    medium: { fontFamily: 'Pretendard-Medium', color: '#1d2129',fontSize:12},    //fmFonts.medium

    al: { textAlign: 'left' },    //fmFonts.al
    ar: { textAlign: 'right' },   //fmFonts.ar
    ac: { textAlign: 'center' },  //fmFonts.ac
    f13: {fontSize: 13},          //fmFonts.f13
    f14: {fontSize: 14},          //fmFonts.f14
    f15: {fontSize: 15},          //fmFonts.f15
    f21: {fontSize: 21},          //fmFonts.f21
    f22: {fontSize: 22},          //fmFonts.f22

    lh17: {lineHeight: 17},        //fmFonts.lh17
    lh18: {lineHeight: 18},        //fmFonts.lh18
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
    borderB:{borderBottomWidth:1, borderStyle:'solid', borderColor:'#ced0d6'}, // commons.borderB
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
    blue : {color:'#4480f0'},       //fontColor.blue
    gray : {color:'#7e8996'},       //fontColor.gray
    lightGray : {color:'#ced0d6'},  //fontColor.lightGray
    red : {color:'#e65364'},        //fontColor.red
    yellow : {color:'#f29a4e'},     //fontColor.yellow
    white : {color:'#ffffff'},      //fontColor.white
}

// 컨텐츠 공통
export const commCon : any = {
    // **************************************************
    // view 공통
    // **************************************************
    viewBox: { paddingHorizontal: 24 },                                            // commCon.viewBox
    viewBg: { backgroundColor: '#fff'},                                            // commCon.viewBg
    viewBgBlue: { position:'relative',backgroundColor: '#f5f7fa'},                 // commCon.viewBgBlue
    viewStickyBg : {backgroundColor: '#fff', borderBottomWidth:1, borderStyle:'solid', borderBottomColor:'#f0f2f4'}, // commCon.viewStickyBg
    botSheetLine: {
        borderTopWidth:1, borderStyle:'solid', borderColor:'#f2f2f2',backgroundColor:'#ffffff',
        // box shadow
        shadowColor: "#000000",shadowOffset: {width: 0,height: -4},shadowOpacity: 0.02,elevation: 12

    },  // commCon.botSheetLine
    botSheetLineNoSd: {borderTopWidth:1, borderStyle:'solid', borderColor:'#f2f2f2',backgroundColor:'#ffffff'}, // botSheetLine 쉐도우 없는 버전 (갤럭시 oneUi 5.0 이슈)
    bullet : {width:2, height:2, borderRadius:2, marginTop:(18 - 2) / 2, marginRight:4, backgroundColor:'#7e8996'}, // 불릿
    bulletText : {lineHeight:18, letterSpacing: -0.18, color:'#5d6677'}, // 불릿텍스트

    // **************************************************
    // empty
    // **************************************************
    emptyText01 : { fontSize:15, textAlign:'center', letterSpacing:-0.22, color:'#7e8996' },   // commCon.emptyText01
    emptyText02 : { marginTop:4, fontSize:13, textAlign:'center', letterSpacing:-0.2, color:'#b0b5bf' },    // commCon.emptyText02
    emptyTextBox : {marginHorizontal:24,padding:20,borderRadius:12,                backgroundColor:'#ffffff'},
    emptyTextTit : {marginBottom:6,fontFamily: 'Pretendard-Bold',fontSize:12, textAlign:'left', letterSpacing:-0.18, color:'#353c49'},
    emptyTextTxt : {marginTop:6,fontFamily: 'Pretendard-Regular',fontSize:12, textAlign:'left', letterSpacing:-0.18, color:'#7e8996'},

    // **************************************************
    // 탭
    // **************************************************
    contentsTabsWrap : {paddingBottom:16,backgroundColor:'#ffffff'},
    contentsTabs : {borderBottomWidth:1, borderStyle:'solid', borderBottomColor:'#f0f2f4',backgroundColor:'#ffffff'},
    contentsTabItem : {height:40,marginHorizontal:24,borderBottomWidth:2, borderStyle:'solid', borderBottomColor:'transparent'},
    contentsTabItemOn : {height:40,marginHorizontal:24,borderBottomWidth:2, borderStyle:'solid', borderBottomColor:'#4480f0'},
    contentsTabItemOnPress : {height:40,marginHorizontal:24,borderBottomWidth:2, borderStyle:'solid', borderBottomColor:'#386bc9'},
    contentsTabItemOnDisabled : {height:40,marginHorizontal:24,borderBottomWidth:2, borderStyle:'solid', borderBottomColor:'#c3d6fa'},
    contentsTabItemText : {fontFamily: 'Pretendard-Medium',fontSize:16, letterSpacing:-0.32, color:'#7e8996'},
    contentsTabItemTextPress : {fontFamily: 'Pretendard-Medium',fontSize:16, letterSpacing:-0.32, color:'#5d6677'},
    contentsTabItemTextDisabled : {fontFamily: 'Pretendard-Medium',fontSize:16, letterSpacing:-0.32, color:'#ced0d6'},
    contentsTabItemTextOn : {fontFamily: 'Pretendard-Bold', fontSize:16, letterSpacing:-0.32, color:'#4480f0'},
    contentsTabItemTextOnPress : {fontFamily: 'Pretendard-Bold',fontSize:16, letterSpacing:-0.32, color:'#386bc9'},
    contentsTabItemTextOnDisabled : {fontFamily: 'Pretendard-Bold',fontSize:16, letterSpacing:-0.32, color:'#c3d6fa'},
    btnTabWrap : {marginTop:12, borderRadius:8, backgroundColor:'#f7f8fa'},
    btnTabOn : {position:'absolute', top:0, left:0, bottom:0, right:0, borderWidth:1, borderStyle:'solid', borderColor:'#4480f0', borderRadius:8, backgroundColor:'#f4f8ff'},
    btnTabDisa : {position:'absolute', top:0, left:0, bottom:0, right:0, borderWidth:1, borderStyle:'solid', borderColor:'#c3d6fa', borderRadius:8, backgroundColor:'#f4f8ff'},
    btnTabText : {fontSize:13, fontFamily: 'Pretendard-Medium', textAlign:'center', letterSpacing:-0.2, color:'#7e8996'},
    btnTabTextDisa : {fontSize:13, fontFamily: 'Pretendard-Medium', textAlign:'center', letterSpacing:-0.2, color:'#ced0d6'},
    btnTabTextOnDisa : {fontSize:13, fontFamily: 'Pretendard-Medium', textAlign:'center', letterSpacing:-0.2, color:'#a1bff7'},
    tabNumBall : {justifyContent:'center',alignItems:'center', width:20, height:20, marginRight:6, borderRadius:30, backgroundColor:'#b0b5bf'},
    tabNumBallOn : {width:20, height:20, borderRadius:30, backgroundColor:'#4480f0'},
    
    // **************************************************
    // 컴포넌트
    // **************************************************
    textInput :{fontFamily: 'Pretendard-Medium',marginTop:15, marginBottom:14, fontSize:15, letterSpacing:-0.23, color:'#1d2129', padding:0},
    textInputDisabled :{fontFamily: 'Pretendard-Medium',marginTop:15, marginBottom:14, fontSize:15, letterSpacing:-0.23, color:'#ced0d6', padding:0},
    textArea :{fontFamily: 'Pretendard-Regular', fontSize:14, letterSpacing:-0.21, color:'#1d2129'},

    textInputWrap : {position:'relative'},
    textInputBox : {height:56,borderWidth:1,borderRadius:12,borderColor:'#d8dbe2',paddingLeft:16,paddingRight:48,fontSize:15, letterSpacing:-0.23, color:'#1d2129'},
    textInputBoxFocus : {borderColor:'#4480f0'},
    textInputBoxError : {borderColor:'#e65364'},
    textInputBoxDisa : {backgroundColor:'#f7f8fa'},
    textInputBoxPw : {height:56,borderWidth:1,borderRadius:12,borderColor:'#d8dbe2',paddingLeft:16,paddingRight:80,fontSize:15, letterSpacing:-0.23, color:'#1d2129'},
    textInputBtn : {position:'absolute',top:15,right:0},

    textSearchWrap : {position:'relative'},
    textSearchBox : {height:48,borderWidth:1,borderRadius:12,borderColor:'#d8dbe2',paddingLeft:16,paddingRight:80,fontSize:15, letterSpacing:-0.23, color:'#1d2129'},
    textSearchBoxFocus : {borderColor:'#4480f0'},
    textSearchBtn : {position:'absolute'},

    // 스위치
    switchBox : {position:'relative',width:40,height:24,borderRadius:24,backgroundColor:'#d8dbe2'},
    switchBoxOn : {position:'relative',width:40,height:24,borderRadius:24,backgroundColor:'#4480f0'},
    switchBoxDisabled : {position:'relative',width:40,height:24,borderRadius:24,backgroundColor:'#c3d6fa'},
    switchBtn : {position:'absolute',top:2,left:2,width:20,height:20,borderRadius:20,backgroundColor:'#ffffff'}, 
    switchBtnOn : {position:'absolute',top:2,right:2,width:20,height:20,borderRadius:20,backgroundColor:'#ffffff'}, 
    switchBtnDisabled : {position:'absolute',top:2,right:2,width:20,height:20,borderRadius:20,backgroundColor:'rgba(255,255,255,0.74)'}, 

    smallSwitchBox : {position:'relative',width:32,height:18,borderRadius:18,backgroundColor:'#d8dbe2'},
    smallSwitchBoxOn : {position:'relative',width:32,height:18,borderRadius:18,backgroundColor:'#4480f0'},
    smallSwitchBoxDisabled : {position:'relative',width:32,height:18,borderRadius:18,backgroundColor:'#c3d6fa'},
    smallSwitchBtn : {position:'absolute',top:2,left:2,width:14,height:14,borderRadius:14,backgroundColor:'#ffffff'}, 
    smallSwitchBtnOn : {position:'absolute',top:2,right:2,width:14,height:14,borderRadius:14,backgroundColor:'#ffffff'}, 
    smallSwitchBtnDisabled : {position:'absolute',top:2,right:2,width:14,height:14,borderRadius:14,backgroundColor:'rgba(255,255,255,0.74)'}, 

    bigSwitchBox : {position:'relative',height:48,paddingHorizontal:4,paddingVertical:4,borderRadius:24,backgroundColor:'#f0f2f4'},
    bigSwitch_p : {position:'relative',height:'100%',borderRadius:20,backgroundColor:'#e1e3e6'},
    bigSwitchOn : {position:'relative',height:'100%',borderRadius:20,backgroundColor:'#ffffff',shadowColor: "#000000",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 },
    bigSwitchOn_d : {position:'relative',height:'100%',borderRadius:20,backgroundColor:'#ffffff'},
    bigSwitchOn_p : {position:'relative',height:'100%',borderRadius:20,backgroundColor:'#f7f8fa',shadowColor: "#000000",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.29, shadowRadius: 4.65, elevation: 7},
    bigSwitchText : {fontFamily:'Pretendard-Medium',fontSize:15,letterSpacing:-0.3,color:'#7e8996'},
    bigSwitchText_d : {fontFamily:'Pretendard-Medium',fontSize:15,letterSpacing:-0.3,color:'#ced0d6'},
    bigSwitchText_p : {fontFamily:'Pretendard-Medium',fontSize:15,letterSpacing:-0.3,color:'#5d6677'},
    bigSwitchTextOn : {fontFamily:'Pretendard-Bold',fontSize:15,letterSpacing:-0.23,color:'#4480f0'},
    bigSwitchTextOn_d : {fontFamily:'Pretendard-Bold',fontSize:15,letterSpacing:-0.23,color:'#c3d6fa'},
    bigSwitchTextOn_p : {fontFamily:'Pretendard-Bold',fontSize:15,letterSpacing:-0.23,color:'#386bc9'},

    // 스크롤 탭
    scrollTabWrap : {borderBottomWidth:1, borderBottomStyle:'solid', borderBottomColor:'#f0f2f4'},
    scrollTab : {paddingTop:8, paddingBottom:13, marginHorizontal:12},
    scrollTabOn : {paddingTop:8, paddingBottom:13, marginHorizontal:12, borderBottomWidth:2, borderBottomStyle:'solid', borderBottomColor:'#4480f0'},
    scrollTabText : {fontSize:16, fontFamily:'Pretendard-Regular', letterSpacing:-0.32, color:'#7e8996'},
    scrollTabTextOn : {fontSize:16, fontFamily:'Pretendard-Bold', letterSpacing:-0.32, color:'#4480f0'},
    scrollTabTextDisabled : {fontSize:16, fontFamily:'Pretendard-Bold', letterSpacing:-0.32, color:'#ced0d6'},

    // 첨부파일 경로
    breadcrumbsWrap : {paddingVertical:15,paddingHorizontal:20,rowGap:4,columnGap:4},
    breadcrumbsText : {fontSize:15, fontFamily:'Pretendard-Medium', letterSpacing:-0.23, color:'#5d6677'},
    breadcrumbsTextBold : {fontSize:15, fontFamily:'Pretendard-Bold', letterSpacing:-0.23, color:'#5d6677'},

    // 카운트가 있는 아이콘
    icoBtn : { position:'relative' },
    icoBtnCnt : { position:'absolute', top:-5, left:'50%', minWidth:12, height:12, borderRadius:12, backgroundColor:'#f56363' },
    icoBtnCntSmall : { position:'absolute', minWidth:12, height:12, borderRadius:12, backgroundColor:'#f56363' },
    icoBtnCntNum : { fontSize:9, letterSpacing:-0.14, color:'#ffffff', textAlign:'center',lineHeight:12 },

    // 첨부파일 미리보기
    filePreviewBg : {position:'relative',paddingTop:24,paddingHorizontal:24,backgroundColor:'rgba(0,0,0,0.4)',},
    filePreviewContents : {width:'100%',marginBottom:14,backgroundColor:'#ffffff'},
    filePreviewNumBox : {position:'absolute',left:'50%',bottom:16,marginLeft:-25,width:100,height:24,borderRadius:24,backgroundColor:'rgba(36,40,51,0.8)',},
    filePreviewNumTxt : {fontSize:12,letterSpacing:-0.18,color:'#ffffff'},
    fileFootBtn : { paddingTop:16,paddingBottom:24,paddingHorizontal:24, columnGap:8, backgroundColor: '#ffffff', borderTopWidth:1, borderStyle:'solid', borderColor:'#f2f2f2',shadowColor: "#000000",shadowOffset: {width: 0,height: -2},shadowOpacity: 0.07,elevation: 12 },

    // 캘린더
    calendarWrap : {position:'relative'},
    calenderFn : {marginTop:22},
    calendarDate : {fontSize:17,color:'#222222'},
    calendarCon : {marginTop:14},
    calendarHText : {height:24,lineHeight:24,fontSize:12,color:'#7e8996',textAlign:'center'},
    calendarTextBox : {position:'relative',height:48},
    calendarDText : {height:34,lineHeight:34,fontSize:16,color:'#1d2129',textAlign:'center'},
    calendarDTextDisabled : {height:34,lineHeight:34,fontSize:16,color:'#1d2129',textAlign:'center',opacity:0.3},
    calendarToday : {width:34,height:34,borderRadius:34,backgroundColor:'#4480f0'},
    calendarSunday : {fontSize:16,color:'#e65364',textAlign:'center'},
    calendarSundayDisabled : {fontSize:16,color:'#e65364',textAlign:'center',opacity:0.3},
    calendarSatday : {fontSize:16,color:'#4480f0',textAlign:'center'},
    calendarSatdayDisabled : {fontSize:16,color:'#4480f0',textAlign:'center',opacity:0.3},

    calendarSelectWrap : {columnGap:-1},
    calendarSelect : {borderRadius:40,backgroundColor:'#e4f0f5',height:44,marginVertical:2},
    calendarSelectPress : {borderRadius:40,backgroundColor:'#d3d8de',height:44,marginVertical:2},
    calendarSelectStart : {borderTopLeftRadius:40,borderBottomLeftRadius:40,backgroundColor:'#e4f0f5',height:44,marginVertical:2},
    calendarSelectStartPress : {borderTopLeftRadius:40,borderBottomLeftRadius:40,backgroundColor:'#ebeef2',height:44,marginVertical:2},
    calendarSelectMiddle : {borderRadius:0,backgroundColor:'#e4f0f5',height:44,marginVertical:2},
    calendarSelectMiddlePress : {borderRadius:0,backgroundColor:'#ebeef2',height:44,marginVertical:2},
    calendarSelectEnd : {borderTopRightRadius:40,borderBottomRightRadius:40,backgroundColor:'#e4f0f5',height:44,marginVertical:2},
    calendarSelectEndPress : {borderTopRightRadius:40,borderBottomRightRadius:40,backgroundColor:'#ebeef2',height:44,marginVertical:2},
    
    calendarDTextToday : {height:34,lineHeight:34,fontSize:16,color:'#ffffff',textAlign:'center'},
    calendarEventDay : {position:'absolute',top:12,right:'45%',marginRight:-10,width:4,height:4,borderRadius:4,backgroundColor:'#f56363'},

    // 라디오버튼
    radioSelectItemText : {fontSize:15,letterSpacing:-0.23},
    radioText : {fontSize:14,letterSpacing:-0.21},
    radioSubText : {fontSize:13, letterSpacing:-0.2, color:'#7e8996'},

    // 체크박스
    checkText : {fontSize:15, fontFamily:'Pretendard-Medium', letterSpacing:-0.23, color:'#1d2129'},
    checkTextDisabled : {fontSize:15, fontFamily:'Pretendard-Medium', letterSpacing:-0.23, color:'#b0b5bf'},
    
    // 폼
    formBl1: {borderLeftWidth:1, borderStyle:'solid', borderColor:'#e1e3e6'},
    formBt1: {borderTopWidth:1, borderStyle:'solid', borderColor:'#e1e3e6'},
    formBr1: {borderRightWidth:1, borderStyle:'solid', borderColor:'#e1e3e6'},
    formBb1: {borderBottomWidth:1, borderStyle:'solid', borderColor:'#e1e3e6'},
    formTh: {paddingVertical:12, paddingHorizontial:10, backgroundColor:'#f7f8fa'},
    formThText: {textAlign:'center', fontSize:13, letterSpacing:-0.2, color:'#353c49'},
    formTd: {paddingVertical:14, paddingHorizontial:12, backgroundColor:'#ffffff'},
    formTdText: {textAlign:'center', fontSize:13, letterSpacing:-0.2, color:'#5d6677', lineHeight:20},

    // **************************************************
    // 버튼
    // **************************************************
    //Large (56)
    btn_Large : {fontSize:15, borderRadius:12, letterSpacing: -0.23, textAlign: 'center', textAlignVertical:'center', justifyContent: 'center', alignItems: 'center', minHeight:56, lineHeight:56, paddingHorizontal:24}, 
        // 파랑버튼
        blueBtn_L_E : {fontSize:15,color: '#ffffff', backgroundColor:'#4480f0', textAlign: 'center'},
        blueBtn_L_D : {fontSize:15,color: 'rgba(255,255,255, 0.74)', backgroundColor:'#c3d6fa', textAlign: 'center'},
        blueBtn_L_P : {fontSize:15,color: '#ffffff', backgroundColor:'#386bc9', textAlign: 'center'},
        // 회색버튼
        grayBtn_L_E : {fontSize:15,color: '#353c49', backgroundColor:'#f0f2f4', textAlign: 'center'},
        grayBtn_L_D : {fontSize:15,color: 'rgba(53,60,73, 0.28)', backgroundColor:'#f7f8fa', textAlign: 'center'},
        grayBtn_L_P : {fontSize:15,color: '#353c49', backgroundColor:'#e1e3e6', textAlign: 'center'},
        // 흰색버튼
        whiteBtn_L_E : {fontSize:15,color: '#353c49', backgroundColor:'#fff', borderWidth:1, borderStyle:'solid', borderColor:'#ced0d6', textAlign: 'center',},
        whiteBtn_L_D : {fontSize:15,color: 'rgba(53,60,73, 0.28)', backgroundColor:'#fff', borderWidth:1, borderStyle:'solid', borderColor:'#f0f2f4', textAlign: 'center'},
        whiteBtn_L_P : {fontSize:15,color: '#353c49', backgroundColor:'#fff', borderWidth:1, borderStyle:'solid', borderColor:'#a9abb0', textAlign: 'center'},

    //Medium (40)
    btn_Medium : {borderRadius:8, fontSize:13,letterSpacing: -0.2, textAlign: 'center', textAlignVertical:'center', justifyContent: 'center', alignItems: 'center', height:40, lineHeight:40,paddingHorizontal:24},
        // 파랑버튼
        blueBtn_M_E : {fontSize:13,color: '#ffffff', backgroundColor:'#4480f0', textAlign: 'center'},
        blueBtn_M_D : {fontSize:13,color: 'rgba(255,255,255, 0.74)', backgroundColor:'#c3d6fa', textAlign: 'center'},
        blueBtn_M_P : {fontSize:13,color: '#ffffff', backgroundColor:'#386bc9', textAlign: 'center'},
        // 회색버튼
        grayBtn_M_E : {fontSize:13,color: '#353c49', backgroundColor:'#f0f2f4', textAlign: 'center'},
        grayBtn_M_D : {fontSize:13,color: 'rgba(53,60,73, 0.28)', backgroundColor:'#f7f8fa', textAlign: 'center'},
        grayBtn_M_P : {fontSize:13,color: '#353c49', backgroundColor:'#e1e3e6', textAlign: 'center'},
        // 흰색버튼
        whiteBtn_M_E : {fontSize:13,color: '#353c49', backgroundColor:'#fff', borderWidth:1, borderStyle:'solid', borderColor:'#ced0d6', textAlign: 'center'},
        whiteBtn_M_D : {fontSize:13,color: 'rgba(53,60,73, 0.28)', backgroundColor:'#fff', borderWidth:1, borderStyle:'solid', borderColor:'#f0f2f4', textAlign: 'center'},
        whiteBtn_M_P : {fontSize:13,color: '#353c49', backgroundColor:'#fff', borderWidth:1, borderStyle:'solid', borderColor:'#a9abb0', textAlign: 'center'},
    
    //Small (32)
    btn_Small : {borderRadius:6, fontSize:13,letterSpacing: -0.2, textAlign: 'center', textAlignVertical:'center', justifyContent: 'center', alignItems: 'center', height:32, lineHeight:32,paddingHorizontal:16,},
        // 파랑버튼 
        blueBtn_S_E : {fontSize:13,color: '#ffffff', backgroundColor:'#4480f0', textAlign: 'center'},
        blueBtn_S_D : {fontSize:13,color: 'rgba(255,255,255, 0.74)', backgroundColor:'#c3d6fa', textAlign: 'center'},
        blueBtn_S_P : {fontSize:13,color: '#ffffff', backgroundColor:'#386bc9', textAlign: 'center'},
        // 회색버튼
        grayBtn_S_E : {fontSize:13,color: '#353c49', backgroundColor:'#f0f2f4', textAlign: 'center'},
        grayBtn_S_D : {fontSize:13,color: 'rgba(#53,60,73, 0.28)', backgroundColor:'#f7f8fa', textAlign: 'center'},
        grayBtn_S_P : {fontSize:13,color: '#353c49', backgroundColor:'#e1e3e6', textAlign: 'center'},
        // 흰색버튼
        whiteBtn_S_E : {fontSize:13,color: '#353c49', backgroundColor:'#fff', borderWidth:1, borderStyle:'solid', borderColor:'#ced0d6', textAlign: 'center'},
        whiteBtn_S_D : {fontSize:13,color: 'rgba(53,60,73, 0.28)', backgroundColor:'#fff', borderWidth:1, borderStyle:'solid', borderColor:'#f0f2f4', textAlign: 'center'},
        whiteBtn_S_P : {fontSize:13,color: '#353c49', backgroundColor:'#fff', borderWidth:1, borderStyle:'solid', borderColor:'#a9abb0', textAlign: 'center'},

    // Extra Small
    // 기본
    btn_etc: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, borderWidth:1, borderStyle:'solid', borderColor:'#d8dbe2', backgroundColor:'#ffffff'},
    btn_ect_P: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, borderWidth:1, borderStyle:'solid', borderColor:'#a9abb0', backgroundColor:'#ffffff'},
    btn_etcText: {letterSpacing:-0.18, color:'#353c49'}, // enabled, pressed text
    btn_ect_D: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, borderWidth:1, borderStyle:'solid', borderColor:'#f0f2f4', backgroundColor:'#ffffff'},
    btn_etcText_D: {letterSpacing:-0.18, color:'rgba(53, 60, 73, 0.28)'},
    // 블루
    btn_etc_blue: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, backgroundColor:'#4480f0'},
    btn_etc_blue_P: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, backgroundColor:'#386bc9'},
    btn_etcText_blue: {letterSpacing:-0.18, color:'#ffffff'}, // enabled, pressed text
    btn_etc_blue_D: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, backgroundColor:'#c3d6fa'},
    btn_etcText_blue_D: {letterSpacing:-0.18, color:'rgba(255, 255, 255, 0.74)'},
    // 회색 (텍스트는 기본 버튼 텍스트와 똑같음)
    btn_etc_gray: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, backgroundColor:'#f0f2f4'},
    btn_etc_gray_P: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, backgroundColor:'#e1e3e6'},
    btn_etc_gray_D: {paddingVertical:4, paddingHorizontal:8, borderRadius:4, backgroundColor:'#f7f8fa'},

    // 여부 버튼
    btn_wt: {flex:1, justifyContent:'center', alignItems:'center', minHeight:40, borderRadius:8, borderWidth:1, borderStyle:'solid', borderColor:'#f7f8fa', backgroundColor:'#f7f8fa'},
    btn_wt_on: {flex:1, justifyContent:'center', alignItems:'center', minHeight:40, borderRadius:8, borderWidth:1, borderStyle:'solid', borderColor:'#4480f0', backgroundColor:'#f5f8ff'},
    btn_wtText: {fontSize:13, letterSpacing:-0.2, color:'#7e8996'},
    btn_wtText_on: {fontSize:13, letterSpacing:-0.2, color:'#4480f0'},
}

// snackbar
export const snackBar : any = {
    snackBarWrap : {position:'absolute',bottom:24,width:'100%',paddingHorizontal:16,zIndex:999},
    snackBarCon : {borderRadius:12,paddingVertical:12,paddingLeft:16,paddingRight:50,backgroundColor:'rgba(36,40,51, 0.9)',overflow:'hidden'},
    snackBarIco : {marginRight:12},
    snackBarTxt : {fontSize:14,letterSpacing:-0.21,color:'#ffffff'},
}

// bottom sheet
export const botSheet : any = {
    bsWrap : {
        position:'absolute',bottom:0,width:'100%',minHeight:242,paddingBottom:24,borderTopLeftRadius:24,borderTopRightRadius:24,backgroundColor:'#ffffff',
        // box shadow
        shadowColor: "#000000",shadowOffset: {width: 0,height: -2},shadowOpacity: 0.07,elevation: 12
    },
    bsCon16 : {marginTop:8,marginHorizontal:16},
    bsCon24 : {marginTop:8,marginHorizontal:24},
    bsCon28 : {marginTop:8,marginHorizontal:28},

    hLine : {marginVertical:12,width:'100%',height:1,backgroundColor:'#f0f2f4'},
    
    bsTitle : {height:62,marginHorizontal:24,paddingTop:8, borderBottomWidth:1, borderStyle:'solid', borderBottomColor:'#f0f2f4'},
    bsTitleTxt : {fontSize:17,letterSpacing:-0.26,color:'#353c49'},
    
    selectList : {paddingTop:8},
    selectItem : {height:56,paddingHorizontal:24,backgroundColor:'#ffffff'},
    selectItemOn : {height:56,paddingHorizontal:24,backgroundColor:'#f7f8fa'},
    selectItemPressed : {height:56,paddingHorizontal:24,backgroundColor:'#f0f2f4'},
    selectItemText : {fontSize:15,letterSpacing:-0.22,color:'#1d2129'},
    selectItemText02 : {fontSize:14,letterSpacing:-0.21,color:'#1d2129'},
    selectItemText03 : {fontSize:12,letterSpacing:-0.18,color:'#7e8996'},
    selectItemText04 : {fontSize:14,letterSpacing:-0.21,color:'#7e8996'},

    selectChips : {paddingTop:8,marginHorizontal:24},
    selectChipsTitle : {height:40},
    selectChipsTitleTxt : {fontSize:15,letterSpacing:-0.22,color:'#7e8996'},
    selectChipsBox : {paddingTop:8,rowGap:12,columnGap:8},
    selectChipItem : {height:36,paddingHorizontal:16,borderRadius:18,backgroundColor:'#f7f8fa'},
    selectChipItem_p : {height:36,paddingHorizontal:16,borderRadius:18,backgroundColor:'#f0f2f4'},
    selectChipItemOn : {height:36,paddingHorizontal:15,borderRadius:18,borderWidth:1, borderStyle:'solid', borderColor:'#4480f0',backgroundColor:'#f4f8ff'},
    selectChipItemOn_p : {height:36,paddingHorizontal:15,borderRadius:18,borderWidth:1, borderStyle:'solid', borderColor:'#4480f0',backgroundColor:'#e0eaff'},
    selectChipItemText : {fontSize:15,letterSpacing:-0.22,color:'#1d2129'},
    selectChipItemTextOn : {fontSize:15,letterSpacing:-0.22,color:'#4480f0'},

    periodItem : {paddingVertical:6},
    periodTitle : {fontSize:15,letterSpacing:-0.22,color:'#7e8996'},
   
    periodBox : {paddingVertical:9,paddingHorizontal:12,borderRadius:8,backgroundColor:'#f7f8fa'},
    periodBoxPressed : {paddingVertical:9,paddingHorizontal:12,borderRadius:8,backgroundColor:'#f0f2f4'},
    periodBoxOn : {paddingVertical:9,paddingHorizontal:12,borderRadius:8,borderWidth:1, borderStyle:'solid', borderColor:'#4480f0',backgroundColor:'#f4f8ff'},
    periodText : {fontSize:15,letterSpacing:-0.22,color:'#1d2129'},
    periodTextOn : {fontSize:15,letterSpacing:-0.22,color:'#4480f0'},

    pwTitleBox : {marginTop:8,height:56},
    pwTitle : {fontSize:19,color:'#353c49',letterSpacing:-0.28},
    pwTxtBox : {marginBottom:24},
    pwTxt : {fontSize:13,color:'#7e8996',letterSpacing:-0.2,textAlign:'center'},
    pwBtn : {paddingTop:16, paddingBottom:34, paddingHorizontal:24},

    // 체크 이미지 영역
    checkBox : {width:24, height:24, marginRight:1},
    
    //하단 버튼
    footBtn : {paddingTop:16, paddingHorizontal:24},

    // 이용약관 체크
    termsCheck : {justifyContent:'center', alignItems:'flex-start', },
    termsCheckText : {textDecorationLine: "none", fontSize:15, letterSpacing:-0.23,color:'#1d2129', marginLeft:-9,},

    // 도움말
    infoBox : {borderRadius:12, backgroundColor: '#f7f8fa', padding:20, marginTop:8, marginHorizontal:24},
    infoBoxTitle: {fontSize:13,color:'#353c49',letterSpacing:-0.2},
    infoBoxText: {fontSize:12,color:'#5d6677',letterSpacing:-0.18,marginTop:8, lineHeight:17},
    infoBoxDot : {width:2,height:2,borderRadius:2,backgroundColor:'#6b7991',marginTop:15, marginRight:4},
}

// popup
export const popup : any = {
    popupWrap : {
        position:'absolute',top:'50%',left:'50%',width:312,borderRadius:12,backgroundColor:'#ffffff',overflow:'hidden',
        // box shadow
        shadowColor: "#000000",shadowOffset: {width: 0,height: -2},shadowOpacity: 0.07,elevation: 12
    },
    popupCon : {paddingHorizontal:16, paddingBottom:32},
    popupCon24 : {paddingHorizontal:24, paddingBottom:32},
    popupIcon : {marginTop:32,marginBottom:16},
    mainText : {marginBottom:8,lineHeight:22,fontSize:15,letterSpacing:-0.22,color:'#353c49',textAlign:'center'},
    subText : {fontSize:13,letterSpacing:-0.2,color:'#7e8996',textAlign:'center',lineHeight:18},
    subTextBold : {fontSize:13,letterSpacing:-0.2,color:'#7e8996',textAlign:'center',lineHeight:18,fontWeight:'bold'},
    subTextBlue : {fontSize:13,letterSpacing:-0.2,color:'#4480f0',textAlign:'center',lineHeight:18},
    subBigTxt : {fontSize:15,letterSpacing:-0.23,textAlign:'center',color:'#353c49'},
    
    grayBox : {borderRadius: 12, backgroundColor:'#f7f8fa', marginTop:16,alignItems:'center',paddingHorizontal:20, paddingVertical:17},   // popup.grayBox
    grayBoxScroll : {borderRadius: 12, backgroundColor:'#f7f8fa', marginTop:16, paddingVertical:20},   // popup.grayBox
    grayBoxTitText : {height:20, lineHeight:18, marginRight:8, letterSpacing: -0.18, color:'#5d6677'},
    grayBoxText : {lineHeight:18, marginRight:8, letterSpacing: -0.18},
    grayBoxTextDate : {fontSize:13, height:20, lineHeight:18, marginRight:8, letterSpacing: -0.18},

    //하단 버튼
    btn_Large : {fontSize:15, letterSpacing: -0.23, textAlign: 'center', textAlignVertical:'center', justifyContent: 'center', alignItems: 'center', minHeight:56, lineHeight:56, paddingHorizontal:24}, 
        // 파랑버튼
        blueBtn_L_E : {fontSize:15,color: '#ffffff', backgroundColor:'#4480f0', textAlign: 'center'},
        blueBtn_L_D : {fontSize:15,color: 'rgba(255,255,255, 0.74)', backgroundColor:'#c3d6fa', textAlign: 'center'},
        blueBtn_L_P : {fontSize:15,color: '#ffffff', backgroundColor:'#386bc9', textAlign: 'center'},
        // 회색버튼
        grayBtn_L_E : {fontSize:15,color: '#353c49', backgroundColor:'#f0f2f4', textAlign: 'center'},
        grayBtn_L_D : {fontSize:15,color: 'rgba(53,60,73, 0.28)', backgroundColor:'#f7f8fa', textAlign: 'center'},
        grayBtn_L_P : {fontSize:15,color: '#353c49', backgroundColor:'#e1e3e6', textAlign: 'center'},
}

// FAB
export const fab : any = {
    fabWrapType1 : {position:'absolute',bottom:24,right:0,marginHorizontal:16}, // 리스트 화면일 때 wrap
    fabWrapType2 : {paddingBottom:24,paddingHorizontal:16}, // empty 화면일 때 wrap
    fabBox1 : {justifyContent:'center',width:56,height:56,borderRadius:28,shadowColor: "#000000",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.23,shadowRadius: 2.62,elevation: 4}, // 이미지 버튼
    fabBox2 : {width:'100%',display:'flex', justifyContent:'center',alignItems:'center',height:56,borderRadius:999,shadowColor: "#000000",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.23,shadowRadius: 2.62,elevation: 4}, // 이미지+텍스트 버튼
    fabText : {paddingLeft:6,fontFamily: 'Pretendard-Bold',fontSize:15,letterSpacing:-0.23,color:'#ffffff'},
    fabTextPressed : {paddingLeft:6,fontFamily: 'Pretendard-Bold',fontSize:15,letterSpacing:-0.23,color:'rgba(255, 255, 255, 0.6)'},
}