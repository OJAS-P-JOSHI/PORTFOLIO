export const theme = {
  colors: {
    primary: {
      indigo: {
        light: "rgba(99, 102, 241, 0.1)",
        default: "rgba(99, 102, 241, 0.2)",
        glow: "rgba(99, 102, 241, 0.4)"
      },
      purple: {
        light: "rgba(139, 92, 246, 0.1)",
        default: "rgba(139, 92, 246, 0.2)",
        glow: "rgba(139, 92, 246, 0.4)"
      },
      pink: {
        light: "rgba(236, 72, 153, 0.1)",
        default: "rgba(236, 72, 153, 0.2)",
        glow: "rgba(236, 72, 153, 0.4)"
      }
    },
    gradients: {
      primary: "from-indigo-400 via-purple-600 to-pink-500",
      glow: "from-indigo-500 via-purple-500 to-pink-500",
      text: "bg-gradient-to-br from-indigo-400 via-purple-600 to-pink-500"
    },
    background: {
      dark: "#030014",  // Your dark background color
      grid: "rgba(99, 102, 241, 0.05)", // Grid line color
      glow: {
        white: "rgba(255, 255, 255, 0.08)",
        purple: "rgba(139, 92, 246, 0.12)",
        blue: "rgba(59, 130, 246, 0.12)",
        pink: "rgba(236, 72, 153, 0.12)"
      }
    },
    text: {
      primary: "text-neutral-600 dark:text-neutral-400",
      secondary: "text-neutral-500 dark:text-neutral-300",
      accent: {
        purple: "text-purple-600 dark:text-purple-400",
        indigo: "text-indigo-600 dark:text-indigo-400",
        pink: "text-pink-600 dark:text-pink-400"
      }
    }
  },
  effects: {
    blur: {
      sm: "blur-[1px]",
      md: "blur-[2px]",
      lg: "blur-[4px]"
    },
    glow: {
      sm: "0 0 20px",
      md: "0 0 30px",
      lg: "0 0 50px"
    }
  },
  flipColors: [
    "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-500",
    "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500",
    "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-500",
    "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500"
  ]
};

// Helper function to get nested theme values
export const getThemeValue = (path: string) => {
  return path.split('.').reduce((obj, key) => obj[key], theme as any);
};
