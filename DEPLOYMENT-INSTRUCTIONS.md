# 🚀 Deployment Instructions - SC Winter Weather Ops Dashboard

## 📦 What You Have

A **complete, ready-to-deploy** React application. Everything is already set up!

## 🎯 Quick Deploy (3 Steps)

### Step 1: Extract and Navigate

```bash
# Extract the zip file
unzip scwx-dashboard-complete.zip

# Navigate into folder
cd scwx-dashboard-complete
```

### Step 2: Install Dependencies

```bash
npm install
```

This will take 2-3 minutes. It downloads all the React libraries needed.

### Step 3: Test Locally (Optional but Recommended)

```bash
npm start
```

Opens at `http://localhost:3000` - You should see your dashboard!

Press `Ctrl+C` to stop the server when done.

---

## 🌐 Deploy to Web

### Option A: Vercel (Fastest & Easiest) ⭐ RECOMMENDED

**Why Vercel?** 
- Deploys in ~60 seconds
- Automatic HTTPS
- Better performance than GitHub Pages
- Auto-rebuilds on every git push

**Steps:**

1. **Initialize Git** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit - Winter Weather Ops Dashboard"
```

2. **Push to GitHub**:
```bash
# Create repo at https://github.com/new
# Name it: SCWXDashboard

git remote add origin https://github.com/ChrisJacksonWx/SCWXDashboard.git
git branch -M main
git push -u origin main --force
```

3. **Deploy on Vercel**:
   - Go to https://vercel.com/
   - Click "Sign Up" and choose "Continue with GitHub"
   - Click "Add New Project"
   - Click "Import" next to your `SCWXDashboard` repository
   - Click "Deploy" (don't change any settings!)
   - Wait 60 seconds ⏱️

**Live URL:** `scwxdashboard.vercel.app`

---

### Option B: GitHub Pages (Free, Reliable)

**Why GitHub Pages?**
- 100% free
- Reliable GitHub hosting
- Good for static sites

**Steps:**

1. **Push to GitHub** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit - Winter Weather Ops Dashboard"

# Create repo at https://github.com/new
# Name it: SCWXDashboard

git remote add origin https://github.com/ChrisJacksonWx/SCWXDashboard.git
git branch -M main
git push -u origin main --force
```

2. **Deploy**:
```bash
npm run deploy
```

Wait 2-3 minutes, then visit:

**Live URL:** `https://chrisjacksonwx.github.io/SCWXDashboard`

---

### Option C: Netlify

**Why Netlify?**
- Similar to Vercel
- Drag-and-drop deployment option
- Good analytics

**Steps:**

1. **Build the app**:
```bash
npm run build
```

2. **Deploy**:
   - Go to https://netlify.com/
   - Click "Add new site" → "Deploy manually"
   - Drag the `build` folder into the upload area
   - Done!

OR use Git deployment (like Vercel):
   - Go to https://app.netlify.com/start
   - Connect to GitHub
   - Select your repository
   - Click "Deploy site"

---

## 🔧 Troubleshooting

### Problem: Logo Not Showing

**Fix:**
Make sure logo is at: `public/assets/SCWX-Logo-Transparent.png`

### Problem: Vercel Shows 404

**Fix 1:** Wait 2-3 minutes - first deploy takes time

**Fix 2:** Check `vercel.json` exists (it should be in the root folder)

**Fix 3:** In Vercel dashboard:
- Go to your project
- Settings → General
- Framework Preset: `Create React App`
- Build Command: `npm run build`
- Output Directory: `build`

### Problem: GitHub Pages Shows 404

**Fix:** 
1. Wait 2-3 minutes after `npm run deploy`
2. Check GitHub repo → Settings → Pages
3. Make sure Source is "gh-pages" branch

### Problem: Build Fails

```bash
# Delete node_modules and try again
rm -rf node_modules
npm install
npm run build
```

### Problem: Permission Denied When Pushing to GitHub

**Fix:**
```bash
# Use force push (only if you own the repo!)
git push -u origin main --force
```

---

## 🔄 Making Updates Later

After your site is live, to make changes:

```bash
# 1. Make your edits to src/WinterWeatherOpsDashboard.jsx

# 2. Test locally
npm start

# 3. Commit changes
git add .
git commit -m "Update dashboard"
git push

# 4. Deploy
# For Vercel/Netlify: Automatically deploys on push!
# For GitHub Pages: Run this:
npm run deploy
```

---

## 📊 What Gets Deployed

When you deploy, these files go live:
- ✅ React application (optimized build)
- ✅ Your SCWX logo
- ✅ All dashboard functionality
- ✅ Live clock
- ✅ Stock ticker
- ✅ Store status monitoring

---

## 🎯 Final Checklist

Before deploying, make sure:

- [ ] Logo is in `public/assets/SCWX-Logo-Transparent.png`
- [ ] You've run `npm install` successfully
- [ ] You've tested with `npm start` and it works
- [ ] You've created a GitHub repository
- [ ] You've chosen your deployment platform (Vercel recommended!)

---

## 🆘 Still Having Issues?

1. **Check the build output** - Look for error messages
2. **Verify file structure** - Make sure all files are in the right places
3. **Check deployment logs** - Both Vercel and Netlify show detailed logs
4. **Try local build first**: `npm run build` - This catches most issues

---

## 🎉 Success!

Once deployed, share your link:
- Tweet it with #SCWx
- Add it to your bio
- Share with other SC weather enthusiasts

**Remember:** This dashboard treats French Toast supplies with the gravitas they deserve during Southern winter weather events! 🍞🥛

---

**Questions?** Check the README.md for more details!

Built with ❤️ by Chris Jackson
