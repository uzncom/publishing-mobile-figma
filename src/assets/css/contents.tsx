import { tokens } from "designcenter-figma";
import { getTokenFontStyle } from "../../utils/utils";

// **************************************************
// 메인
// **************************************************

// 홈
export const main : any = {
    mainWrap : {position:'relative'},

    // 헤더 영역
    headerBg:{paddingHorizontal:16, backgroundColor:'#f2f4f7', paddingBottom:24, },
        logo : {paddingLeft:8, paddingVertical:16},
        logoImg : {width:94,height:24},
        headerImgBg : {position:'absolute', top:0, right:-20, width:200, height:176, zIndex:1},
        userName: {fontSize:21, letterSpacing:-0.32, color:'#000', lineHeight:29, marginBottom:8, paddingLeft:8},
        today: {fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21, color:'#515864', lineHeight:tokens.typo.body.smallDefault.lineHeight, marginBottom:32, paddingLeft:8},

    // 회사/근태적용
    companyBox: {borderRadius:12, alignItems:'center', flex:1},
        companyBoxPadding : {paddingHorizontal:24, paddingVertical:17},
        companyText: {color:tokens.semantic.text.inverse, marginLeft:8, fontSize:tokens.typo.body.mediumDefault.fontSize, marginRight:2},
        companyApp : {position:'relative', minWidth:60, justifyContent:'center',alignItems:'flex-end'},
        box : { paddingVertical:4, paddingHorizontal:8, borderWidth:1, borderStyle:'solid', borderRadius:11 },
        type1 : { borderColor:'rgba(113, 214, 178, 0.8)', ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.caption.mediumDefault.fontSize, color:'#90f4c2', letterSpacing:-0.17, paddingLeft:7},  // 적용
        type2 : { borderColor:'rgba(255, 168, 168, 0.8)', ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.caption.mediumDefault.fontSize, color:'#ff9f9f', letterSpacing:-0.17, paddingLeft:7},  // 미적용
        type1Bl : { position:'absolute', top:'50%', left:8, marginTop:2, minWidth:4, height:4, borderRadius:18, backgroundColor:'#90f4c2' },
        type2Bl : { position:'absolute', top:'50%', left:8, marginTop:2, minWidth:4, height:4, borderRadius:18, backgroundColor:'#ff9f9f' },

    // 출퇴근체크/근무시간동의
    workBox : {marginTop:8, borderRadius:12, backgroundColor:tokens.semantic.bg.inverse, shadowColor: "rgba(0, 35, 93, 0.4)", shadowOffset: {width: 0,height: 2}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 7},
    attnBox : {margin:8, paddingHorizontal:8, paddingVertical:10, borderColor:'#f2f4f7',borderStyle:'solid'},
    attnBoxDt : {position:'relative', top:0, fontSize: tokens.typo.body.smallDefault.fontSize, marginBottom:4, color:'#000',letterSpacing: -0.21,lineHeight:tokens.typo.body.smallDefault.lineHeight},
    attnBoxDd : {fontSize: tokens.typo.caption.mediumDefault.fontSize, color:tokens.semantic.text.subtlest,letterSpacing: -0.17},
    attnBoxLine : {borderRightWidth:1, borderColor:'#e5e6e8',borderStyle:'solid', marginVertical:19 },
    attnBl : {width:4, height:10},
    // Disable
    workBoxDisable : {borderRadius:12, backgroundColor:'rgba(255, 255, 255, 0.95)'},
    attnBoxDtDisable : {fontSize: tokens.typo.body.smallDefault.fontSize, marginBottom:4, color:'#a6aab3',letterSpacing: -0.21,lineHeight:tokens.typo.body.smallDefault.lineHeight},
    attnBoxDdDisable : {fontSize: tokens.typo.caption.mediumDefault.fontSize, color:'#bac1c8',letterSpacing: -0.17},
    // Pressed
    attnBoxPressed : {margin:8, paddingHorizontal:8, paddingVertical:10, borderColor:'#f2f4f7',borderStyle:'solid', borderRadius:8, backgroundColor:tokens.semantic.bg.neutralDefault},
    
    // 메인 _컨텐츠 영역
    mainCon : {marginHorizontal:16, marginTop:24, marginBottom:13, flex:1},
    //이미지 흑백처리
    ImgDisable : {tintColor: 'gray', opacity: 0.5},
    // 메뉴바로가기
    menuBox : {position:'relative', borderRadius:16, backgroundColor:'#f0f5fd', paddingHorizontal:8, paddingTop:8, paddingBottom:16},
    menuImg : {marginBottom:14},
    menuBoxDt : {fontSize: tokens.typo.body.smallDefault.fontSize,letterSpacing:-0.21,color:'#414a59', paddingLeft:8, marginBottom:4},
    menuBoxDd : {fontSize: tokens.typo.caption.mediumDefault.fontSize, color:tokens.semantic.text.subtlest,letterSpacing: -0.17, paddingLeft:8},
    menuBoxDay : {fontSize: tokens.typo.caption.mediumDefault.fontSize, color:tokens.semantic.text.subtle,letterSpacing: -0.17, paddingLeft:4},
    menuBoxLine : {color:'#d5dbe4', paddingLeft:4, height:13},
    menuBl : { position:'absolute', top:0, left:74, minWidth:4, height:4, borderRadius:18, backgroundColor:'#f56363'}, 
    menuProgress : {borderRadius: 11, borderWidth:1, borderColor:tokens.semantic.border.selectedDisabled,borderStyle:'solid', backgroundColor: tokens.semantic.bg.inverse, height:22, paddingHorizontal:8, display:'flex', justifyContent:'center',alignItems:'center', marginTop:13, marginRight:11},      
    menuProText : {color:tokens.semantic.text.brandDefault, letterSpacing: -0.17,fontSize: tokens.typo.caption.mediumDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight) },      
    // Disable
    menuBoxDisable : {position:'relative', borderRadius:16, backgroundColor:tokens.semantic.bg.neutralSubtle, paddingHorizontal:8, paddingTop:8, paddingBottom:16},
    menuBoxDtDisable : {fontSize: tokens.typo.body.smallDefault.fontSize,letterSpacing:-0.21,color:'#a6aab3', paddingLeft:8, marginBottom:4},
    menuBoxDdDisable : {fontSize: tokens.typo.caption.mediumDefault.fontSize, color:'#bac1c8',letterSpacing: -0.17, paddingLeft:8},   
    // Pressed
    menuBoxPressed : {position:'relative', borderRadius:16, backgroundColor:'#E1EAF7', paddingHorizontal:8, paddingTop:8, paddingBottom:16},     
    
    //근무시간, 근태결재 승인
    approval : {marginTop:16},
    appBox : {position:'relative', marginTop:11, marginBottom:13, flex:1, flexDirection:'row', justifyContent:'center',alignItems:'center'}, 
    appText : {paddingHorizontal:8, fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing: -0.2, color:tokens.semantic.text.default},  
    appLine : {position:'absolute', top:18, left:'50%', borderRightWidth:1, borderColor:'#e5e6e8',borderStyle:'solid', height:20},
    appBtnCnt : { position:'absolute', top:-5, left:19, minWidth:18, height:18, borderRadius:18, backgroundColor:'#f56363', paddingHorizontal:4, zIndex:10, justifyContent:'center',alignItems:'center', flexDirection:'column'},
    appBtnCntNum : { fontSize:tokens.typo.caption.mediumDefault.fontSize, letterSpacing:-0.16, color:tokens.semantic.text.inverse, textAlign:'center' },
    // Disable
    appTextDisable : {paddingHorizontal:8, fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing: -0.2, color:tokens.semantic.text.disabledStrong},  
    // Pressed
    appTextPressed : {paddingHorizontal:8, fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing: -0.2, color:tokens.semantic.text.subtlest},  


    //하단배너
    Banner : {borderRadius: 16, backgroundColor:'#e6f3ff', marginTop:16, paddingHorizontal:16, justifyContent:'center',alignItems:'center'},
    bannerText : {paddingVertical:21,justifyContent:'center'},
    bannerDt : {fontSize: tokens.typo.body.smallDefault.fontSize, color:'#30363e'},
    bannerDd : {color:tokens.semantic.text.subtlest},
    // Pressed
    BannerPressed : {borderRadius: 16, backgroundColor:'#E0F0FF', marginTop:16, paddingHorizontal:16, justifyContent:'center',alignItems:'center'},


    //홈바
    botSheetWrap : {position:'relative', height:56, borderTopLeftRadius:24, borderTopRightRadius:24, backgroundColor:tokens.semantic.bg.inverse, 
        shadowColor: "#000000", shadowOffset: {width: 0,height: -2}, hadowOpacity: 0.07,elevation: 12},
    botAppBar : {position:'relative',borderTopWidth:1, borderStyle:'solid', borderColor:'#f2f2f2',backgroundColor:tokens.semantic.bg.inverse, paddingBottom:10,
        shadowColor: "#000000",shadowOffset: {width: 0,height: -2},shadowOpacity: 0.07,elevation: 12},
    botAppBarBtns : { paddingTop:16, paddingBottom:2, paddingHorizontal:24, backgroundColor:tokens.semantic.bg.inverse },
    barBtn : { position:'relative' },
    barBtnText : { fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, color:tokens.semantic.text.disabledStrong, marginTop: 4 },
    barBtnText_p : { fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, color:tokens.semantic.text.disabledDefault, marginTop: 4 },
    barBtnCnt : { position:'absolute', top:-5, left:'50%', minWidth:18, height:18, borderRadius:18, backgroundColor:'#f56363', paddingHorizontal:4 },
    barBtnCntNum : { fontSize:tokens.typo.caption.mediumDefault.fontSize, letterSpacing:-0.16, color:tokens.semantic.text.inverse, textAlign:'center' },
    btnHome : {position:'absolute', top:-28, alignItems:'center'},
    barBtnHome : {fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, color:tokens.semantic.text.brandDefault, marginTop:9},

    //메인 하단 시트
        //출퇴근 등록확인
        commuteDay : {letterSpacing:-0.23, color:tokens.semantic.text.strong, fontSize:tokens.typo.body.mediumDefault.fontSize},
        commuteBox : {borderRadius: 12, backgroundColor:tokens.semantic.bg.neutralSubtle, marginTop:10, paddingHorizontal:16, paddingTop:22, paddingBottom:16},
        commuteTime : {justifyContent:'center',alignItems:'center'},
        commuteArrow : {marginHorizontal:8},
        commuteDt: {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2,color:tokens.semantic.text.subtlest,marginBottom:4 }, 
        commuteDd: {fontSize:tokens.typo.body.largeDefault.fontSize, letterSpacing:-0.24,color:tokens.semantic.text.disabledStrong}, 
        commuteDdCheck: {color:tokens.semantic.text.default}, 
        commuteAlert : {marginTop:15, justifyContent:'center', borderTopWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralDefaultPressed},
        commuteBl : {top:21, marginRight:8, minWidth:6, height:6, borderRadius:18, backgroundColor:tokens.semantic.bg.brandDefault},
        commuteText : {color:tokens.semantic.text.brandDefault,paddingTop:15},
        commuteBlRed : {top:21, marginRight:8, minWidth:6, height:6, borderRadius:18, backgroundColor:'#e65364'},
        commuteTextRed : {paddingTop:15,color:'#e65364'},    
        
    // 메인 위치 설정
    lcSearchBox: {position:'absolute', paddingVertical:12, paddingHorizontal:16, borderRadius:12, backgroundColor:tokens.semantic.bg.inverse, shadowColor: '#000000', shadowOffset: {width:0, height:2}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5},
    lcSearchText: {fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.23, color:tokens.semantic.text.default},
    lcCrossHair: {position:'absolute', width:40, height:40, borderRadius:30, backgroundColor:tokens.semantic.bg.inverse, shadowColor: '#000000', shadowOffset: {width:0, height:1}, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3},
}

