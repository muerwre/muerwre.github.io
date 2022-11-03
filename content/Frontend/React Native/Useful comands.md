## Show android logcat

```shell
adb logcat com.application:I "*:S"
```

## Get .apk's SHA-256 

```bash
keytool -printcert -jarfile "$1"
```

## Assemble debug release on Android

Packages release with bundled resources. 

```shell
npx react-native bundle \
  --platform android \
  --dev false \
  --entry-file index.js \
  --bundle-output android/app/src/main/assets/index.android.bundle \
  --assets-dest android/app/src/main/res/

cd android && ./gradlew assembleDebug

# do your stuff

./gradlew clean
```

## Send release to Android device

```shell
cd ./android \
  && ./gradlew assembleRelease \
  && adb install ./app/build/outputs/apk/release/app-release.apk
```

## Deep links

- https://zarah.dev/2022/02/08/android12-deeplinks.html
- https://developer.android.com/training/app-links/verify-site-associations#invoke-domain-verification
- https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://miin.ru&relation=delegate_permission/common.handle_all_urls

### Open deep links

```shell
# ios 
xcrun simctl openurl booted $1

# android
adb shell am start -W -a android.intent.action.VIEW -d $1 \
com.application
```

### Reverify links on Android

```shell
PACKAGE="com.application"

adb shell pm set-app-links --package $PACKAGE 0 all && \
  adb shell pm verify-app-links --re-verify $PACKAGE
```

