log:  ## Log android
	adb logcat *:S ReactNative:V ReactNativeJS:V BackgroundTask:V

uninstall-apk: ##
	-adb uninstall ${app_android_package_name}

clear-local-storage:
	adb shell pm clear com.pneumoniaapp

start-app:
	adb shell am start -n com.pneumoniaapp/com.pneumoniaapp.MainActivity

run-in-android:
	yarn run android

codepush-staging:
	appcenter codepush release-react -a Samanvay-Research-and-Development-Foundation/Pneumonia-App -d Staging

codepush-production:
	appcenter codepush release-react -a Samanvay-Research-and-Development-Foundation/Pneumonia-App -d Production

codepush-playstore:
	appcenter codepush release-react -a Samanvay-Research-and-Development-Foundation/Pneumonia-App -d playstore

create-bundle:
	cd android && ./gradlew bundleRelease

create-apk:
	cd android && ./gradlew assembleRelease