// **************************************************
// 컨텐츠 공통
// **************************************************
//목록 
export const commList : any = {
    // 공통 라인
    line: {width:'100%', height:1, backgroundColor:tokens.semantic.bg.neutralDefault},
    // 리스트 그래프
    listGraphWrap : {width:'100%', paddingBottom:24, paddingHorizontal:16, backgroundColor:tokens.semantic.bg.inverse},
    listGraph : { marginTop:8, minWidth:188, minHeight:94 },
    listGraphTextBox : { width:'100%', height:72, borderRadius:12, backgroundColor:tokens.semantic.bg.selected },
    listGraphTextBoxNoH : { marginTop: 8, marginBottom: 24, marginHorizontal: 16, height:72, borderRadius:12, backgroundColor:tokens.semantic.bg.selected },
    listGraphTextBoxNoM : { marginTop: 8, borderRadius:12, paddingVertical:17, backgroundColor:tokens.semantic.bg.selected},
    listGraphTextBoxLine : { width:1, height:24, backgroundColor:'#e1e9f7' },
    listGraphTextTit : { fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, color:tokens.semantic.text.subtlest,textAlign: 'center' },
    listGraphTextNum : { marginTop:4, fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21, color:tokens.semantic.text.default },
    listGraphTextNumBlue : { marginTop:4, fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21, color:tokens.semantic.text.brandDefault },
    listGraphBsTxt : {marginRight:2, fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.3, color:tokens.semantic.text.subtle},
    listGraphData : {fontSize:tokens.typo.title.mediumStrong.fontSize, letterSpacing:-0.19},
    // 리스트 Fn
    listFnWrap : { height:24, lineHeight:24, marginHorizontal:16, marginTop:16, marginBottom:8, paddingHorizontal:4 },
    listFnEmptyWrap : { position:'absolute', top:20, left:20, right:20, lineHeight:24 },
    listFnText : { fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.subtle, marginRight: 2 },
    listFnText_d : { fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.disabledDefault, marginRight: 2 },
    listFnText_p : { fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.subtlest, marginRight: 2 },
    listFnSwitchText : { fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.subtlest, textAlign:'right' },
    listFillterText : { fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.19, color:tokens.semantic.text.brandDefault },
    // 리스트
    listScrollWrap : { paddingHorizontal:16 },
    listWrap : { position:'relative',marginBottom:8, padding:20, borderRadius:12, backgroundColor:tokens.semantic.bg.inverse },
    listWrapPressed : { position:'relative',marginBottom:8, padding:20, borderRadius:12, backgroundColor:tokens.semantic.bg.neutralDefault },
    iconBox : { marginRight:16, width:48, height:48, borderRadius:13, backgroundColor:'#f6f8fa' },
    imgBox : { marginRight:16, width:48, height:48, borderRadius:48, backgroundColor:'#f6f8fa' },
    listTitle : { marginBottom:4, lineHeight: tokens.typo.body.mediumDefault.lineHeight, fontSize:tokens.typo.body.mediumDefault.fontSize, color:tokens.semantic.text.strong, letterSpacing:-0.22 },  
    listTitleBold : { ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), fontSize:tokens.typo.body.mediumDefault.fontSize, color:tokens.semantic.text.strong, letterSpacing:-0.22 },  
    listTitleDate : { paddingHorizontal:4, marginTop:22, marginBottom:11, fontSize:tokens.typo.body.mediumDefault.fontSize, color:tokens.semantic.text.subtle, letterSpacing:-0.23 },  // 타이틀 영역의 날짜
    listName : { marginBottom:4, lineHeight: tokens.typo.body.mediumDefault.lineHeight, fontSize:tokens.typo.body.mediumDefault.fontSize, color:tokens.semantic.text.strong, letterSpacing:-0.23 },   //이름
    listTeam : { marginBottom:6, fontSize:tokens.typo.body.xsmallDefault.fontSize, color:tokens.semantic.text.subtlest, letterSpacing:-0.2 },    //Cell
    listDate : { lineHeight:tokens.typo.caption.largeDefault.lineHeight, marginBottom:0, fontSize:tokens.typo.caption.largeDefault.fontSize, color:tokens.semantic.text.subtlest, letterSpacing:-0.18 },   //날짜
    listTxt : { lineHeight:tokens.typo.caption.largeDefault.lineHeight, marginBottom:0, fontSize:tokens.typo.caption.largeDefault.fontSize, color:tokens.semantic.text.subtlest, letterSpacing:-0.18 },    //일반텍스트
    listTime : { lineHeight:tokens.typo.caption.largeDefault.lineHeight, marginBottom:0, fontSize:tokens.typo.caption.largeDefault.fontSize, color:tokens.semantic.text.subtlest, letterSpacing:-0.18 },   //시간
    listAtten : { marginBottom:0, marginLeft:4, fontSize:tokens.typo.caption.largeDefault.fontSize, color:tokens.semantic.text.strong, letterSpacing:-0.18 },  //근태
    listReadText : { color:tokens.semantic.text.disabledStrong},  
    listFolding : { paddingTop:15, marginTop:20, borderTopWidth:1, borderStyle:'solid', borderTopColor:'#e1e3e6' },
    listFoldingText : { marginRight:2, fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing: -0.2, color: tokens.semantic.text.default },
    listTextLine: {width:1, height: 10, marginHorizontal:4, backgroundColor:'rgba(0, 0, 0, 0.2)'},

    // 알림 카테고리
    listCategoryWrap : {height:56,backgroundColor:tokens.semantic.bg.inverse},
    listCategoryView : {paddingTop:8,paddingBottom:16,},
    listCategory : {height:32,marginHorizontal:3,paddingHorizontal:14, borderWidth:1, borderStyle:'solid', borderRadius:32, borderColor:tokens.semantic.border.neutralSubtle, backgroundColor:tokens.semantic.bg.inverse},
    listCategoryOn : {height:32,marginHorizontal:3,paddingHorizontal:14, borderWidth:1, borderStyle:'solid', borderRadius:32, borderColor:'#435f91', backgroundColor:'#435f91'},
    listCategoryTxt: {...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight), fontSize: tokens.typo.body.smallDefault.fontSize, color: tokens.semantic.text.strong, letterSpacing: -0.21},
    listCategoryTxtOn: {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize: tokens.typo.body.smallDefault.fontSize, color: tokens.semantic.text.inverse, letterSpacing: -0.21},
    
    // 알림 리스트
    listDateWrapToday : { marginTop:20,marginBottom:12, fontSize:tokens.typo.body.xsmallDefault.fontSize, color:tokens.semantic.text.brandDefault, letterSpacing:-0.2 }, // 날짜구분(오늘)
    listDateWrap : { marginTop:12,marginBottom:12, fontSize:tokens.typo.body.xsmallDefault.fontSize, color:tokens.semantic.text.subtle, letterSpacing:-0.2 },      // 날짜구분
    listAlertTitle : { fontSize:tokens.typo.body.mediumDefault.fontSize, color:tokens.semantic.text.strong, letterSpacing:-0.22 },              //알림 타이틀
    listAlertTxt01 : { fontSize:tokens.typo.caption.largeDefault.fontSize, color:tokens.semantic.text.subtlest, letterSpacing:-0.18 },              //알림 텍스트01
    listAlertTxt02 : { marginTop:4, fontSize:tokens.typo.body.xsmallDefault.fontSize, color:tokens.semantic.text.subtle, letterSpacing:-0.2 },  //알림 텍스트02
    listAmountTxt : { fontSize:tokens.typo.body.mediumDefault.fontSize, color:tokens.semantic.text.strong, letterSpacing:-0.23 },               //가격
    listAlertLine : { width:1,height:10,marginHorizontal:4,backgroundColor:'#cfd2d6' },  //알림 라인

    // 리스트 중요 표시
    listEventWrap : { position:'relative' },
    listEventDot : { position:'absolute', top: 2, left: 80, width: 4, height: 4, borderRadius: 4, backgroundColor: '#f56363' },

    // 다운로드 버튼
    downLoadBtn : { backgroundColor:tokens.semantic.bg.inverse, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralSubtle, borderRadius:8, paddingVertical:12, overflow:'hidden' },
    downLoadBtnDisa : { backgroundColor:tokens.semantic.bg.inverse, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralSubtler, borderRadius:8, paddingVertical:12, overflow:'hidden' },
    downLoadBtnPressed : { backgroundColor:tokens.semantic.bg.inverse, borderWidth:1, borderStyle:'solid', borderColor:'#a9abb0', borderRadius:8, paddingVertical:12, overflow:'hidden' },
    downLoadBtnText: { color: tokens.semantic.text.default, fontSize:tokens.typo.body.xsmallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), letterSpacing: -0.2, textAlign: 'center' },
    downLoadBtnTextDisa: { color: 'rgba(53, 60, 73, 0.28)', fontSize:tokens.typo.body.xsmallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), letterSpacing: -0.2, textAlign: 'center' },

    // 스켈레톤 리스트
    skeImgBox : {width:48,height:48,marginRight:20,borderRadius:13,backgroundColor:'#f2f4f7'},
    skeTextBox01 : {width:146,height:18,marginBottom:6,borderRadius:4,backgroundColor:'#f2f4f7'},
    skeTextBox02 : {width:160,height:14,marginBottom:4,borderRadius:4,backgroundColor:'#f2f4f7'},
    skeTextBox03 : {width:72,height:14,borderRadius:4,backgroundColor:'#f2f4f7'},
    skeRightTopBox : {width:100,height:100,borderRadius:10,backgroundColor:'#f2f4f7'},
    skeLeftTopTxtBox01 : {width:100,height:24,borderRadius:4,backgroundColor:'#f2f4f7'},
    skeLeftTopTxtBox02 : {width:84,height:16,borderRadius:4,backgroundColor:'#f2f4f7'},
    skeLeftTopTxtBox03 : {width:121,height:16,borderRadius:4,backgroundColor:'#f2f4f7'},
    skeBottomTxtBox01 : {height:52,borderRadius:10,backgroundColor:'#f2f4f7'},
    skeLeftTxtBox01 : {width:160,height:20,borderRadius:4,backgroundColor:'#f2f4f7'},
    skeLeftTxtBox02 : {width:144,height:18,borderRadius:4,backgroundColor:'#f2f4f7'},
    skeRightTxtBox01 : {width:40,height:24,borderRadius:4,backgroundColor:'#f2f4f7'},
    skeRightTxtBox02 : {width:40,height:12,borderRadius:4,backgroundColor:'#f2f4f7'},
    skeWhiteTxtBox01 : {height:16,borderRadius:4,backgroundColor:tokens.semantic.bg.inverse},
    skeBox1 : {width:128,height:20,borderRadius:4,backgroundColor:'#f2f4f7'},
    skeBox2 : {width:224,height:36,borderRadius:6,backgroundColor:'#f2f4f7'},
    skeBox3 : {paddingHorizontal:20, paddingTop:21, paddingBottom:20, borderRadius:12,backgroundColor:'#f2f4f7'},
    skeBox4 : {height:36, borderRadius:6,backgroundColor:'#f2f4f7'},
    skeTxtBox1 : {height:16,borderRadius:4,backgroundColor:tokens.semantic.bg.inverse},
    skeTxtBox2 : {width:80, height:24, borderRadius:4, backgroundColor:'#f2f4f7'},
    skeTxtBox3 : {width:128, height:24, borderRadius:4, backgroundColor:'#f2f4f7'},
    skeTxtBox4 : {width:64, height:20, borderRadius:4, backgroundColor:tokens.semantic.bg.inverse},
    skeTxtBox5 : {width:48, height:18, borderRadius:4, backgroundColor:'#f2f4f7'},
    skeTxtBox6 : {width:120, height:16, borderRadius:4, backgroundColor:'#f2f4f7'},
    skeTxtBox7 : {width:80, height:20, borderRadius:4, backgroundColor:'#f2f4f7'},
    skeTxtBox8 : {width:64, height:24, borderRadius:4, backgroundColor:'#f2f4f7'},
    skeTxtBox9 : {width:160, height:24, borderRadius:4, backgroundColor:'#f2f4f7'},
    skeTxtBox10 : {width:128, height:24, borderRadius:4, backgroundColor:'#f2f4f7'},

    // 스켈레톤 메인
    skeMainBox01 : {width:216,height:26,marginTop:16,marginBottom:4,marginLeft:8,borderRadius:4,backgroundColor:tokens.semantic.bg.inverse},
    skeMainBox02 : {width:136,height:26,marginBottom:7,borderRadius:4,marginLeft:8,backgroundColor:tokens.semantic.bg.inverse},
    skeMainBox03 : {width:88,height:16,marginBottom:32,borderRadius:4,marginLeft:8,backgroundColor:tokens.semantic.bg.inverse},
    skeMainBox04 : {height:56,marginBottom:8,borderRadius:12,backgroundColor:tokens.semantic.bg.inverse},
    skeMainBox05 : {height:72,marginBottom:0,borderRadius:12,backgroundColor:tokens.semantic.bg.inverse},
    skeMainBox06 : {height:122,borderRadius:16,backgroundColor:'#f2f4f7'},
    skeMainBox07 : {width:32,height:32,marginLeft:24,marginRight:8,borderRadius:4,backgroundColor:'#f2f4f7'},
    skeMainBox08 : {width:72,height:16,borderRadius:4,backgroundColor:'#f2f4f7'},
    skeMainBox09 : {height:72,marginTop:20,borderRadius:16,backgroundColor:'#f2f4f7'},

    // 첨부파일 리스트
    fileList : {position:'relative',marginBottom:8, padding:20, backgroundColor:tokens.semantic.bg.inverse},
    fileListBr1 : {borderRadius:12},
    fileListBr2 : {borderTopLeftRadius:12, borderBottomLeftRadius:12, borderTopRightRadius: 0, borderBottomRightRadius: 0},
    fileIconWrap : {width:48, height:48, borderRadius:8, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralSubtler, overflow:'hidden'},
    fileFoldWrap : {width:48, height:48, borderRadius:8, backgroundColor:'#f6f8fa', overflow:'hidden'},
    fileIconNameWrap1 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#f45f5f'}, // pdf
    fileIconNameWrap2 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#f7bc09'}, // jpg, gif, png, tif, bmp
    fileIconNameWrap3 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#f77e5d'}, // ppt, pptx
    fileIconNameWrap4 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#31b56f'}, // xsl, xlsx
    fileIconNameWrap5 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#26acfb'}, // onffice, onex, word, doc, docx, hwp, gul
    fileIconNameWrap6 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#785fb3'}, // avi, wmv, asf, mp4, mov, mpg, mpeg
    fileIconNameWrap7 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#53c9c9'}, // html, htm, eml
    fileIconNameWrap8 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#a2a2a2'}, // txt, rtf
    fileIconNameWrap9 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#a19893'}, // zip
    fileIconNameWrap10 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#af6cc5'}, // mp3, wav, waa, wma
    fileIconNameWrap11 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#e24444'}, // flv
    fileIconNameWrap12 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#f75d45'}, // ones
    fileIconNameWrap13 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#fe9903'}, // svg, ai
    fileIconNameWrap14 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#25c6f7'}, // key
    fileIconNameWrap15 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#587bf0'}, // ics
    fileIconNameWrap16 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#a7b4c4'}, // iso
    fileIconNameWrap17 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#8e9eb2'}, // etc
    fileIconNameWrap18 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#2289f2'}, // psd
    fileIconNameWrap19 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#eb38b5'}, // xd
    fileIconNameWrap20 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#e6287c'}, // id
    fileIconNameWrap21 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#bc3ab7'}, // pr
    fileIconNameWrap22 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#915ec1'}, // ae
    fileIconNameWrap23 : {height:12, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'#89a42e'}, // dwg
    fileIconNameText : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:8, lineHeight:12, textAlign:'center', letterSpacing:-0.12, color:tokens.semantic.text.inverse},
    fileInfoWrap: {width:'90%'},
    fileSizeText: {marginTop:4, fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, color:tokens.semantic.text.subtlest},
    fileText: {fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, color:tokens.semantic.text.subtlest},
    fileLine: {marginHorizontal:5,width:1,height:10,backgroundColor:'rgba(0,0,0,0.2)'},
    fileDeleteWrap: {position:'relative', minHeight:88, borderRadius:12, backgroundColor: tokens.semantic.bg.inverse},
    fileDelete: {position:'absolute', top:0, right:1, bottom:0, width:64, borderTopRightRadius:12, borderBottomRightRadius:12, backgroundColor: '#e65364'},

    checkOnImg : {position:'absolute', top:0, left:0, right:0, bottom: 0, borderRadius:12, borderWidth: 1, borderStyle:'solid', borderColor:tokens.semantic.border.brandDefault, backgroundColor:'rgba(68, 128, 240, 0.06)' , justifyContent:'center',alignItems:'center', zIndex:10},
}

