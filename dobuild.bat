@echo off
cd D:\AppBusiness\world-order
start /wait jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk alias_name
cd D:\AppBusiness\world-order\platforms\android\app\build\outputs\apk\release
set N=1
set FILENAME=WorldOrder0.0.%N%.apk
:loop
set /a N+=1
set FILENAME=WorldOrder0.0.%N%.apk
if exist %FILENAME% goto :loop
cd\
C:
cd %ANDROID_HOME%\build-tools\27.0.3
start /wait zipalign.exe -v 4 D:\AppBusiness\world-order\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk D:\AppBusiness\world-order\platforms\android\app\build\outputs\apk\release\%FILENAME%
echo %FILENAME% created