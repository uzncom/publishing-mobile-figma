# publishing-mobile-figma

## Node.js version 20 이상 설치(node 20부터 지원)

## Android 
### Android Studio 설치(https://developer.android.com/studio?hl=ko)
- More Actions > Virtual Device Manager > 가상 디바이스 추가
- npx react-native run-android 실행

### Metro 연결 확인 필요
- 연결 안될 시 빈 화면, 실행되더라도 끊기면 화면 안나옴
- android앱에 JS 전달하는 역할npx react-native run-android 실행
- Metro와 에뮬레이터 동시 실행됨java설치 필요ios 환경 설정

## xcode 설치
### 운영체제 및 iPhone 기기 다운로드
- 기기 없으면 상단바에서 Xcode > setting > Components > Add Platforms > 기기 선택 후 설치

### Ruby 설치(CocoaPods가 Ruby기반이라 필요함, brew install ruby)
- ruby 3.3.0버전(최신 버전) 설치
- 설치 후 PATH 설정 필요할 수 있음(Homebrew로 Ruby를 설치하면 기본 macOS Ruby가 아니라 brew Ruby를 사용해야 함)
- 설치 안하면 pod install 실패CocoaPods 설치 (brew install cocoapods)

### iOS 의존성 설치
- 터미널에서 cd ios > pod init / pod install
- ios 폴더에 Podfile 생성되어 있는지 확인

### 터미널에서 open ios/reactNativeTest.xcworkspace 실행
- iPhone 기기 선택

#### iOS 시뮬레이터 기기 및 운영체제 선택
- 디바이스: iPhone 14 / 14 Pro
- iOS: iOS 16.x 또는 17.x
- 이유: RN 라이브러리 대부분은 이 운영체제에 맞춰 테스트되어 버그가 거의 없음, 첫 실행시 빌드/실행속도 빠름

### npx react-native run-ios 실행
- xcode workspace에서 기기 선택했어도 default 기기가 아니라서 선택한 기기로 실행 안될수 있음
- npx react-native run-ios --simulator="iPhone 14 Pro" 시뮬레이터 기기 직접 입력 후 실행

### npm run ios 실행
- `npm run ios`는 `scripts/run-ios.sh`를 통해 공용 실행 방식으로 iOS 앱을 실행함
- 이미 부팅된 시뮬레이터가 있으면 해당 기기로 실행됨
- 특정 시뮬레이터를 지정하려면 파일을 수정하지 말고 아래처럼 인자를 넘겨서 실행

```bash
npm run ios -- --simulator="iPhone 16"
npm run ios -- --simulator="iPhone SE (3rd generation)"
npm run ios -- --udid="DEVICE-UDID"
IOS_SIMULATOR="iPhone 17 Pro" npm run ios
```

##환경설정
1. $ vi ~/.zshrc

2. i(편집) 누르고 아래 내용 입력하고 ESC 누르고 wq(저장) 입력

```
# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh" # This loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm" # This loads nvm bash_completion
 
 
# android
export ANDROID_HOME=/Users/$USER/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
 
 
# rbenv
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init - zsh)"
 
 
# ruby
[[ -d ~/.rbenv ]] && \
export PATH=${HOME}/.rbenv/bin:${PATH} && \
eval "$(rbenv init -)"
 
 
# java
export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
export PATH=${PATH}:$JAVA_HOME/bin
```

3. // .zshrc 적용
$ source ~/.zshrc