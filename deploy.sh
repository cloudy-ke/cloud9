#!/bin/bash

# GitHub Pages Deployment Script
# This script helps deploy the smoking accessories catalogue to GitHub Pages

echo "🚀 GitHub Pages Deployment Script"
echo "=================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Get repository URL from user
read -p "Enter your GitHub repository URL (e.g., https://github.com/username/repo.git): " repo_url

if [ -z "$repo_url" ]; then
    echo "❌ Repository URL is required."
    exit 1
fi

# Initialize git repository if not already done
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
fi

# Add remote origin if not exists
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Adding remote origin..."
    git remote add origin "$repo_url"
fi

# Add all files
echo "📁 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy smoke accessories catalogue to GitHub Pages"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Go to your repository on GitHub"
echo "2. Click Settings → Pages"
echo "3. Select 'Deploy from a branch' → 'main' → '/ (root)'"
echo "4. Click Save"
echo ""
echo "Your site will be available at: https://$(echo $repo_url | sed 's|https://github.com/||g' | sed 's|\.git||g').github.io/$(basename $(pwd))/"
echo ""
echo "Note: It may take a few minutes for your site to go live."
