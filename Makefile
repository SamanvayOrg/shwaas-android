log:  ## Log android
	adb logcat *:S ReactNative:V ReactNativeJS:V BackgroundTask:V

uninstall_apk: ##
	-adb uninstall ${app_android_package_name}