// 리스트 공통 상태값
export const listState : any = {
    box : { paddingVertical:3, paddingHorizontal:7, borderWidth:1, borderStyle:'solid', borderRadius:11, backgroundColor:tokens.semantic.bg.inverse },
    box2 : { paddingVertical:3, paddingHorizontal:10, borderWidth:1, borderStyle:'solid', borderRadius:11, backgroundColor:tokens.semantic.bg.inverse },
    type1 : { borderColor:'rgba(68, 128, 240, 0.4)', ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.caption.mediumDefault.fontSize, color:tokens.semantic.text.brandDefault, textAlign:'center', letterSpacing:-0.17 },  // 진행 (파랑색)
    type2 : { borderColor:'rgba(224, 166, 0, 0.4)', ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.caption.mediumDefault.fontSize, color:'#e0a600', textAlign:'center', letterSpacing:-0.17  },  // 필요 (노랑색)
    type3 : { borderColor:'rgba(230, 83, 100, 0.4)', ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.caption.mediumDefault.fontSize, color:'#e65364', textAlign:'center', letterSpacing:-0.17 },  // 반려 (빨강색)
    type4 : { borderColor:'rgba(126, 137, 150, 0.4)', ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.caption.mediumDefault.fontSize, color:tokens.semantic.text.subtlest, textAlign:'center', letterSpacing:-0.17 }, // 완료 (회색)
    type5 : { borderColor:'rgba(48, 196, 143, 0.4)', ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.caption.mediumDefault.fontSize, color:'#2bb46e', textAlign:'center', letterSpacing:-0.17 },  // 적용 (녹색)
    type6 : { borderColor:'rgba(31, 171, 191, 0.4)', ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.caption.mediumDefault.fontSize, color:'#1fabbf', textAlign:'center', letterSpacing:-0.17 },  // 진행 (청록색)
}
export const listState02 : any = {
    box : { paddingVertical:4, paddingHorizontal:8, borderRadius:11 },
    dot1 : { width:4,height:4,borderRadius:4,backgroundColor:tokens.semantic.bg.brandDefault,},
    dot2 : { width:4,height:4,borderRadius:4,backgroundColor:'#e65364',},
    type1 : { ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.caption.mediumDefault.fontSize, color:tokens.semantic.text.brandDefault, textAlign:'center', letterSpacing:-0.17, backgroundColor:tokens.semantic.bg.selected },  // 정상근무
    type2 : { ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.caption.mediumDefault.fontSize, color:'#e65364', textAlign:'center', letterSpacing:-0.17, backgroundColor:'#fff2f4'  }, // 이상근태
    type3 : { ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.caption.mediumDefault.fontSize, color:tokens.semantic.text.accentIndigoDefault, textAlign:'center', letterSpacing:-0.17, backgroundColor:tokens.semantic.bg.neutralSubtle },  // 초과
    type4 : { ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.caption.mediumDefault.fontSize, color:tokens.semantic.text.subtlest, textAlign:'center', letterSpacing:-0.17, backgroundColor:'#f5f6f7' },  // 미적용
}

// 리스트 공통 앱바
export const listAppBar : any = {
    botSheetWrap : { 
        position:'relative', height:56, borderTopLeftRadius:24, borderTopRightRadius:24, backgroundColor:tokens.semantic.bg.inverse,
        // box shadow
        shadowColor: "#000000",shadowOffset: {width: 0,height: -2},shadowOpacity: 0.07,elevation: 12
    },
    botBtnText : { fontSize: tokens.typo.body.mediumDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), color: '#111111', letterSpacing: -0.23 },
    botBtnText_d : { fontSize: tokens.typo.body.mediumDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), color: tokens.semantic.text.disabledDefault, letterSpacing: -0.23 },
    botBtnText_p : { fontSize: tokens.typo.body.mediumDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), color: tokens.semantic.text.subtlest, letterSpacing: -0.23 },
    botBtnTextDisabled : { fontSize: tokens.typo.body.mediumDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), color: tokens.semantic.text.disabledDefault, letterSpacing: -0.23 },
    botAppBar : { 
        position:'relative',borderTopWidth:1, borderStyle:'solid', borderColor:'#f2f2f2',backgroundColor:tokens.semantic.bg.inverse, paddingBottom:10,
        // box shadow
        shadowColor: "#000000",shadowOffset: {width: 0,height: -2},shadowOpacity: 0.07,elevation: 22
    },
    botAppBarBtns : { paddingTop:16, paddingBottom:2, paddingHorizontal:24, backgroundColor:tokens.semantic.bg.inverse },
    barBtn : { position:'relative' },
    barBtnText : { fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, color:tokens.semantic.text.disabledStrong, marginTop: 4 },
    barBtnText_p : { fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, color:tokens.semantic.text.disabledDefault, marginTop: 4 },
    barBtnCnt : { position:'absolute', top:-5, left:'50%', minWidth:18, height:18, borderRadius:18, backgroundColor:'#f56363', paddingHorizontal:4 },
    barBtnCntNum : { fontSize:tokens.typo.caption.mediumDefault.fontSize, letterSpacing:-0.16, color:tokens.semantic.text.inverse, textAlign:'center' },
}

// 리스트 공통 날짜부분
export const listDatePicker : any = {
    // 날짜선택
    datePickerWrap : { height:56, lineHeight:56, backgroundColor:tokens.semantic.bg.inverse }, 
    datePickerWrapNoH : { paddingTop: 10, backgroundColor:tokens.semantic.bg.inverse }, // 높이 없는 버전
    datePickerTextWrap : { marginHorizontal:16 }, 
    datePickerText : { fontSize:tokens.typo.title.smallStronger.fontSize, letterSpacing:-0.26, color:tokens.semantic.text.strong }, 
    datePickerText_d : { fontSize:tokens.typo.title.smallStronger.fontSize, letterSpacing:-0.26, color:tokens.semantic.text.disabledDefault }, 
    datePickerText_p : { fontSize:tokens.typo.title.smallStronger.fontSize, letterSpacing:-0.26, color:tokens.semantic.text.subtlest }, 
    datePickerSubText : { fontSize:tokens.typo.caption.mediumDefault.fontSize, letterSpacing:-0.16, color:tokens.semantic.text.subtlest }, 
    datePickerSubText_d : { fontSize:tokens.typo.caption.mediumDefault.fontSize, letterSpacing:-0.16, color:tokens.semantic.text.disabledDefault }, 
    // 근무시간승인 날짜선택
    datePickerSticky : {position:'absolute',bottom:-38,left:'50%',transform:[{translateX:-50}],paddingLeft:8,paddingRight:6,paddingVertical:6,borderRadius:14,backgroundColor:'rgba(53, 60, 73, 0.8)',shadowColor: "#000000",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.23,shadowRadius: 2.62,elevation: 4},
    datePickerStickyText : {marginRight:2,lineHeight:tokens.typo.caption.largeDefault.lineHeight,fontSize:tokens.typo.caption.largeDefault.fontSize,letterSpacing:-0.18,color:tokens.semantic.text.inverse},
}

// 상세 > 작성,상신,취소 화면
export const writeState : any = {
    // 작성
    writeBox :{paddingTop:39, paddingBottom:32, backgroundColor:tokens.semantic.bg.inverse},                               // writeState.writeBox
    boxTitle : {fontSize:tokens.typo.body.mediumDefault.fontSize, color: tokens.semantic.text.brandDefault, letterSpacing: -0.3 },                                     // writeState.boxTitle
    boxSubTitle : {fontSize:tokens.typo.body.smallDefault.fontSize, color: tokens.semantic.text.subtle, letterSpacing: -0.21 },
    boxStitle : {lineHeight:tokens.typo.body.xsmallDefault.lineHeight, ...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight), fontSize:tokens.typo.body.xsmallDefault.fontSize, color: tokens.semantic.text.subtlest, paddingTop:25, paddingBottom:2, letterSpacing: -0.2 },    // writeState.boxStitle
    boxStitleBold : {...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), fontSize:tokens.typo.body.xsmallDefault.fontSize, color: tokens.semantic.text.subtlest, paddingTop:25, paddingBottom:2, letterSpacing: -0.2 },    // writeState.boxStitleBold
    boxBt : { borderTopWidth:8, borderStyle:'solid', borderTopColor:tokens.semantic.border.neutralSubtler },                          // writeState.boxBt
    selectBox : { borderBottomWidth:1, borderStyle:'solid', borderBottomColor:tokens.semantic.border.neutralDefault },                // writeState.selectBox
    selectBox_alert : {borderBottomWidth:1, borderStyle:'solid', borderBottomColor:'#e65364' },           // writeState.selectBox_alert
    selectBox_disabled : {borderBottomWidth:1, borderStyle:'solid', borderBottomColor:tokens.semantic.border.neutralSubtler },        // writeState.selectBox_disabled
    selectBox_pressed : {borderBottomWidth:1, borderStyle:'solid', borderBottomColor:tokens.semantic.border.brandDefault },         // writeState.selectBox_pressed
    inputInfo : {marginTop:8, color:'#e65364',letterSpacing:-0.18},                                       // writeState.inputInfo
    
    //상단 설명 문구
    infoBox:{borderRadius:12, backgroundColor: tokens.semantic.bg.neutralSubtle, paddingVertical:16, paddingHorizontal:20, marginTop:24, lineHeight:17}, 
    bText: {color: tokens.semantic.text.strong, fontSize: tokens.typo.title.largeStronger.fontSize, lineHeight:tokens.typo.title.largeStronger.lineHeight, letterSpacing: -0.33, marginTop:2 },      
    sText: {...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight), color: tokens.semantic.text.subtlest, fontSize: tokens.typo.body.xsmallDefault.fontSize, lineHeight:tokens.typo.body.xsmallDefault.lineHeight, letterSpacing: -0.2},       
    infoText: { color: tokens.semantic.text.default,fontSize: tokens.typo.caption.largeDefault.fontSize, lineHeight:tokens.typo.caption.largeDefault.lineHeight, marginLeft:14, letterSpacing: -0.18 },  

    // 상신
    approvalBox : {paddingTop:39, paddingBottom:32, backgroundColor:tokens.semantic.bg.inverse},
    textInputView : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.body.mediumDefault.fontSize, lineHeight:tokens.typo.body.mediumDefault.lineHeight, letterSpacing:-0.22, color:tokens.semantic.text.strong, paddingVertical:16},
    textInputView_d : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.body.mediumDefault.fontSize, lineHeight:tokens.typo.body.mediumDefault.lineHeight, letterSpacing:-0.22, color:tokens.semantic.text.disabledDefault, paddingVertical:16},
    infoBoxApproval : {borderRadius:12, backgroundColor: tokens.semantic.bg.neutralSubtle, padding:20, marginTop:16 },
    infoBoxApprovalTit : {fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, color:tokens.semantic.text.subtle, minWidth:40, marginRight:24},
    infoBoxApprovalTxt : {fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, color:tokens.semantic.text.default},
    approvalTit : {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.subtlest, minWidth:54, marginRight:24, lineHeight:tokens.typo.body.xsmallDefault.lineHeight},
    approvalTxt : {fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21, color:tokens.semantic.text.strong, lineHeight:tokens.typo.body.smallDefault.lineHeight },
    approvalLine : {height:14, borderRightWidth:1, borderStyle:'solid', borderRightColor:'#d9dcde', marginHorizontal:16},

    // 조정
    adjustmentBox : {paddingTop:39, paddingBottom:20, backgroundColor:tokens.semantic.bg.inverse},
    adjustmentTit : {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.subtlest, minWidth:54, marginRight:24, lineHeight:tokens.typo.body.xsmallDefault.lineHeight},
    adjustmentTxt : {fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21, color:tokens.semantic.text.strong, lineHeight:tokens.typo.body.smallDefault.lineHeight },
    switchBoxAdjustment : {borderRadius:12, backgroundColor: tokens.semantic.bg.neutralSubtle, padding:20, marginTop:16 },
    switchInfoText : {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.default, lineHeight:tokens.typo.body.xsmallDefault.lineHeight},
    switchInfoBox : {borderRadius:12, backgroundColor: tokens.semantic.bg.neutralSubtle, padding:20, marginTop:16 },
    infoGrayBox : {borderRadius:12, backgroundColor: tokens.semantic.bg.neutralSubtle, padding:20, marginTop:10},
    infoGrayTit : {fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, color:tokens.semantic.text.subtle, },
    infoGrayTxt : {lineHeight:tokens.typo.caption.largeDefault.lineHeight, fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, color:tokens.semantic.text.default},
    infoGrayTxt2 : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.default},

    //하단 버튼
    footBtn : {paddingTop:10,paddingBottom:24, paddingHorizontal:24},
    footInBtn : {paddingBottom:24, paddingHorizontal:24},
    appFootBtn : {paddingBottom:24},
    appBtnGroup : { paddingTop: 16, paddingBottom: 24, paddingHorizontal:24, columnGap:8 },

    // 취소
    originalBtn : {minWidth:86, maxWidth:110, height:32,lineHeight:32,borderRadius:6,borderWidth:1,borderStyle:'solid',borderColor:tokens.semantic.border.neutralSubtle,backgroundColor:tokens.semantic.bg.inverse},
    originalBtnText : {marginRight:2,fontSize:tokens.typo.body.xsmallDefault.fontSize,...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight),letterSpacing:-0.2,color:tokens.semantic.text.default},

    // 기타
    lineBar : {height:1,backgroundColor:tokens.semantic.bg.neutralDefault,marginVertical:28}
}

// 공통 요약컨텐츠
export const sumContent : any = {
    sumConWrap : { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 24, backgroundColor:tokens.semantic.bg.inverse },
    sumConBox : {paddingLeft: 4, paddingVertical: 4, borderRadius: 10, backgroundColor: tokens.semantic.bg.neutralDefault },
    sumCon: { height: 56, marginRight: 4 },
    sumConPressed: { height: 56, marginRight: 4, borderRadius: 7, backgroundColor: tokens.semantic.bg.inverse, shadowColor: "#000000",shadowOffset: {width: 0,height: 1},shadowOpacity: 0.23, shadowRadius: 2.22, elevation: 3 },
    sumConDisabled: { height: 56, marginRight: 4, borderRadius: 7, backgroundColor: tokens.semantic.bg.inverse },
    sumConUnSelected: { height: 56, marginRight: 4, borderRadius: 7, backgroundColor: tokens.semantic.bg.neutralStrong },
    sumTxt: { fontSize: tokens.typo.caption.largeDefault.fontSize, letterSpacing: -0.18, color: tokens.semantic.text.subtlest, textAlign: 'center' },
    sumTxtPressed: { fontSize: tokens.typo.caption.largeDefault.fontSize, letterSpacing: -0.18, color: tokens.semantic.text.default, textAlign: 'center' },
    sumTxtDisabled: { fontSize: tokens.typo.caption.largeDefault.fontSize, letterSpacing: -0.18, color: tokens.semantic.text.disabledDefault, textAlign: 'center' },
    sumTxtUnSelected: { fontSize: tokens.typo.caption.largeDefault.fontSize, letterSpacing: -0.18, color: tokens.semantic.text.subtle, textAlign: 'center' },
    sumNum : { fontSize: tokens.typo.body.smallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), marginTop: 2, letterSpacing: -0.21, color: tokens.semantic.text.subtlest },
    sumNumPressed : { fontSize: tokens.typo.body.smallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), marginTop: 2, letterSpacing: -0.21, color: tokens.semantic.text.default},
    sumNumDisabled : { fontSize: tokens.typo.body.smallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), marginTop: 2, letterSpacing: -0.21, color: tokens.semantic.text.disabledDefault},
    sumNumUnSelected : { fontSize: tokens.typo.body.smallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), marginTop: 2, letterSpacing: -0.21, color: tokens.semantic.text.subtle},

    // 스켈레톤
    skeSumConBox : { paddingHorizontal: 16, paddingVertical: 16, borderRadius: 10, backgroundColor: tokens.semantic.bg.neutralDefault },
}

