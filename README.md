# Modern Portfolio - 2024 Edition 🚀

![Portfolio Banner](./src/assets/banner.png)

A cutting-edge, responsive portfolio application built with React Native, featuring modern design principles, smooth animations, and seamless user experience.

## ✨ Live Demo
[View Live Demo](https://jonyach.netlify.app)

## 🎯 Features

- 🌓 Dynamic Theme Switching (Dark/Light Mode)
- 🎨 Modern Neo-brutalist Design
- 🎭 Seamless Animations & Transitions
- 📱 Fully Responsive Design
- 🔄 Interactive Project Showcase
- 📊 Animated Skill Progress Bars
- 📬 Real-time Contact Form
- 🎯 Custom Loading Animations
- 🌐 Cross-platform Compatibility

## 🛠 Technologies

### Frontend
- React Native
- React Navigation
- Reanimated 2
- Lottie Animations
- Shared Element Transitions
- React Native SVG
- AsyncStorage

### Backend Integration
- Axios
- RESTful APIs
- Custom Hooks

### Styling & Design
- Custom Theme Provider
- Linear Gradients
- Glassmorphism Effects
- Custom Animations

### Development & Deployment
- Metro Bundler
- Babel
- Netlify Deployment
- Environment Configuration

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm/yarn
- React Native CLI
- Xcode (for iOS)
- Android Studio (for Android)

### Installation

1. Clone the repository
```bash
git clone https://github.com/Joseph-Okoth/modern-portfolio.git
cd modern-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Install iOS dependencies
```bash
cd ios
pod install
cd ..
```

4. Start the application

```bash
# Start Metro Bundler
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web
```

## 🌐 Environment Setup

1. Create a `.env` file in the root directory
```env
REACT_APP_API_URL=your_api_url
```

2. Configure backend endpoints in `src/api/config.js`

## 📱 App Navigation

```
Home
 ├── About
 │    ├── Experience
 │    └── Skills
 ├── Projects
 │    └── Project Details
 └── Contact
```

## 💫 Key Features Usage

### Theme Switching
```javascript
import { useTheme } from '@theme/ThemeContext';

const { isDark, toggleTheme } = useTheme();
```

### API Integration
```javascript
import { useAPI } from '@hooks/useAPI';
import { portfolioAPI } from '@api/portfolio';

const { execute, loading, data } = useAPI(portfolioAPI.getProjects);
```

### Animations
```javascript
import { AnimatedLoader } from '@components/AnimatedLoader';

<AnimatedLoader visible={isLoading} />
```

## 📂 Project Structure

```
ModernPortfolio/
├── src/
│   ├── components/         # Reusable components
│   ├── screens/           # Main screens
│   ├── theme/             # Theme configuration
│   ├── assets/            # Images, fonts, etc.
│   ├── api/               # API integration
│   ├── utils/             # Helper functions
│   └── hooks/             # Custom hooks
├── android/               # Android specific files
├── ios/                   # iOS specific files
└── web/                   # Web specific files
```

## 🚀 Deployment

### Netlify Deployment Steps

1. Build your project
```bash
npm run build
```

2. Deploy to Netlify
- Connect your GitHub repository
- Configure build settings
- Set environment variables
- Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 👤 Author

**Your Name**
- Website: [jonyach.netlify.app](https://jonyach.netlify.app)
- GitHub: [@Joseph-Okoth](https://github.com/Joseph-Okoth)
- LinkedIn: [@jonyach](https://linkedin.com/in/jonyach)

## 🌟 Show your support

Give a ⭐️ if this project helped you!

## 📝 Notes

- The portfolio is optimized for performance and SEO
- Regular updates and maintenance ensure compatibility with latest React Native versions
- Custom animations are optimized for smooth performance
- Responsive design works across all device sizes

## 💡 Upcoming Features

- [ ] Voice Control Integration
- [ ] AR Project Showcase
- [ ] Interactive 3D Elements
- [ ] Advanced Analytics Dashboard
- [ ] Multi-language Support

---
Made with ❤️ and React Native