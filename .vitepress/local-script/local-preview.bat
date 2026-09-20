@echo off
title VitePress 本地预览

echo ==============================================
echo   VitePress 本地预览脚本
echo   构建 + 预览模式（模拟生产环境）
echo ==============================================
echo.

cd /d "%~dp0..\.."

set NODE_OPTIONS=--max-old-space-size=8192

echo [1/2] 开始构建...
echo NODE_OPTIONS=%NODE_OPTIONS%
echo.
call pnpm docs:build

if %errorlevel% neq 0 (
    echo.
    echo 构建失败，请检查错误信息
    pause
    exit /b %errorlevel%
)

echo.
echo 构建完成，启动预览服务器...
echo.
call pnpm docs:preview

pause