// **************************************************
// 근태관리, 근태결재승인
// **************************************************
// 근태관리 작성하기
export const amWrite : any = {
    // 근무시간/잔여시간
    timeBox :{borderRadius:12, backgroundColor: tokens.semantic.bg.neutralSubtle, padding:20, marginTop:10, lineHeight:18},     
    dtColor : {letterSpacing: -0.18, textAlign: 'left', color: tokens.semantic.text.subtle, paddingRight:8 },             
    timeColor : {letterSpacing: -0.18, textAlign: 'right', color: tokens.semantic.text.default},       
    stempText : {fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing: -0.28, color: tokens.semantic.text.default, lineHeight:tokens.typo.body.smallDefault.lineHeight},                          
    line : {borderRightWidth:1, borderStyle:'solid', borderRightColor:'#d9dcde', marginHorizontal:16},  
}

// 주소검색, 거리계산, 기록물철검색
export const amAddress : any = {
    // 목록
    addressList: {marginTop:7},                                                     
    mb50: {marginBottom:50},                                                        
    imgBox : {marginRight:8, letterSpacing: -0.18},                                 
    company :{fontSize:tokens.typo.body.mediumDefault.fontSize, lineHeight:tokens.typo.body.mediumDefault.lineHeight, letterSpacing: -0.23, paddingBottom:4}, 
    addressPressed : {backgroundColor: tokens.semantic.bg.neutralDefault,marginHorizontal:0,paddingHorizontal:24}, 
    addressView : {borderBottomWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralSubtler, paddingBottom:16, paddingTop:17, marginHorizontal:24}, 
    addressDetail : {paddingBottom:14, paddingTop:23,...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), color: tokens.semantic.text.strong, fontSize:tokens.typo.body.mediumDefault.fontSize, lineHeight:tokens.typo.body.mediumDefault.lineHeight},  
}

//출장거리 검색
export const amTrip : any = {
    distance : {marginTop:24, marginBottom:32, position:'relative', paddingHorizontal: 24},  
    topImg :{width:18, height:72, marginRight:8, marginTop:9},                  
    checkOn: {backgroundColor:tokens.semantic.bg.neutralSubtle},                                      
    checkPressed :{backgroundColor: tokens.semantic.bg.neutralDefault},                  
    addBox : {borderRadius:12,backgroundColor:tokens.semantic.bg.neutralSubtle,fontSize:tokens.typo.body.mediumDefault.fontSize,color:tokens.semantic.text.default,letterSpacing: -0.23, marginBottom:8, paddingHorizontal:16,paddingVertical:11,overflow:'hidden'}, 
    amTripTitle : {fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing: -0.23, color:tokens.semantic.text.subtle, paddingTop:39, paddingBottom:23, paddingHorizontal:24},  
    listBox :{height:56, marginVertical:8,justifyContent:'center',alignItems:'center',paddingHorizontal:24, position:'relative'},                  
    listKm : {fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing: -0.23, color:tokens.semantic.text.subtle, paddingRight:8, textAlign:'right', marginRight:24},           
    listLine: {marginHorizontal:24,borderBottomWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralSubtler},                           
    liskCheck : {width:24, height:24, position:'absolute', right:24},

    box : { paddingVertical:4, paddingHorizontal:8, borderWidth:1, borderStyle:'solid', borderRadius:11, backgroundColor:tokens.semantic.bg.inverse,justifyContent:'center',alignItems:'center' },
    type1 : { borderColor:'rgba(68, 128, 240, 0.4)', ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.caption.mediumDefault.fontSize, color:tokens.semantic.text.brandDefault, letterSpacing:-0.17, marginLeft:2 },  // 추천
    type2 : { borderColor:'rgba(92, 92, 248, 0.4)', ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.caption.mediumDefault.fontSize, color:tokens.semantic.text.accentIndigoDefault, letterSpacing:-0.17, marginLeft:2 },   // 거리우선
    type3 : { borderColor:'#9ddce3', ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.caption.mediumDefault.fontSize, color:'#33aebe', letterSpacing:-0.17, marginLeft:2 },                  // 무료우선
}

// 대상자 검색
export const amTarget : any = {
    botSheet : {paddingVertical:17, alignItems:'center'},  
    user : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.body.xsmallDefault.fontSize, color: tokens.semantic.text.default},  
    textDisabled : { color: tokens.semantic.text.disabledDefault },

    // 리스트
    listWrap : {position:'relative', marginVertical:8, paddingVertical:12, paddingHorizontal:24, backgroundColor:tokens.semantic.bg.inverse, alignItems:'center', justifyContent:'center'},  // amTarget.listWrap
    listWrapPressed : {position:'relative', marginVertical:8, paddingVertical:12, paddingHorizontal:24, backgroundColor:tokens.semantic.bg.neutralDefault, alignItems:'center', justifyContent:'center'},  // amTarget.listWrap (pressed)
    iconBox : { marginRight:16, width:48, height:48, borderRadius:48, backgroundColor:'#f6f8fa' },                           
    listTitle : { marginBottom:4, lineHeight:tokens.typo.body.mediumDefault.lineHeight, fontSize:tokens.typo.body.mediumDefault.fontSize, color:tokens.semantic.text.strong, letterSpacing:-0.23 },                                     
    listDate : { marginBottom:0, lineHeight:tokens.typo.caption.largeDefault.lineHeight, fontSize:tokens.typo.caption.largeDefault.fontSize, color:tokens.semantic.text.subtlest, letterSpacing:-0.18},                                         
    listLine: {borderBottomWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralSubtler, marginLeft:88, marginRight:24},             
    checkOn: {backgroundColor:tokens.semantic.bg.neutralDefault},                                                                                     
    checkOnImg : {position:'absolute', top:20, width:40, height:40, justifyContent:'center',alignItems:'center', zIndex:10},
}

// **************************************************
// 휴가관리
// **************************************************
// 휴가신청서 작성하기
export const vmWrite : any = {
    timeBox :{borderRadius:12, backgroundColor: tokens.semantic.bg.neutralSubtle, padding:20, marginTop:10, lineHeight:18},
    timeIn : {gap:8, marginTop:10},
    infoIcon : {marginTop:2, marginRight:4},
    infoText : {letterSpacing:-0.18, color:tokens.semantic.text.default, lineHeight:18},
    topText : {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.default},
    dtColor : {letterSpacing: -0.8, textAlign: 'left', color: tokens.semantic.text.subtle, paddingRight:8 },          
    timeColor : {letterSpacing: -0.8, textAlign: 'right', color: tokens.semantic.text.default},  
    dot : {width:2, height:2, borderRadius:30, backgroundColor: tokens.semantic.bg.accentBluegrayDefault},
    line : {borderRightWidth:1, borderStyle:'solid', borderColor:'#d9dcde', marginHorizontal:16},
    lineBt : {height:1, marginVertical:16, backgroundColor:tokens.semantic.bg.neutralStrong},
}

// **************************************************
// 근무시간
// **************************************************
export const tm : any = {
    //하단 버튼
    footBtn : {paddingTop:10,paddingBottom:50, paddingHorizontal:24},
    footInBtn : {paddingBottom:74, paddingHorizontal:24},

    // 근무시간 공용 //
    tmCardWrap : {},
    // 날짜 텍스트
    tmDate : {fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.22, color:tokens.semantic.text.strong, marginRight: 8},
    // 불릿 텍스트
    tmTextDot : {width:2,height:2,borderRadius:2,backgroundColor:'#6b7991'},
    tmTextTit : {width:50, fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, color:tokens.semantic.text.subtle},
    tmTextSub : {fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.5, color:tokens.semantic.text.default},
    // 회색박스
    tmGrayBox : {borderRadius:8, backgroundColor: tokens.semantic.bg.neutralSubtle, paddingVertical:12, paddingHorizontal:16},
    tmGrayBoxPressed : {borderRadius:8, backgroundColor: tokens.semantic.bg.neutralDefault, paddingVertical:12, paddingHorizontal:16},
    tmGrayTit : {fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, color:'#616873'},
    tmGrayTxt : {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:'#363d4d'},
    tmGrayBoxLine : {width:'100%',height:1,marginTop:20,marginBottom:11,backgroundColor:tokens.semantic.bg.neutralStrong},
    // 아이콘 카운트
    tmIcon : { position:'relative' },
    tmIconCnt : { position:'absolute', top:-5, left:'50%', minWidth:12, height:12, borderRadius:12, backgroundColor:'#f56363', paddingHorizontal:4 },
    tmIconCntNum : { fontSize:tokens.typo.caption.smallStrong.fontSize, letterSpacing:-0.14, color:tokens.semantic.text.inverse, textAlign:'center',lineHeight:tokens.typo.caption.smallStrong.lineHeight },
    // 근무시간 버튼그룹
    tmCardBtns : {marginTop:12,columnGap:8},
}

// 조정쪽지
export const tmMsg : any = {
    msgWrap : {paddingHorizontal:24,paddingBottom:16},
    msgRecipient : {minHeight:56,paddingHorizontal:24,borderTopWidth:1,borderBottomWidth:1,borderStyle:'solid',borderColor:tokens.semantic.border.neutralSubtler},
    msgRecipientTitle : {width:70,marginRight:10,fontSize:tokens.typo.body.xsmallDefault.fontSize,letterSpacing:-0.2,color:tokens.semantic.text.subtlest},
    msgNameBox : {paddingVertical:5,paddingHorizontal:8,borderRadius:4,backgroundColor:tokens.semantic.bg.selected,},
    msgName : {fontSize:tokens.typo.body.xsmallDefault.fontSize,letterSpacing:-0.2,color:tokens.semantic.text.strong},
    textareaWrap : {padding:24},
}

// **************************************************
// 증명서관리
// **************************************************
// 증명서관리 하단시트 콘텐츠
export const moh0170bottomSheet : any = {
    iconBox : { marginRight:16, width:48, height:48, borderRadius:13, backgroundColor:'#f6f8fa' },
    listTitle : { marginBottom: 4, fontSize:tokens.typo.body.mediumDefault.fontSize, lineHeight:tokens.typo.body.mediumDefault.lineHeight, color:tokens.semantic.text.strong, letterSpacing:-0.23 },
    listDate : { width: 220, lineHeight:tokens.typo.caption.largeDefault.lineHeight, fontSize:tokens.typo.caption.largeDefault.fontSize, color:tokens.semantic.text.subtlest, letterSpacing:-0.18 },
    selectItem : { minHeight:72,paddingHorizontal:24,backgroundColor:tokens.semantic.bg.inverse},
    selectItemOn : { minHeight:72,paddingHorizontal:24,backgroundColor:tokens.semantic.bg.neutralSubtle},
    selectItemPressed : { minHeight:72,paddingHorizontal:24,backgroundColor:tokens.semantic.bg.neutralDefault},
}

// 증명서 신청하기, 증명서 신청서
export const moh0170Application : any = {
    // 반려 사유 박스
    refuseBox : { marginTop: 15, paddingHorizontal: 20, paddingVertical: 20, borderRadius: 12, backgroundColor: tokens.semantic.bg.neutralSubtle },
    refuseBoxText: { fontSize: tokens.typo.body.xsmallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), lineHeight: tokens.typo.body.xsmallDefault.lineHeight, letterSpacing: -0.2, color: tokens.semantic.text.default },
    // 하단 토글 스위치
    toggleBox: { paddingTop: 28 },
    toggleBoxText : { fontSize: tokens.typo.body.xsmallDefault.fontSize, letterSpacing: -0.2, color: tokens.semantic.text.subtlest},
}

