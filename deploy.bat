@echo off
REM GitHub Pages Deployment Script for Windows
REM This script helps deploy the smoking accessories catalogue to GitHub Pages

echo 🚀 GitHub Pages Deployment Script
echo ==================================

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not installed. Please install Git first.
    pause
    exit /b 1
)

REM Get repository URL from user
set /p repo_url="Enter your GitHub repository URL (e.g., https://github.com/username/repo.git): "

if "%repo_url%"=="" (
    echo ❌ Repository URL is required.
    pause
    exit /b 1
)

REM Initialize git repository if not already done
if not exist ".git" (
    echo 📦 Initializing Git repository...
    git init
    git branch -M main
)

REM Add remote origin if not exists
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo 🔗 Adding remote origin...
    git remote add origin "%repo_url%"
)

REM Add all files
echo 📁 Adding files to Git...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Deploy smoke accessories catalogue to GitHub Pages"

REM Push to GitHub
echo 📤 Pushing to GitHub...
git push -u origin main

echo.
echo ✅ Deployment complete!
echo.
echo Next steps:
echo 1. Go to your repository on GitHub
echo 2. Click Settings ^> Pages
echo 3. Select 'Deploy from a branch' ^> 'main' ^> '/ (root)'
echo 4. Click Save
echo.
echo Your site will be available at: https://%repo_url:https://github.com/=%
echo.
echo Note: It may take a few minutes for your site to go live.
pause
