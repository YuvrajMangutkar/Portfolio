@echo off
echo ============================================
echo  Yuvraj Portfolio - Setup & Launch
echo ============================================
echo.
echo [1/2] Installing dependencies...
cd /d d:\P\yuvraj-portfolio
npm install
echo.
echo [2/2] Starting dev server...
echo Open: http://localhost:5173
npm run dev