// **************************************************
// 인사정보/설정/알림
// **************************************************
export const moh : any = {
    //목록
    mohList : {marginHorizontal:16, marginBottom:24},
    mohlistWrap : {paddingVertical:8, backgroundColor:tokens.semantic.bg.inverse,borderRadius:12},
    mohlistImg : {marginRight:12},
    mohlistBoxWrapPressed: {backgroundColor:tokens.semantic.bg.neutralDefault},
    mohlistBox : {marginHorizontal:20,paddingVertical:16, borderStyle:'solid', borderBottomWidth:1, borderColor:tokens.semantic.border.neutralSubtler, alignItems:'center'},
    mohlistBoxPressed : {marginHorizontal:0, paddingHorizontal:20, paddingVertical:16, borderStyle:'solid', borderBottomWidth:1, borderColor:tokens.semantic.border.neutralSubtler, alignItems:'center',backgroundColor:tokens.semantic.bg.neutralDefault},
    mohListTitle : {fontSize:tokens.typo.body.mediumDefault.fontSize, color:tokens.semantic.text.subtle, paddingTop:27, paddingBottom:11,letterSpacing: -0.23},
    mohListDt : {fontSize:tokens.typo.body.mediumDefault.fontSize, color:tokens.semantic.text.strong, letterSpacing: -0.23},
    mohListDd : {fontSize:tokens.typo.body.xsmallDefault.fontSize, color:tokens.semantic.text.subtlest, paddingTop:4, letterSpacing: -0.2},

    //설정
    settingWarp : {paddingVertical:8},  
    settingBox : {paddingHorizontal:24,paddingVertical:17, justifyContent:'center',alignItems:'center'},  
    settingBoxPressed : {paddingHorizontal:24,paddingVertical:17, justifyContent:'center',alignItems:'center',backgroundColor:tokens.semantic.bg.neutralDefault},  
    settingMenu : {fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.23},  
    settingValue : {color:tokens.semantic.text.subtle, fontSize:tokens.typo.body.smallDefault.fontSize, marginRight:4, letterSpacing: -0.21},
    settingUser : {paddingVertical:20,justifyContent:'center',alignItems:'center'},
    settingUserPressed : {paddingVertical:20,justifyContent:'center',alignItems:'center',backgroundColor:tokens.semantic.bg.neutralDefault},
    userImg : { marginRight:12, width:48, height:48, borderRadius:48, backgroundColor:'#f6f8fa', overflow:'hidden' },
    userName : {fontSize:tokens.typo.title.smallStronger.fontSize,letterSpacing:-0.26},

    //주소검색
    tipBox : {borderRadius:12, backgroundColor:tokens.semantic.bg.neutralSubtle, paddingVertical:16, paddingHorizontal:20, justifyContent:'center',alignItems:'center'},
    tipText : {lineHeight:17, letterSpacing: -0.18, color:tokens.semantic.text.default, marginLeft:12},
    setAddList: {marginTop:4}, 
    setAddListBox : {paddingTop:24},
    setAddInfoDtBox: {paddingVertical:3, paddingHorizontal:6, borderRadius:4, borderStyle:'solid', borderWidth:1, borderColor:'rgba(68, 128, 240, 0.24)'}, 
    setAddInfoDt : {color:tokens.semantic.text.brandDefault, letterSpacing:-0.17, fontSize:tokens.typo.caption.mediumDefault.fontSize},
    setAddInfoDd : {color:tokens.semantic.text.subtle, letterSpacing:-0.18, marginTop:4},

    //주소검색 > 검색결과
    setResultList : {marginTop:18},
    resultBox : {paddingTop:15, paddingBottom:11, borderStyle:'solid', borderBottomWidth:1, borderColor:tokens.semantic.border.neutralSubtler},
    resultBunji : {paddingBottom:8, fontSize:tokens.typo.body.smallDefault.fontSize, color:tokens.semantic.text.strong, letterSpacing:-0.21},
    resultType: {paddingVertical:3, paddingHorizontal:6, borderRadius:4, borderStyle:'solid', borderWidth:1, borderColor:'rgba(68, 128, 240, 0.24)', color:tokens.semantic.text.brandDefault, marginRight:8, minWidth:50, textAlign:'center',fontSize:tokens.typo.caption.mediumDefault.fontSize}, 
    resultAdd : {marginBottom :4},
    resultAddress : {color:tokens.semantic.text.subtle, paddingTop:2, letterSpacing:-0.18, lineHeight:17,justifyContent:'flex-start',alignItems:'flex-start'},

    //버전정보
    versionWarp :{marginTop:80, alignItems:'center'},   //moh.versionWarp
    versionText: {paddingTop:24, paddingBottom:16, fontSize:tokens.typo.title.smallStronger.fontSize, color:tokens.semantic.text.strong, letterSpacing: -0.26}, 
    versionStext : {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing: -0.2, color:tokens.semantic.text.subtle, lineHeight:tokens.typo.body.xsmallDefault.lineHeight},  
    
    //내정보
    myinfo : {alignItems:'center', marginTop:16, marginBottom:32},
    myinfoImg : {width:72, height:72, borderRadius:36, backgroundColor:'#000'},
    myinfoName : {fontSize:tokens.typo.title.smallStronger.fontSize, paddingTop:16, paddingBottom:7, marginHorizontal:7},
    myinfoCompany : {color:'#d8dbe2'},
    myinfoDetail : {paddingVertical:18, borderBottomWidth:1, borderColor:tokens.semantic.border.neutralSubtler, borderStyle:'solid', alignItems:'flex-start'},
    myinfoDt: {width:84, color:tokens.semantic.text.subtlest,fontSize:tokens.typo.body.xsmallDefault.fontSize},
    myinfoDd: {color:tokens.semantic.text.strong,fontSize:tokens.typo.body.smallDefault.fontSize,lineHeight:tokens.typo.body.smallDefault.lineHeight},
}

// **************************************************
// 급여명세서
// **************************************************
// 급여명세서 상세
export const smDetail : any = {
    mainInfoText : {paddingTop:23,paddingBottom:32},
    mainInfoTextBlue : {fontSize:tokens.typo.body.smallDefault.fontSize,letterSpacing:-0.21,color:tokens.semantic.text.brandDefault}, 
    mainInfoTextNum : {marginTop:4,fontSize:28,letterSpacing:-0.42,color:tokens.semantic.text.strong},
    mainInfoTextUnit : {marginLeft:2,marginBottom:4,fontSize:18,letterSpacing:-0.27,color:tokens.semantic.text.strong},
    mainInfoTextDate : {marginTop:8,fontSize:tokens.typo.caption.largeDefault.fontSize,letterSpacing:-0.18,color:tokens.semantic.text.subtle},

    subInfoWrap : {paddingTop:32,paddingBottom:16,paddingHorizontal:16},

    infoWhiteBox : {borderRadius:12, backgroundColor: tokens.semantic.bg.inverse, paddingVertical:20, marginBottom:8},
    infoWhiteBoxPressed : {borderRadius:12, backgroundColor: tokens.semantic.bg.neutralDefault, paddingVertical:20, marginBottom:8},

    info1dWrap : {minHeight:18,paddingHorizontal:20},
    info1dText : {fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.22,color:tokens.semantic.text.strong},
    info1dBtn : {width:24,height:24},
    info2dWrap : {minHeight:40,paddingHorizontal:20},
    info2dWrapPressed : {minHeight:40,paddingHorizontal:20,backgroundColor:tokens.semantic.bg.neutralDefault},
    info2dTitle : {fontSize:tokens.typo.body.xsmallDefault.fontSize,letterSpacing:-0.2,color:tokens.semantic.text.subtlest},
    info2dText : {fontSize:tokens.typo.body.smallDefault.fontSize,letterSpacing:-0.21,color:tokens.semantic.text.strong},
    info2dBtn : {width:14,height:14},

    infoGrayBox : {borderRadius:12, backgroundColor: tokens.semantic.bg.neutralSubtle, padding:20,marginHorizontal:20},
    infoGrayName : {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.strong},
    infoGrayBlue : {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.brandDefault},
    infoGrayTit : {fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, color:tokens.semantic.text.subtle, lineHeight:tokens.typo.caption.largeDefault.lineHeight},
    infoGrayTxt : {fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, color:tokens.semantic.text.default, lineHeight:tokens.typo.caption.largeDefault.lineHeight},

    smBanner : {height: 80, paddingLeft: 24, paddingRight: 16, marginHorizontal: 16, marginVertical: 8, borderRadius: 12, backgroundColor: '#f2f4ff'},
    smBannerPressed : {height: 80, paddingLeft: 24, paddingRight: 16, marginHorizontal: 16, marginVertical: 8, borderRadius: 12, backgroundColor: '#ebeeff'},
    smBannerTitle : {fontSize: tokens.typo.body.smallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), letterSpacing: -0.21, color: tokens.semantic.text.strong},
    smBannerTxt : {fontSize: tokens.typo.caption.largeDefault.fontSize, letterSpacing: -0.18, color: 'rgba(48, 54, 62, 0.6)'},
}

// **************************************************
// 근무시간승인
// **************************************************
// 근무시간승인 리스트
export const moh0230List : any = {
    mohListWrap: {position:'relative', marginBottom:8, padding:20, borderRadius:12},
    mohListWrap_e: {backgroundColor: tokens.semantic.bg.inverse},
    mohListWrap_p: {backgroundColor: tokens.semantic.bg.neutralDefault},
    mohListWrapTop: {position:'relative', padding:20, borderTopLeftRadius:12, borderTopRightRadius:12},
    mohListWrapBottom: {position:'relative',marginBottom:8, paddingHorizontal:20, paddingBottom:20, borderBottomLeftRadius:12, borderBottomRightRadius:12, backgroundColor:tokens.semantic.bg.inverse},
    mohListWrapBottom_p: {position:'relative',marginBottom:8, paddingHorizontal:20, paddingBottom:20, borderBottomLeftRadius:12, borderBottomRightRadius:12, backgroundColor:tokens.semantic.bg.neutralDefault},
    
    memberBox : { paddingTop: 15, paddingBottom: 9, paddingHorizontal: 20 },
    memberBoxLine : {width:'100%',height:1, marginTop: 24, marginBottom:0, backgroundColor:tokens.semantic.bg.neutralDefault },
    memberLastBox: { paddingBottom: 20, marginBottom:8, borderBottomLeftRadius:12, borderBottomRightRadius:12 },
    // 리스트 중요 표시
    listEventWrap : { position:'relative' },
    listEventDot : { position:'absolute', top: 2, left: 81, width: 4, height: 4, borderRadius: 4, backgroundColor: '#f56363' },
}

// 일괄 동의승인/취소
export const moh0230ApprovalCancel : any = {
    topWrap : { paddingHorizontal: 24, paddingTop: 16, paddingBottom: 20, backgroundColor: tokens.semantic.bg.inverse },
    listTopDate : { paddingTop: 27, marginBottom: 11, fontSize: tokens.typo.body.mediumDefault.fontSize, fontWeight:tokens.fontWeight.bold, letterSpacing: -0.23, color: tokens.semantic.text.subtle },
    checkOnImg : {position:'absolute', top:0, left:0, right:0, bottom: 0, borderRadius:12, borderWidth: 1, borderStyle:'solid', borderColor:tokens.semantic.border.brandDefault, backgroundColor:'rgba(68, 128, 240, 0.06)' , justifyContent:'center',alignItems:'center', zIndex:10},
}

// **************************************************
// 온보딩
// **************************************************
export const onboarding : any = {
    slideCloseWrap : { paddingHorizontal: 20, paddingBottom: 14, marginTop: 50 },
    slideCloseImg : { width: 24, height: 24 },
    slideCloseText : { paddingLeft:8, fontSize: tokens.typo.title.mediumStrong.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), letterSpacing: -0.29, color: tokens.semantic.text.strong},
    slideWrap : { position: 'relative' },
    slideWrapMargin : { paddingTop: 42 },
    slideTitle : { fontSize: 24, marginBottom: 14, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), letterSpacing: -0.6, color: '#000000' },
    slideText : { textAlign: 'center', lineHeight: tokens.typo.body.largeDefault.lineHeight, fontSize: tokens.typo.body.largeDefault.fontSize, letterSpacing: -0.4, color: '#343a46' },
    slideDotWrap : { position: 'absolute', bottom: 20, left: 0, right: 0, marginHorizontal: 'auto' },
    slideDot : { width: 5, height: 5, marginHorizontal: 2.5, borderRadius: 2.5, backgroundColor: '#091429', opacity: 0.19 },
    slideActiveDot : { width: 15, height: 5, marginHorizontal: 2.5, borderRadius: 2.5, backgroundColor: '#1d2129' },
    onboardingImg : { width: 360, height: 478 },
    btnWrap : { marginHorizontal: 24, marginBottom: 50, borderRadius:12, 
        // box shadow
    },
    btnShadow : {
        shadowColor: "#222c34",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.23,shadowRadius: 2.62,elevation: 4
    },
    btnBox: { height: 56, borderRadius:12, fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing: -0.23, overflow:'hidden'},
    btnWhite : { color: tokens.semantic.text.default, backgroundColor:tokens.semantic.bg.inverse, textAlign: 'center', lineHeight: 56},
    btnBlue : { color: tokens.semantic.text.inverse, backgroundColor:tokens.semantic.bg.brandDefault, textAlign: 'center', lineHeight: 56},
}

// **************************************************
// 로그인
// **************************************************
// 홈
export const login : any = {
    //인덱스
    logo : {marginTop:56, marginHorizontal:32},  
    logoImg : {width:94,height:24},    
    headerBox : {marginHorizontal:32, paddingTop:24},
    indexText : {fontSize:32, letterSpacing: -1.28, color:'#000',lineHeight:46},
    loginLottie : {width:'100%', height:'100%'},
    indexBtn : {position:'absolute',bottom:0, width:'100%', padding:24},
    indexUpdate : {position:'absolute',bottom:0, width:'100%', paddingVertical:24,paddingHorizontal:32},
    indexUpdateBarBG : {width:'100%', height:16, borderRadius:8, backgroundColor:tokens.semantic.bg.neutralDefault, overflow:'hidden'},
    indexUpdateBar : {height:16, borderRadius:8, backgroundColor:tokens.semantic.bg.brandDefault, overflow:'hidden',textAlign:'right'},
    indexUpdatePer : {fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing: -0.18, color:tokens.semantic.text.inverse,marginRight:12},
    indexUpdateText : {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing: -0.2, color:tokens.semantic.text.subtle},

    //ID, passWord
    textBox : {paddingTop:56, paddingBottom:32},
    loginText : {fontSize:21, letterSpacing: -0.32, color:'#000',lineHeight:29 },
    mailText : {lineHeight:tokens.typo.body.xsmallDefault.lineHeight, fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.subtlest},
    resetText : {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, textDecorationLine:'underline', color:tokens.semantic.text.default},
    loginBtn : {paddingTop:16, paddingHorizontal:24},

    inputBox : {minHeight:56},
    autoLogin : {justifyContent:'center',alignItems:'center', paddingTop:24},
    btnText : {fontSize:tokens.typo.body.mediumDefault.fontSize,lineHeight:tokens.typo.body.mediumDefault.lineHeight, textDecorationLine: "none", marginLeft:4},
    labelText : {fontSize:tokens.typo.body.mediumDefault.fontSize,lineHeight:tokens.typo.body.mediumDefault.lineHeight, textDecorationLine: "none", marginLeft:-9},
}

