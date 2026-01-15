#!/bin/bash

# SC Winter Weather Ops - One-Command Deployment
# This script deploys your dashboard to GitHub and Vercel

set -e

echo "=============================================="
echo "SC Winter Weather Ops - Quick Deploy Script"
echo "=============================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}This script will:${NC}"
echo "1. Install dependencies"
echo "2. Test the build"
echo "3. Push to GitHub"
echo "4. Give you deployment options"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${YELLOW}Error: package.json not found!${NC}"
    echo "Please run this script from the scwx-dashboard-complete folder"
    exit 1
fi

# Step 1: Install Dependencies
echo -e "${YELLOW}[1/4] Installing dependencies...${NC}"
npm install

# Step 2: Test Build
echo ""
echo -e "${YELLOW}[2/4] Testing build...${NC}"
npm run build
echo -e "${GREEN}✓ Build successful!${NC}"

# Step 3: Git Setup
echo ""
echo -e "${YELLOW}[3/4] Setting up Git...${NC}"

# Initialize git if not already done
if [ ! -d ".git" ]; then
    git init
fi

# Add all files
git add .

# Commit
git commit -m "Deploy SC Winter Weather Operations Dashboard" || echo "Nothing to commit"

# Check if remote exists
if git remote | grep -q "origin"; then
    echo -e "${GREEN}✓ Git remote already configured${NC}"
else
    echo ""
    echo -e "${BLUE}GitHub remote not configured. Let's set it up!${NC}"
    echo ""
    echo "Go to: ${GREEN}https://github.com/new${NC}"
    echo "Repository name: ${GREEN}SCWXDashboard${NC}"
    echo "Make it: ${GREEN}Public${NC}"
    echo ""
    read -p "Press Enter once you've created the GitHub repo..."
    
    git remote add origin https://github.com/ChrisJacksonWx/SCWXDashboard.git
fi

# Step 4: Push to GitHub
echo ""
echo -e "${YELLOW}[4/4] Pushing to GitHub...${NC}"
git branch -M main
git push -u origin main --force
echo -e "${GREEN}✓ Pushed to GitHub!${NC}"

# Deployment Options
echo ""
echo -e "${GREEN}=============================================="
echo "✓ Setup Complete!"
echo "==============================================${NC}"
echo ""
echo -e "${BLUE}Choose your deployment method:${NC}"
echo ""
echo -e "${GREEN}Option 1 - Vercel (RECOMMENDED):${NC}"
echo "  1. Go to: https://vercel.com/"
echo "  2. Sign in with GitHub"
echo "  3. Click 'Add New Project'"
echo "  4. Import 'SCWXDashboard'"
echo "  5. Click 'Deploy'"
echo "  Live at: scwxdashboard.vercel.app"
echo ""
echo -e "${GREEN}Option 2 - GitHub Pages:${NC}"
echo "  Run: npm run deploy"
echo "  Live at: https://chrisjacksonwx.github.io/SCWXDashboard"
echo ""
echo -e "${GREEN}Option 3 - Netlify:${NC}"
echo "  1. Go to: https://app.netlify.com/start"
echo "  2. Connect to GitHub"
echo "  3. Select 'SCWXDashboard'"
echo "  4. Click 'Deploy site'"
echo ""
echo -e "${BLUE}GitHub Repo:${NC} https://github.com/ChrisJacksonWx/SCWXDashboard"
echo ""
echo "Happy deploying! 🚀"
echo ""
