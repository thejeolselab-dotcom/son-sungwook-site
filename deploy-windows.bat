@echo off
chcp 65001 >nul
echo ========================================================
echo [손성욱 법인 컨설턴트 웹사이트] GitHub 업로드 및 gh-pages 배포
echo ========================================================
set /p REPO_URL="GitHub 저장소 주소를 붙여넣고 Enter를 누르세요 (예: https://github.com/아이디/son-sungwook.git): "
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main
git push -u origin main
echo.
echo [완료] GitHub main 브랜치에 코드 및 에셋(public/profile.jpg) 푸시가 완료되었습니다!
echo GitHub Actions가 자동으로 gh-pages 무료 배포를 시작합니다.
pause