// **************************************************
// 연말정산
// **************************************************
export const taxMain : any = {
    bgGray: {backgroundColor:tokens.semantic.bg.neutralDefault},
    boxShadow: {shadowColor: "#aaaeb3",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.32, shadowRadius: 5.46, elevation: 9},
    
    topText: {fontSize:21, letterSpacing:-0.32, color:'#000', lineHeight:29, marginBottom:8, paddingLeft:8},
    dateText: {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.subtle},
    
    mainTopWrap: {gap: 8},
    mainConWrap: {marginLeft:4, marginBottom:11},
    mainList: {borderRadius:12, backgroundColor:tokens.semantic.bg.inverse, overflow:'hidden'},
    mainBdList: {paddingVertical:16, borderStyle:'solid', borderBottomWidth:1, borderColor:tokens.semantic.border.neutralSubtler, alignItems:'center'},
    listP1: {paddingTop:10, paddingBottom:20, paddingHorizontal:10},
    listP2: {marginTop:24, padding:24},
    listP3: {paddingVertical:10},
    
    mainTitle1: {fontSize:tokens.typo.body.mediumDefault.fontSize, color:tokens.semantic.text.subtle, letterSpacing: -0.23},
    mainTitle2: {fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.23},
    disabledText: {color:tokens.semantic.text.disabledDefault},
    mainBoxText: {fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21, color:tokens.semantic.text.default, marginRight:2},
    mainBoxBtText: {fontSize: tokens.typo.caption.mediumDefault.fontSize, color:tokens.semantic.text.subtlest,letterSpacing: -0.17},
    mainListTtext: {fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.23, color:tokens.semantic.text.strong},
    mainListBtext: {fontSize:tokens.typo.body.xsmallDefault.fontSize, color:tokens.semantic.text.subtlest, paddingTop:4, letterSpacing: -0.2},
    mainListTtText: {fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21},
    
    mainQtBox: {width:40, height:40, borderRadius:8, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralSubtle},
    mainQtText: {fontSize:tokens.typo.title.largeStronger.fontSize, letterSpacing:-0.33, color:tokens.semantic.text.default},
    mainQtWon: {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.subtlest},
    mainQtImg: {zIndex:1, position:'absolute', top:0, right:0, width:142, height:112},
    
    mainReText: {fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21},
    mainReTaxText: {fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21},
    mainReMoney: {fontSize:24, letterSpacing:-0.36},
    mainReWon: {marginLeft:2, paddingBottom:3, fontSize:tokens.typo.body.largeDefault.fontSize, letterSpacing:-0.24},
    mainReTopText1: {fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.28, color:tokens.semantic.text.subtlest},
    mainReTopText2: {marginTop:4, fontSize:tokens.typo.title.smallStronger.fontSize, letterSpacing:-0.26},
    mainReBorderBottom : {marginTop:22,width:'100%',height:1,backgroundColor:tokens.semantic.bg.neutralDefault},

    progressWrap: {gap:20, marginTop:24},
    prLeft: {letterSpacing:-0.18, color:tokens.semantic.text.subtler},
    prRight: {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.default},
    progress: {position:'relative', height:8, borderRadius:4, backgroundColor:tokens.semantic.bg.neutralDefault, overflow:'hidden'},
    bar: {position:'absolute', height:8, borderRadius: 4},
    dotWrap: {gap:24, marginTop:24},
    dot: {width:8, height:8, borderRadius:50},
    dotText: {marginLeft:4, letterSpacing:-0.18, color:'#515864'},

    // 연말정산 메인 스켈레톤
    skeTaxMainBox1: {width:116, height:26, marginBottom:4, borderRadius:4, backgroundColor:tokens.semantic.bg.inverse},
    skeTaxMainBox2: {width:304, height:26, marginBottom:11, borderRadius:4, backgroundColor:tokens.semantic.bg.inverse},
    skeTaxMainBox3: {width:191, height:16, borderRadius:4, backgroundColor:tokens.semantic.bg.inverse},
    skeTaxMainBox4: {width:40, height:40, marginTop:11, marginRight:12, marginBottom:11, marginLeft:12, borderRadius:10, backgroundColor:'#f2f4f7'}, //아이콘
    skeTaxMainBox5: {width:110, height:16, borderRadius:4, marginTop:7, marginBottom:5, marginLeft:12, backgroundColor:'#f2f4f7'},
    skeTaxMainBox6: {width:88, height:14, marginLeft:12, borderRadius:4, backgroundColor:'#f2f4f7'},
    skeTaxMainBox7: {height:80, borderRadius:12, backgroundColor:tokens.semantic.bg.inverse},
    skeTaxMainBox8: {width:113, height:20, borderRadius:4, backgroundColor:tokens.semantic.bg.inverse},
    skeTaxMainBox9: {width:103, height:20, borderRadius:4, backgroundColor:tokens.semantic.bg.inverse},
    skeTaxMainBox10: {width:114, height:18, borderRadius:4, backgroundColor:'#f2f4f7'},
    skeTaxMainBox11: {width:192, height:14, borderRadius:4, backgroundColor:'#f2f4f7'},

    // AI 연말정산 절세가이드
    taxGuide: {paddingLeft:24, paddingRight:16, height:80, borderRadius:12, backgroundColor:'#364d75'},
    taxGuideTxt: {lineHeight:tokens.typo.body.smallDefault.lineHeight, fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21, color:tokens.semantic.text.inverse},
    guideEnterTxt1: {textAlign:'center', fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:'#5d5677'},
    guideEnterTxt2: {textAlign:'center', lineHeight:tokens.typo.title.largeStronger.lineHeight, fontSize:tokens.typo.title.largeStronger.fontSize, letterSpacing:-0.33, color:tokens.semantic.text.strong},
}

export const step : any = {
    accBgGray: {backgroundColor:tokens.semantic.bg.neutralDefault},

    stepWrap: {position:'relative', height:40, marginTop:10},
    stepBox: {width:20, height:20, borderRadius:30, backgroundColor:'#b0b5bf'},
    stepBoxOn: {width:20, height:20, borderRadius:30, backgroundColor:tokens.semantic.bg.brandDefault},
    stepBoxText: {fontSize:tokens.typo.caption.largeDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), letterSpacing:-0.18, color:tokens.semantic.text.inverse},
    stepText: {marginTop:0, fontSize:tokens.typo.body.xsmallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight), textAlign:'center', letterSpacing:-0.2, color:tokens.semantic.text.subtler},
    stepTextOn: {marginTop:0, fontSize:tokens.typo.body.xsmallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), textAlign:'center', letterSpacing:-0.2, color:tokens.semantic.text.brandDefault},
    stepLine: {position:'absolute', right:'14%', left:'14%', height:1, backgroundColor:'#ced0d6'},
    detailBlueTxt: {marginTop:4, marginBottom:8, fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21, color:tokens.semantic.text.brandDefault},
    detailLine: {height:1, marginTop:24, marginBottom:24, backgroundColor:tokens.semantic.bg.neutralDefault},
    detailGbTxt: {fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21, color:tokens.semantic.text.subtle},

    //step02
    stepBlInfo: {paddingHorizontal:20, paddingTop:21, paddingBottom:20, borderRadius:12, backgroundColor: tokens.semantic.bg.neutralSubtle},
    stepBlInfoLine: {height:1, marginTop:16, marginBottom:16, backgroundColor:tokens.semantic.bg.neutralStrong},
    bText :{fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.default, paddingBottom:9},
    nText : {fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.18, lineHeight:tokens.typo.caption.largeDefault.lineHeight, color:tokens.semantic.text.subtle,paddingBottom:5 },
    step02Con : {paddingHorizontal:24, paddingTop:24},
    step02Text1 : {fontSize:tokens.typo.title.largeStronger.fontSize, letterSpacing:-0.33, color:tokens.semantic.text.strong,paddingBottom:8, lineHeight:tokens.typo.title.largeStronger.lineHeight },
    step02Text2 : {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, lineHeight:tokens.typo.body.xsmallDefault.lineHeight, color:tokens.semantic.text.subtlest},
    step02monthBox :{flexWrap:'wrap', rowGap:8, columnGap:8},
    monthText : {fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.23, lineHeight:tokens.typo.body.mediumDefault.lineHeight, color:tokens.semantic.text.strong},
    monthTextOn : {fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.23, lineHeight:tokens.typo.body.mediumDefault.lineHeight, color:tokens.semantic.text.brandDefault},
    monthTextBox: {minWidth:58, borderRadius:18, backgroundColor:tokens.semantic.bg.neutralSubtle, paddingHorizontal:16, paddingVertical:9, justifyContent:'center', alignItems:'center'},
    monthTextBoxOn : {minWidth:58, borderRadius:18, backgroundColor:tokens.semantic.bg.selected, borderWidth: 1, borderStyle:'solid', borderColor:tokens.semantic.border.brandDefault, paddingHorizontal:16, paddingVertical:9, justifyContent:'center', alignItems:'center'},
    searchingPer : {fontSize:tokens.typo.title.largeStronger.fontSize, letterSpacing:-0.33, color:tokens.semantic.text.brandDefault, textAlign:'center'},
    searchingTxt1 : {fontSize:tokens.typo.title.mediumStrong.fontSize, letterSpacing:-0.29, lineHeight:tokens.typo.title.mediumStrong.lineHeight, color:tokens.semantic.text.strong, paddingTop:24, textAlign:'center' },
    searchingTxt2 : {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, lineHeight:tokens.typo.body.xsmallDefault.lineHeight, color:tokens.semantic.text.subtlest, paddingTop:8, textAlign:'center' },

    //간편인증 
    certiyBox : {minWidth:98, height:96, borderRadius:16, backgroundColor:tokens.semantic.bg.neutralSubtle, justifyContent:'center', alignItems:'center'},
    certiyBoxOn : {minWidth:98, height:96, borderRadius:16, backgroundColor:tokens.semantic.bg.selected, borderWidth: 1, borderStyle:'solid', borderColor:tokens.semantic.border.brandDefault, justifyContent:'center', alignItems:'center'},
    certiyBoxNone : {minWidth:98, height:96, borderRadius:16, backgroundColor:tokens.semantic.bg.inverse, justifyContent:'center', alignItems:'center'},
    certiyhText :{...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21, color:tokens.semantic.text.strong, marginTop:8},
    sendNum : {width:24, height:24, backgroundColor:tokens.semantic.bg.selected, marginRight:8, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), fontSize: tokens.typo.body.xsmallDefault.fontSize, letterSpacing: -0.2, color:tokens.semantic.text.brandDefault, textAlign:'center', borderRadius:18, paddingTop:2},
    stepTxt: {fontSize: tokens.typo.body.smallDefault.fontSize, letterSpacing: -0.21, color:tokens.semantic.text.strong},

    //step03
    stepInfo: {paddingHorizontal:24, paddingBottom:24, paddingTop:8},
    dataTextWon : {...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight),fontSize:28,letterSpacing:-0.42,color:tokens.semantic.text.strong},
    dataTextWonBlue : {...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight),fontSize:28,letterSpacing:-0.42,color:tokens.semantic.text.brandDefault},
    dataText : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight),fontSize:18,letterSpacing:-0.27,color:tokens.semantic.text.strong},
    dataText2 : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight),fontSize:tokens.typo.body.smallDefault.fontSize,letterSpacing:-0.21,color:tokens.semantic.text.strong},
    dataText3 : {fontSize:tokens.typo.caption.largeDefault.fontSize,letterSpacing:-0.21,color:tokens.semantic.text.strong},
    dataTextBlue : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight),fontSize:tokens.typo.body.smallDefault.fontSize,letterSpacing:-0.21,color:tokens.semantic.text.brandDefault},   
    dataInfoTitle : {...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight),fontSize:tokens.typo.caption.largeDefault.fontSize,letterSpacing:-0.18,color:tokens.semantic.text.subtle},
    dataInfoWon : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight),fontSize:tokens.typo.caption.largeDefault.fontSize,letterSpacing:-0.18,color:tokens.semantic.text.default},
    dataInfoWon1 : {fontSize:tokens.typo.caption.largeDefault.fontSize,letterSpacing:-0.18,color:tokens.semantic.text.subtle},
    nodataText1 : {fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.23,color:tokens.semantic.text.subtlest},
    nodataText2 : {fontSize:tokens.typo.body.xsmallDefault.fontSize,letterSpacing:-0.2,color:tokens.semantic.text.disabledStrong, marginTop:4},

    //step04
    boxBtnWrap: {marginTop:32, gap:8},
    boxBtn: {padding:20, borderRadius:12, borderWidth:1, borderStyle:'solid', borderColor:'#f7f8fa', backgroundColor:tokens.semantic.bg.neutralSubtle},
    boxBtnOn: {padding:20, borderRadius:12, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.brandDefault, backgroundColor:tokens.semantic.bg.selected},
    boxBtnTxt1: {marginTop:20, letterSpacing:-0.18, color:tokens.semantic.text.subtlest},
    boxBtnTxt2: {marginTop:4, fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.23},
    step4TopTxt: {fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21},
    step4TopMoney: {lineHeight:34, fontSize:28, letterSpacing:-0.42},
    step4TopWon: {marginLeft:2, lineHeight:tokens.typo.title.smallStronger.lineHeight, fontSize:tokens.typo.title.smallStronger.fontSize, letterSpacing:-0.26},
    step4Img: {width:321, height:144, marginTop:8},
    step4LineBox: {gap:8, marginBottom:16, paddingBottom:16, borderBottomWidth:1, borderBottomStyle:'solid', borderBottomColor:tokens.semantic.border.neutralSubtle},
    step4Lt1: {fontSize:tokens.typo.body.xsmallDefault.fontSize, color:tokens.semantic.text.subtle},
    step4Lt2: {marginTop:4, fontSize:tokens.typo.caption.mediumDefault.fontSize, letterSpacing:-0.17, color:tokens.semantic.text.subtlest},
    step4Rt: {fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.23},
}

