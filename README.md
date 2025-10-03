# Krido Automations Website

Custom-built automation agency website built with React, Tailwind CSS, and lucide-react icons.

## 🚀 Deployment Instructions

### Step 1: Push to GitHub

1. Create a new repository on [GitHub](https://github.com/new):
   - Name it `krido-automations`
   - Set it as **Public** or **Private**
   - DO NOT initialize with README (we already have files)

2. Connect your local repository to GitHub:
   ```bash
   cd "/Users/apple/Desktop/Jash Projects/krido-website"
   git remote add origin https://github.com/YOUR_USERNAME/krido-automations.git
   git branch -M main
   git push -u origin main
   ```

   **Note:** Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account

2. Click **"New Project"**

3. Import the `krido-automations` repository you just created

4. Vercel will auto-detect the React configuration:
   - Framework Preset: **Create React App**
   - Build Command: `npm run build`
   - Output Directory: `build`

5. Click **"Deploy"**

6. Your site will be live at: `https://krido-automations.vercel.app`

### Step 3: Future Updates

To make changes to your live website:

```bash
# Make your code changes locally
# Test them first
npm start

# Then commit and push to GitHub
git add .
git commit -m "Description of your changes"
git push origin main

# Vercel will automatically deploy in ~60 seconds
```

## 📧 Form Setup (Web3Forms)

The contact form is integrated with Web3Forms for handling submissions.

1. Sign up at [web3forms.com](https://web3forms.com)

2. Get your Access Key from the dashboard

3. Update the form handler in `src/App.js`:
   - Find line ~117: `access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE'`
   - Replace with your actual access key

4. Commit and push the change:
   ```bash
   git add src/App.js
   git commit -m "Add Web3Forms access key"
   git push origin main
   ```

**Features:**
- Free tier: 250 submissions/month
- Submissions sent to your registered email
- Built-in spam protection

## 🎥 Video Testimonial Setup

To add a YouTube video testimonial:

1. Upload your video to YouTube and set visibility to **"Unlisted"**

2. Get the video ID from the URL:
   - Example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID: `dQw4w9WgXcQ`

3. Update `src/App.js` (around line 70):
   ```javascript
   {
     type: 'video',
     videoId: 'YOUR_YOUTUBE_VIDEO_ID',  // Replace with your video ID
     author: "Michael Chen",
     role: "Operations Director",
     company: "DataSync Pro"
   }
   ```

4. Commit and push the change

## 🛠️ Local Development

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm start
```

Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
krido-website/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js              # Main component
│   ├── index.js            # React entry point
│   └── index.css           # Tailwind CSS imports
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
└── postcss.config.js       # PostCSS configuration
```

## 💡 Key Features

- ✨ Modern, animated gradient background
- 📱 Fully responsive design
- 🎨 Tailwind CSS for styling
- 🔄 Auto-rotating testimonials
- 📧 Integrated contact form
- 🎥 Video testimonial support
- 🚀 Fast deployment with Vercel

## 🔗 Important Links

- **Web3Forms Dashboard:** https://web3forms.com/dashboard
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repository:** (Add after creating)

---

Built with ❤️ using React and Tailwind CSS
