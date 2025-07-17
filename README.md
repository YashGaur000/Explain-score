# ExplainScore Website

A modern, modular, and scalable React TypeScript website for ExplainScore - an AI explainability platform for financial services.

## Features

- **Modular Architecture**: All components are reusable and configurable
- **Dynamic Content**: Site content is managed through configuration files
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Dark Mode**: Built-in theme switching
- **Contact Forms**: Working contact and demo scheduling forms
- **TypeScript**: Full type safety throughout the application

## Project Structure

```
src/
├── components/
│   ├── common/           # Reusable UI components
│   │   ├── Button.tsx    # Multi-variant button component
│   │   ├── Input.tsx     # Form input component
│   │   ├── Textarea.tsx  # Form textarea component
│   │   └── Logo.tsx      # Company logo component
│   ├── Layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Footer.tsx    # Site footer
│   │   └── Layout.tsx    # Main layout wrapper
│   └── ui/               # Specialized UI components
│       ├── ThemeToggle.tsx
│       ├── AnimatedBackground.tsx
│       └── GradientText.tsx
├── config/
│   └── site.ts          # Central site configuration
├── types/
│   └── index.ts         # TypeScript type definitions
├── utils/
│   ├── icons.ts         # Icon mapping utilities
│   └── email.ts         # Email functionality
└── pages/               # Page components
    ├── Home.tsx
    ├── About.tsx
    ├── Contact.tsx
    ├── Pricing.tsx
    ├── Blog.tsx
    └── Careers.tsx
```

## Configuration

All site content is managed through `src/config/site.ts`. This includes:

- Navigation links
- Footer links
- Company information
- Features and testimonials
- FAQ content
- Contact information

### Adding New Pages

1. Create the page component in `src/pages/`
2. Add the route to `src/App.tsx`
3. Add navigation link to `src/config/site.ts`

### Adding New Features

1. Add feature data to `src/config/site.ts`
2. Add icon to `src/utils/icons.ts` if needed
3. Update the component that displays features

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

## Customization

### Colors and Styling

- Colors are defined in `tailwind.config.js`
- Component styles use Tailwind CSS classes
- Dark mode is supported throughout

### Adding New Components

1. Create the component in the appropriate directory
2. Add TypeScript interfaces to `src/types/index.ts`
3. Export from `src/components/index.ts`
4. Update documentation

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons

## License

This project is private and proprietary to ExplainScore. 