export const taxCon : any = {
    tipTitleWrap: {paddingVertical:15, paddingHorizontal:20},
    titTitleRadioWrap: {paddingTop:20, paddingBottom:10},
    tipTitle: {fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.23, color:tokens.semantic.text.default},
    tipGray: {color:tokens.semantic.text.subtle},
    tipText: {fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21, lineHeight:tokens.typo.body.smallDefault.lineHeight},
    textBg: {backgroundColor:'rgba(126, 171, 255, 0.2)'},
    grayBox: {padding:20, borderRadius:12, backgroundColor:tokens.semantic.bg.neutralSubtle},
    grayTextBox: {justifyContent:'center', alignItems:'center', paddingHorizontal:8, minHeight:24, borderRadius:5, backgroundColor:tokens.semantic.bg.neutralSubtle},
    topText: {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.default},
    boxText: {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.subtle},
    brBox: {paddingVertical:32, borderBottomWidth:1, borderBottomStyle:'solid', borderBottomColor:tokens.semantic.border.neutralSubtler},

    // 검색
    listVeiw: {paddingBottom:18, paddingTop:18, paddingHorizontal:24}, 
    listViewText: {fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.23},
    listVeiwBg: {backgroundColor:'rgba(166, 174, 191, 0.1)'}, 

    // 구비서류 상세
    documentsTitle : {marginVertical:7, fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing:-0.23, color:tokens.semantic.text.subtle, marginTop:16},
    documentsBox: {marginTop:8, padding: 20, borderRadius: 12, backgroundColor:tokens.semantic.bg.neutralSubtle},
    documentsBoxTitle : {minWidth:70, ...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight), fontSize:tokens.typo.body.xsmallDefault.fontSize,letterSpacing:-0.2, color:tokens.semantic.text.subtle},
    documentsText : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight),fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.default},
    documentsTextGray : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight),fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.subtlest},

    // 게시판
    boardList: {padding:16, paddingHorizontal:16, backgroundColor: tokens.semantic.bg.accentBluegraySubtlest},
    boardSearchBox : {display:'flex', alignItems:'center', marginHorizontal:24, marginTop:8, marginBottom:24, paddingLeft:16, paddingRight:16},
    boardPaging:{paddingHorizontal:16, paddingTop:32, paddingBottom:24},
    pagingBefore : {paddingRight:30},
    pagingNext : {paddingLeft:30},
    pagingNum : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:18, letterSpacing:-0.27, color:tokens.semantic.text.subtlest},
    pagingNumOn : {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), fontSize:18, letterSpacing:-0.27, color:tokens.semantic.text.strong},
    boardSearhLine : {height:16, marginHorizontal:16, borderLeftWidth:1, borderLeftStyle:'solid', borderLeftColor:tokens.semantic.border.neutralSubtle},
    boardDetail :{marginTop:24},
    boardTitle :{fontSize:tokens.typo.title.largeStronger.fontSize, letterSpacing:-0.33, lineHeight:tokens.typo.title.largeStronger.lineHeight, color:tokens.semantic.text.strong, paddingBottom:12},
    boardDay :{fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.subtlest},
    boardDayLine : {width:1, height:10, backgroundColor: '#cfd2d6', marginHorizontal:8},
    boardImg : {marginBottom:24, maxWidth:'100%'},  
    boardDetailText: {...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight), fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21, lineHeight:tokens.typo.body.smallDefault.lineHeight, color:tokens.semantic.text.strong, paddingBottom:24},    
    boardDownload :{marginTop:16},
    boardFileList : {paddingVertical:10, paddingHorizontal: 24},
    boardFileListPressed : {paddingVertical:10, paddingHorizontal: 24, backgroundColor: tokens.semantic.bg.neutralDefault}, 
    boardFileBL: {borderBottomWidth:1, borderBottomStyle:'solid', borderBottomColor:tokens.semantic.border.neutralSubtler, marginHorizontal:24},
    boardFileTL: {borderTopWidth:1, borderTopStyle:'solid', borderTopColor:tokens.semantic.border.neutralSubtler, marginHorizontal:24},
    boardDetailBtn : {alignItems:'center', marginTop:32, marginBottom:24, paddingHorizontal: 24},

    // poc
    tagWrap : {gap: 4, flexWrap:'wrap'},
    tag : {paddingVertical:4, paddingHorizontal:10, borderRadius:4, backgroundColor:tokens.semantic.bg.neutralSubtle},
    tagTxt : {fontSize:tokens.typo.caption.mediumDefault.fontSize, letterSpacing:-0.17, color:tokens.semantic.text.subtlest},
    increase : {paddingVertical:4, paddingHorizontal:8, borderRadius:11},
    blueBg : {backgroundColor:tokens.semantic.bg.selected},
    redBg : {backgroundColor:tokens.semantic.bg.accentRedSubtlest},

    progress : {position:'relative', height:12, borderRadius:6, backgroundColor:tokens.semantic.bg.neutralDefault, overflow:'hidden'},
    bar : {position:'absolute', height:12, borderTopLeftRadius: 6, borderBottomLeftRadius:6},
    prTxt1 : {fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.3, color:tokens.semantic.text.subtle},
    prTxt2 : {fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.3, color:tokens.semantic.text.strong},

    bgBox1 : {paddingVertical:32, paddingHorizontal:20, borderRadius:10, backgroundColor:'#f0f7fc'},
    bgBox2 : {paddingVertical:32, paddingHorizontal:20, borderRadius:10, backgroundColor:'#f4f9ff'},
    bgBox3 : {paddingVertical:32, paddingHorizontal:20, borderRadius:10, backgroundColor:'#f7f8ff'},
    bgBoxTxt : {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.2, color:tokens.semantic.text.strong},
    bgBoxTitle : {fontSize:tokens.typo.body.largeDefault.fontSize, letterSpacing:-0.24, color:tokens.semantic.text.strong, lineHeight:tokens.typo.body.largeDefault.lineHeight},
    
    pocMg : {marginLeft:22, marginTop:2},
    
    guideListWrap : {paddingVertical:6, borderRadius:12, backgroundColor:tokens.semantic.bg.inverse},
    guideList : {paddingVertical:12, borderStyle:'solid', borderBottomWidth:1, borderColor:tokens.semantic.border.neutralSubtler, alignItems:'center'},
    guideListTtext : {fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21, color:tokens.semantic.text.default},
    guideListBtext : {fontSize:tokens.typo.caption.mediumDefault.fontSize, letterSpacing:-0.17, color:tokens.semantic.text.subtlest},
}

// 종전근무지
export const pwp : any = {
    // 리스트
    listInfo: {paddingHorizontal:24, paddingBottom:24, paddingTop:8},
    listInfoTit: { color: tokens.semantic.text.default,fontSize: tokens.typo.body.xsmallDefault.fontSize, lineHeight:tokens.typo.body.xsmallDefault.lineHeight, marginLeft:4, letterSpacing: -0.2 },  
    listInfoText: { color: tokens.semantic.text.default,fontSize: tokens.typo.body.xsmallDefault.fontSize, lineHeight:tokens.typo.body.xsmallDefault.lineHeight, letterSpacing: -0.18 },
    // 상세
    mainInfoText : {paddingTop:23,paddingBottom:32},
    writeBox :{paddingTop:32, paddingBottom:32, backgroundColor:tokens.semantic.bg.inverse},

    emptyText01 : { fontSize: tokens.typo.body.smallDefault.fontSize, lineHeight:tokens.typo.body.smallDefault.lineHeight, marginBottom:4, letterSpacing: -0.21, color:tokens.semantic.text.subtlest },
    emptyText02 : { fontSize: tokens.typo.body.xsmallDefault.fontSize, lineHeight:tokens.typo.body.xsmallDefault.lineHeight, marginBottom:16, letterSpacing: -0.2, color:tokens.semantic.text.disabledStrong },
    emptyBtn : { borderRadius:6, textAlign: 'center', paddingVertical:8, paddingHorizontal:12, overflow:'hidden', backgroundColor:tokens.semantic.bg.inverse, borderWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralSubtle },
    emptyBtnText : { fontSize: tokens.typo.body.xsmallDefault.fontSize, letterSpacing: -0.2, color:tokens.semantic.text.default },

    // 검색
    listTxt :{fontSize:tokens.typo.body.mediumDefault.fontSize, lineHeight:tokens.typo.body.mediumDefault.lineHeight, letterSpacing: -0.23, paddingBottom:4}, 
    listTxtPressed : {backgroundColor: tokens.semantic.bg.neutralDefault}, 
    listTxtView : {borderBottomWidth:1, borderStyle:'solid', borderColor:tokens.semantic.border.neutralSubtler, paddingBottom:16, paddingTop:17, marginHorizontal:24}, 
}

// 연말정산 이용가이드
export const mohGuide : any = {
    // 리스트
    listInfo: {paddingHorizontal:24, paddingBottom:24, paddingTop:16},
    listInfoTit: { color: tokens.semantic.text.default,fontSize: tokens.typo.body.xsmallDefault.fontSize, lineHeight:tokens.typo.body.xsmallDefault.lineHeight, marginLeft:4, letterSpacing: -0.2 },  
    listInfoText: { color: tokens.semantic.text.default,fontSize: tokens.typo.body.xsmallDefault.fontSize, lineHeight:tokens.typo.body.xsmallDefault.lineHeight, letterSpacing: -0.18 },
    listText : {fontSize:tokens.typo.body.mediumDefault.fontSize, letterSpacing:-0.23},

    // 팁
    tipBox : {paddingHorizontal:24, paddingBottom:24, paddingTop:16},
    tipBoxIn : {borderRadius:12, backgroundColor:tokens.semantic.bg.neutralSubtle, padding:20, justifyContent:'center',alignItems:'center'},
    tipTit : {fontSize:tokens.typo.body.xsmallDefault.fontSize,lineHeight:tokens.typo.body.xsmallDefault.lineHeight, letterSpacing: -0.2, color:tokens.semantic.text.default},
    tipText : {fontSize:tokens.typo.caption.largeDefault.fontSize,lineHeight:tokens.typo.caption.largeDefault.lineHeight, letterSpacing: -0.18, color:tokens.semantic.text.default,marginTop:9},

    // 가이드
    numBox : {width:30,height:20,backgroundColor:'#353c49',borderRadius:10},
    numText : {fontSize:tokens.typo.caption.largeDefault.fontSize,lineHeight:tokens.typo.caption.largeDefault.lineHeight, letterSpacing: -0.18, color:tokens.semantic.text.inverse},
    titBox : {marginTop:8},
    titText : {fontSize:tokens.typo.title.largeStronger.fontSize,lineHeight:tokens.typo.title.largeStronger.lineHeight, letterSpacing: -0.33, color:tokens.semantic.text.strong},
    
    slideWrap : { position: 'relative',height:388,marginTop:16,marginBottom:64,zIndex:2},
    slideWrapBg : { position: 'absolute', top: 0, left: 24, right: 24,backgroundColor:tokens.semantic.bg.neutralSubtle,borderRadius:12,height:388,zIndex:0},
    slideTitle : { marginTop:24, paddingHorizontal:24, fontSize: tokens.typo.body.mediumDefault.fontSize,letterSpacing: -0.23, color: tokens.semantic.text.strong },
    slideText : { marginTop:8,paddingHorizontal:24, fontSize: tokens.typo.body.xsmallDefault.fontSize,letterSpacing: -0.2, color: tokens.semantic.text.strong },
    
    slideDotWrap : { position: 'absolute', bottom: 20, left: 0, right: 0, marginHorizontal: 'auto' },
    slideDot : { width: 5, height: 5, marginHorizontal: 2.5, borderRadius: 2.5, backgroundColor: '#091429', opacity: 0.19 },
    slideActiveDot : { width: 33, height: 5, marginHorizontal: 2.5, borderRadius: 2.5, backgroundColor: '#1d2129' },
    guideImg : { width: 312, height: 224 },
    
    guideWrap : {position: 'relative',marginTop:16,marginBottom:64,zIndex:2},
    guideWrapBg : { position: 'absolute', top: 0, left: 24, right: 24,backgroundColor:tokens.semantic.bg.neutralSubtle,borderRadius:12,height:224,zIndex:0},
    guideText01 : {fontSize:tokens.typo.body.smallDefault.fontSize,lineHeight:tokens.typo.body.smallDefault.lineHeight, letterSpacing: -0.21, color:tokens.semantic.text.strong,marginTop:24},
    guideText02 : {fontSize:tokens.typo.body.xsmallDefault.fontSize,lineHeight:tokens.typo.body.xsmallDefault.lineHeight, letterSpacing: -0.2, color:tokens.semantic.text.subtle},
}

// 절세가이드 결과
export const mohGuideDone : any = {
    mainText01 : {fontSize:tokens.typo.body.smallDefault.fontSize, color:tokens.semantic.text.subtle,letterSpacing:-0.21},
    mainText02 : {fontSize:28, color:'#e65364',letterSpacing:-0.42},
    mainText03 : {fontSize:tokens.typo.title.smallStronger.fontSize, color:tokens.semantic.text.strong,letterSpacing:-0.26},
    mainImg : {width:312,height:144},
    grayBox : {width:'100%',height:48,paddingHorizontal:20,borderRadius:12,backgroundColor:tokens.semantic.bg.neutralSubtle},
    grayBoxInfoTit : {fontSize:tokens.typo.caption.largeDefault.fontSize, color:'#616873',letterSpacing:-0.18},
    grayBoxInfoNum : {fontSize:tokens.typo.body.xsmallDefault.fontSize, color:'#363d4d',letterSpacing:-0.2},
    infoText : {fontSize:tokens.typo.caption.largeDefault.fontSize, color:tokens.semantic.text.default,letterSpacing:-0.18},
    cardWrap : {margin:16,gap:8},
    cardItem : {width:'100%',padding:20,borderRadius:12,backgroundColor:tokens.semantic.bg.inverse},
    cardItemPressed : {width:'100%',padding:20,borderRadius:12,backgroundColor:tokens.semantic.bg.neutralDefault},
    cardTitle : {fontSize:tokens.typo.body.mediumDefault.fontSize, color:tokens.semantic.text.strong,letterSpacing:-0.23},
    cardTitleSub : {fontSize:tokens.typo.caption.largeDefault.fontSize, color:tokens.semantic.text.subtlest,letterSpacing:-0.18},
    barWrap : {marginTop:12},
    barBg : {position:'relative',width:'100%',height:24,borderRadius:6,backgroundColor:tokens.semantic.bg.neutralDefault,overflow:'hidden'},
    bar : {position:'absolute',height: 24,paddingHorizontal: 8,},
    barText : {fontSize:tokens.typo.caption.mediumDefault.fontSize, color:tokens.semantic.text.inverse,letterSpacing:-0.17},
    barInfo : {marginTop:4},
    barInfoText : {fontSize:tokens.typo.caption.mediumDefault.fontSize, color:tokens.semantic.text.subtlest,letterSpacing:-0.28},
    barLine : {position:'absolute',top:0,height:24,borderRightWidth:0.7,borderStyle:'dashed',borderColor:tokens.semantic.border.inverse},
    tooltip : {position:'absolute',paddingHorizontal:10,height:30,borderRadius:8,backgroundColor:'rgb(29,33,41)'},
    tooltipText : {fontSize:tokens.typo.caption.mediumDefault.fontSize, color:tokens.semantic.text.inverse,letterSpacing:-0.17},
    tooltipSemo : {position:'absolute',bottom:-5,left:'50%',width:10,height:10,backgroundColor:'rgb(29,33,41)',transform:'rotate(45deg) translate(4px,-4px)'},
    cardItemInfoText : {fontSize:tokens.typo.caption.largeDefault.fontSize, color:tokens.semantic.text.subtle,letterSpacing:-0.18},
    cardItemBtn : {height:24,paddingLeft:10,paddingRight:5,borderRadius:4,borderWidth:1,borderStyle:'solid',borderColor:tokens.semantic.border.neutralSubtle,backgroundColor:tokens.semantic.bg.inverse},
    cardItemBtnText : {fontSize:tokens.typo.caption.largeDefault.fontSize, color:tokens.semantic.text.default,letterSpacing:-0.18},
}

