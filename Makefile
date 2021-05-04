log:  ## Log android
	adb logcat *:S ReactNative:V ReactNativeJS:V BackgroundTask:V

uninstall-apk: ##
	-adb uninstall ${app_android_package_name}

clear-local-storage:
	adb shell pm clear com.pneumoniaapp

start-app:
	adb shell am start -n com.pneumoniaapp/com.pneumoniaapp.MainActivity
