# SC Winter Weather Operations Dashboard

🚨 **Because weather matters - especially when it comes to French Toast supplies!** 🚨

A humorous but professional-looking emergency operations center dashboard that tracks bread and milk supplies across South Carolina grocery stores during winter weather events.

![Dashboard Preview](https://img.shields.io/badge/Status-OPERATIONAL-green)
![React](https://img.shields.io/badge/React-18.2-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🎯 Features

- **Real-time Clock** - Synchronized operations center display
- **Live Stock Ticker** - Grocery-related stocks (KR, WMT, TGT, ACI, GIS, MDLZ)
- **Critical Status Monitoring** - 8 SC grocery store locations
- **Supply Level Tracking** - Separate BREAD and MILK monitoring
- **Emergency Operations Aesthetic** - Full FEMA-style gravitas
- **Color-Coded Indicators** - Red (Critical), Yellow (Warning), Green (Operational)
- **GPS Coordinates** - Precise facility location tracking

## 🏗️ Built By

**Chris Jackson** - South Carolina Weather  
[@MySCWeather](https://twitter.com/MySCWeather) | [@ChrisJacksonSC](https://twitter.com/ChrisJacksonSC)

*"Because Weather Matters"*

## 🛠️ Tech Stack

- React 18.2
- Lucide React Icons
- Custom CSS (Tailwind-inspired utilities)
- Pure JavaScript - No external dependencies needed

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Opens at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📦 Deployment Options

### Option 1: GitHub Pages (Free)

```bash
npm run deploy
```

**Live URL:** `https://chrisjacksonwx.github.io/SCWXDashboard`

### Option 2: Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click Deploy

**Live URL:** `scwxdashboard.vercel.app`

### Option 3: Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import repository
4. Click Deploy

## 📁 Project Structure

```
scwx-dashboard/
├── public/
│   ├── assets/
│   │   └── SCWX-Logo-Transparent.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── WinterWeatherOpsDashboard.jsx  # Main component
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## 🎨 Features Breakdown

### Status Monitoring
- **CRITICAL** (Red) - Immediate attention required
- **LOW** (Yellow) - Warning level supplies
- **ADEQUATE** (Green) - Normal operations
- **DEPLETED** (Red) - Complete stockout

### Store Locations
1. Publix - Columbia (Forest Dr)
2. Harris Teeter - Greenville
3. Kroger - Charleston
4. Walmart Supercenter - Spartanburg
5. Food Lion - Rock Hill
6. Bi-Lo - Myrtle Beach
7. Piggly Wiggly - Beaufort
8. Publix - Lexington

### Live Market Data
Real-time stock prices for:
- Kroger (KR)
- Walmart (WMT)
- Target (TGT)
- Albertsons (ACI)
- General Mills (GIS)
- Mondelez (MDLZ)

## 🔧 Customization

### Update Store Data

Edit `src/WinterWeatherOpsDashboard.jsx`:

```javascript
const stores = [
  { 
    name: 'Your Store Name', 
    bread: 'CRITICAL',  // CRITICAL, LOW, ADEQUATE, DEPLETED
    milk: 'LOW',         // CRITICAL, LOW, ADEQUATE, DEPLETED
    status: 'yellow',    // red, yellow, green
    lat: 34.0007, 
    lng: -80.9738 
  },
  // Add more stores...
];
```

### Update Stock Ticker

```javascript
const stocks = [
  { symbol: 'SYMBOL', name: 'Company Name', price: 100.00, change: +2.5 },
  // Add more stocks...
];
```

## 🐛 Troubleshooting

### Logo Not Showing?
Make sure logo is at: `public/assets/SCWX-Logo-Transparent.png`

### GitHub Pages 404?
- Wait 2-3 minutes after first deploy
- Check Settings → Pages → Source is "gh-pages" branch

### Build Fails?
```bash
npm install
npm run build  # Check for errors
```

## 📝 Updates & Maintenance

To update the dashboard:

```bash
# Make your changes
git add .
git commit -m "Update dashboard"
git push

# For GitHub Pages:
npm run deploy

# For Vercel/Netlify:
# Automatically deploys on push!
```

## 📄 License

MIT License - Feel free to use for your own weather panic monitoring needs!

## 🤝 Contributing

This is a humorous project, but contributions are welcome! Feel free to:
- Add more stores
- Improve the design
- Add new features
- Fix bugs

## 🎭 The Joke

This dashboard treats bread and milk availability with the same seriousness as FEMA treats hurricane response - because in the South, the threat of winter weather creates an immediate run on French Toast ingredients. It's a loving satire of Southern winter weather panic while also being a functional (if overly dramatic) inventory tracker.

---

**SCWX Winter Weather Operations Center**  
*Real-time Supply Chain Monitoring*

Built with ❤️ (and a sense of humor) by Chris Jackson