// 사전점검 체크리스트
export const checkList : any = {
    bg: {zIndex:-1, position:'absolute', left:0, top:0, right:0, bottom:0, width:'100%', height:'100%'},
    bgIcon: {width:360, height:244},
    topWrap: {position:'relative', marginTop:20},
    textBox: {position:'absolute', left:16, top:190, right:16},
    topText1: {fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.19, color:tokens.semantic.text.subtlest, textAlign:'center'},
    topText2: {marginTop:4, fontSize:tokens.typo.title.largeStronger.fontSize, letterSpacing:-0.33, textAlign:'center'},
    topText3: {color:'#bc48f6'},
    tabListTitle: {lineHeight:tokens.typo.title.smallStronger.lineHeight, fontSize:tokens.typo.title.smallStronger.fontSize, letterSpacing:-0.25},
    tabListSubTitle: {lineHeight:tokens.typo.body.xsmallDefault.lineHeight, fontSize:tokens.typo.body.xsmallDefault.fontSize, letterSpacing:-0.19, color:tokens.semantic.text.default},
    topNum: {minHeight:24, fontSize:tokens.typo.body.largeDefault.fontSize, letterSpacing:-0.33},
    topQuestion: {textAlign:'center', marginTop:8, minHeight:24, lineHeight:tokens.typo.body.largeDefault.lineHeight, fontSize:tokens.typo.body.largeDefault.fontSize, letterSpacing:-0.25, color:tokens.semantic.text.default},
    boxBtnWrap: {flexWrap:'wrap', gap:8, marginTop:16, marginBottom:20, paddingBottom:20, borderBottomWidth:1, borderBottomStyle:'solid', borderBottomColor:'#e1e3e6'},
    boxBtn: {alignItems:'center', justifyContent:'center', minWidth:88, maxWidth:110, minHeight:62, paddingVertical:0, paddingHorizontal:8},
    explain: {lineHeight:18, letterSpacing:-0.18, color:tokens.semantic.text.subtle},
    
}

// AI 연말정산 점검 결과
export const mohAnalysis : any = {
    titleBox: {paddingTop:20,paddingBottom:12,paddingHorizontal:24,backgroundColor:tokens.semantic.bg.inverse},
    titleText01: {...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight),fontSize:tokens.typo.body.largeDefault.fontSize, letterSpacing:-0.24, color:tokens.semantic.text.strong},
    titleText02: {...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight),fontSize:20, letterSpacing:-0.24, color:tokens.semantic.text.strong},
}

// **************************************************
// 코치마크
// **************************************************
export const coachmark : any = {
    // dim
    dim: { zIndex:999, position:'absolute', top:0, right:0, bottom:0, left:0, backgroundColor:'rgba(0, 0, 0, 0.82)'},
    dimBg : {backgroundColor:'rgba(0, 0, 0, 0.82)'},
    // 다시보지않기
    closeTextWrap : { zIndex:999, position:'absolute',bottom:'5%',right:20 },
    closeText : { paddingLeft:4, paddingRight:12, fontSize:tokens.typo.body.mediumDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), letterSpacing:-0.23, color:tokens.semantic.text.inverse },
    // 화살표 설명 텍스트
    coachTxt : { marginTop:4, lineHeight:tokens.typo.body.smallDefault.lineHeight, ...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight), fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-0.21, color:tokens.semantic.text.inverse},
    coachTxtSmall : { marginTop:4, lineHeight:tokens.typo.caption.largeDefault.lineHeight, ...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight), fontSize:tokens.typo.caption.largeDefault.fontSize, letterSpacing:-0.21, color:tokens.semantic.text.inverse},
    coachTxtBold : { ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), color:'#34d8ff'},
    // 페이징
    pageBox : { paddingVertical:5, paddingHorizontal:10, borderRadius:12, backgroundColor:'#4e4f53' },
    pageText1 : { fontSize:tokens.typo.caption.largeDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStrong.fontWeight), letterSpacing:-0.18, color:'rgba(255, 255, 255, 0.7)' },
    pageText2 : { color:tokens.semantic.text.inverse },

    //메인
    mainImg2 : {width:24,height:32},
    mainImg3 : {width:40,height:80},

    //wrapper
    coachWrap : { position:'absolute' },
    coachWrap1 : { position:'absolute', borderRadius:12, backgroundColor: tokens.semantic.bg.inverse, overflow:'hidden' },
    coachWrap2 : { position:'absolute', paddingVertical:14, paddingHorizontal:13, borderRadius:12, backgroundColor: tokens.semantic.bg.inverse, overflow:'hidden' },
    coachBox1 : {borderRadius:12, backgroundColor: tokens.semantic.bg.inverse, overflow:'hidden' },
    coachBox2 : {paddingVertical:14, paddingHorizontal:13, borderRadius:12, backgroundColor: tokens.semantic.bg.inverse, overflow:'hidden' },
    
    // 근무시간
    coachArrTm1 : { width:24, height:32, marginLeft:20 },
    coachArrTm2 : { width:48, height:48, marginRight:65 },
    coachArrTm3 : { width:24, height:32, marginRight:50 },
    coachArrTm4 : { width:40, height:40, marginTop:20, marginRight:10 },

    // 근태관리
    coachArrAt1 : { width:40, height:40, marginRight:65 },
    coachArrAt2 : { width:48, height:48, marginTop:-15, marginLeft:-15},
    coachArrAt3 : { width:48, height:56, marginTop:20, marginRight:10},

    // 휴가관리
    graphTxtWrap : { position:'absolute', top:58 },
    graphTxt1 : { fontSize:tokens.typo.caption.largeDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight), letterSpacing:-0.3, color:tokens.semantic.text.subtlest },
    graphTxt2 : { marginTop:2, fontSize:tokens.typo.title.mediumStrong.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), letterSpacing:-0.19, color:tokens.semantic.text.strong },
    coachImgVt : { width:228, height:114 },
    coachArrVt1 : { width:40, height:40, marginTop:10, marginRight:8 },
    coachArrVt2 : { width:40, height:40 },
    coachArrVt3 : { width:40, height:48, marginTop:25 },
    coachArrVt4 : { width:32, height:40, marginTop:15, marginRight:8 },
    coachArrVt5 : { width:40, height:48, marginTop:25, marginLeft:-40 },
    coachArrVt6 : { width:22, height:22, marginTop:25 },

    // 법정의무교육
    lg: { borderRadius: 8},
    leBox : { paddingTop:14, paddingBottom:20, paddingRight:20, paddingLeft:20 },
    leGraphWrap : { position:'relative' },
    leGraphTxtWrap : { position:'absolute' },
    leGraphTxt1 : { textAlign:'center', fontSize:23, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), letterSpacing:-0.92, color:'#000000' },
    leGraphTxt2 : { fontSize:tokens.typo.body.smallDefault.fontSize, letterSpacing:-1.05, color:'#a2a6a8' },
    leGraphTxt3 : { textAlign:'center', fontSize:tokens.typo.caption.mediumDefault.fontSize, letterSpacing:-0.55, color:'#a2a6a8' },
    leTxt1 : { ...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight), fontSize:21, letterSpacing:-1.05, color:'#000000' },
    leTxt2 : { ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), color:'#1c90fb' },
    leTxt3 : { marginTop:2, fontSize:tokens.typo.body.smallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight) },
    leBtBox : { paddingVertical:12, paddingHorizontal:16, borderRadius:8, backgroundColor:tokens.semantic.bg.inverse, shadowColor: "#000", shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.20, shadowRadius: 1.41, elevation: 2 },
    leBtTxt1 : { fontSize:tokens.typo.body.smallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight), color:'#8b8b8f' },
    leBtTxt2 : { fontSize:18, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), color:'#000000' },
    leBtTxt3 : { fontSize:tokens.typo.body.smallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight) },
    leList : { paddingVertical:18, paddingHorizontal:12, borderRadius:8, backgroundColor:tokens.semantic.bg.inverse },
    leListTxt1 : { fontSize:tokens.typo.body.mediumDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), letterSpacing:-0.23, color:'#111111' },
    leListTxt2 : { fontSize:tokens.typo.body.xsmallDefault.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallDefault.fontWeight), letterSpacing:-0.2, color:'#8b8b8f' },
    leListTxt3 : { textAlign:'center', fontSize:tokens.typo.title.smallStronger.fontSize, ...getTokenFontStyle(tokens.typo.body.xsmallStronger.fontWeight), letterSpacing:-0.26, color:'#5682fe' },
    leListTxt4 : { fontSize:tokens.typo.caption.mediumDefault.fontSize, letterSpacing:-0.17 },
    leListTxt5 : { textAlign:'center', fontSize:tokens.typo.caption.mediumDefault.fontSize, letterSpacing:-0.17, color:'#bbbbbd' },
    coachImgLe : { width:120, height:120 },
    coachArrLe1 : { width:32, height:32, marginTop:20, marginLeft:8 },
    coachArrLe2 : { width:24, height:32, marginLeft:25 },

    //근무시간승인
    coachMhcon2: {borderRadius: 7, backgroundColor:tokens.semantic.bg.inverse,paddingHorizontal:14},
    coachMhcon3: {width:44, height:44, backgroundColor:tokens.semantic.bg.inverse,borderRadius: 7, justifyContent:'center',alignItems:'center'},
    coachMhcon4: {minWdth:100, backgroundColor:tokens.semantic.bg.inverse,borderRadius: 7, paddingRight:14, paddingLeft:25, paddingVertical:11},
    coachMhImg24 : {width:24, height:32,},
    coachMhImg32 : {width:32, height:24,},
}

// DJ뱅크 배너
export const DJBank : any = {
    bannerBankWrap : {position:'absolute',bottom:24,width:'100%',paddingHorizontal:16,zIndex:999},
    // 티저
    bannerBankBox: {alignItems: 'center', height:72,borderRadius:12,paddingVertical:14,paddingLeft:19,paddingRight:16,overflow:'hidden',
        borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.08)',
        shadowColor: 'rgba(0, 35, 93, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1, // iOS 기준: rgba의 알파값 대신 opacity 조절
        shadowRadius: 10,
        elevation: 5, // Android 그림자
        backgroundColor: tokens.semantic.bg.inverse, // Android에서 그림자 보이려면 배경색 필수
    },
    djbank59 : {width:59, height:16},
    jejubank56 : {width:56, height:16},
    line : {borderRightWidth:1, height:10, borderStyle:'solid', borderRightColor: 'rgba(53, 65, 79, 0.2)', marginHorizontal:7, marginTop:4},  
    text : {marginTop:7, fontSize:tokens.typo.body.smallDefault.fontSize, color: '#323941'},
    textBlue : {fontSize:tokens.typo.body.smallDefault.fontSize, color:'#3791ff'},
    botSheetBank : {height:235, borderTopLeftRadius:12, borderTopRightRadius:12, overflow:'hidden', paddingVertical:20, paddingHorizontal:24},
    footBtn : {marginTop:162, marginHorizontal:24},
    btn_Large : {fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing: -0.15, textAlign: 'center', paddingVertical:13, overflow:'hidden', borderRadius:12}, 
    closeCheck : {height:44, marginHorizontal:16, alignItems: 'center'},
    img_kv : {width:100, height:100, marginTop:25,marginRight:-10},

    //본편
    bannerBox: {alignItems: 'center', height:72,borderRadius:12,paddingVertical:4,paddingLeft:14,paddingRight:16,overflow:'hidden',
        borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.08)',
        shadowColor: 'rgba(0, 35, 93, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1, // iOS 기준: rgba의 알파값 대신 opacity 조절
        shadowRadius: 10,
        elevation: 5, // Android 그림자
        backgroundColor: tokens.semantic.bg.inverse, // Android에서 그림자 보이려면 배경색 필수
    },
    bannerTextBox : {marginLeft:12, alignItems: 'center'},
    bannerText : {fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing: -0.15, color: '#323941', lineHeight:tokens.typo.body.mediumDefault.lineHeight},
    bannerBlueText : {fontSize:tokens.typo.body.mediumDefault.fontSize,letterSpacing: -0.15, color: '#1379f6'},

    botSheetBox2 : {height:300, borderTopLeftRadius:12, borderTopRightRadius:12, overflow:'hidden', paddingVertical:20, paddingHorizontal:24},
    lg_djbank : {width:68, height:20},
    lg_jejubank : {width:65, height:18},
    lg_line : {borderRightWidth:1, height:11, borderStyle:'solid', borderRightColor: 'rgba(53, 65, 79, 0.2)', marginHorizontal:10, marginTop:3},
    botSheetText : {fontSize:23,letterSpacing: -0.23, color: '#323941', lineHeight:32, marginTop:19},
    botSheetBlueText : {fontSize:23,letterSpacing: -0.23, color: '#1379f6'},     
    highLightBox : {position:'relative',alignSelf:'flex-start'},     
    highLightUnderline : {position: 'absolute',bottom: 0,left: 0,right: 0,height: 10,borderRadius: 2,backgroundColor: 'rgba(120, 208, 255, 0.5)'}, // 밑줄 색상
    bannerText1 :{fontSize: tokens.typo.body.xsmallDefault.fontSize, lineHeiht:20, letterSpacing: -0.13, color: '#323941'}, 
    bannerText2 :{fontSize: tokens.typo.body.smallDefault.fontSize, lineHeiht:20,letterSpacing: -0.14, color: '#30363e'}, 
    bannerText3 : {fontSize: tokens.typo.body.smallDefault.fontSize,lineHeiht:20, marginLeft:6, color: '#1379f6'}, 
    bannerText4 :{fontSize: tokens.typo.caption.largeDefault.fontSize, lineHeiht:18, letterSpacing: -0.12, color: '#69727c'},     
    bulletText : {fontSize: tokens.typo.caption.mediumDefault.fontSize, letterSpacing: -0.11, color: '#1379f6', textAlignVertical: 'center', textAlign: 'center', borderRadius: 4, borderStyle: 'solid', borderWidth: 1, borderColor: '#1379f6', height:20, paddingVertical:2, paddingHorizontal:5, alignItems: 'center', justifyContent: 'center', marginLeft:6},
}