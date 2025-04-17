
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// GreenPocket custom colors
				green: {
					50: '#F0F9F0',
					100: '#DCEFDC',
					200: '#C1E1C1',
					300: '#A5D6A7',
					400: '#81C784',
					500: '#66BB6A',
					600: '#4CAF50',
					700: '#388E3C',
					800: '#2E7D32',
					900: '#1B5E20',
				},
				blue: {
					50: '#E1F5FE',
					100: '#B3E5FC',
					200: '#81D4FA',
					300: '#4FC3F7',
					400: '#29B6F6',
					500: '#03A9F4',
					600: '#039BE5',
					700: '#0288D1',
					800: '#0277BD',
					900: '#01579B',
				},
				brown: {
					50: '#EFEBE9',
					100: '#D7CCC8',
					200: '#BCAAA4',
					300: '#A1887F',
					400: '#8D6E63',
					500: '#795548',
					600: '#6D4C41',
					700: '#5D4037',
					800: '#4E342E',
					900: '#3E2723',
				},
				eco: {
					green: '#2E7D32',
					neutral: '#FFC107',
					red: '#D32F2F',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				wave: {
					'0%': { transform: 'rotate(0.0deg)' },
					'10%': { transform: 'rotate(14.0deg)' },
					'20%': { transform: 'rotate(-8.0deg)' },
					'30%': { transform: 'rotate(14.0deg)' },
					'40%': { transform: 'rotate(-4.0deg)' },
					'50%': { transform: 'rotate(10.0deg)' },
					'60%': { transform: 'rotate(0.0deg)' },
					'100%': { transform: 'rotate(0.0deg)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				shimmer: {
					'0%': { backgroundPosition: '-100% 0' },
					'100%': { backgroundPosition: '100% 0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				wave: 'wave 2.5s ease-in-out infinite',
				float: 'float 6s ease-in-out infinite',
				shimmer: 'shimmer 2s linear infinite',
			},
			backgroundImage: {
				'eco-gradient': 'linear-gradient(120deg, #A5D6A7 0%, #81C784 50%, #4CAF50 100%)',
				'eco-pattern': "url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2366bb6a' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
				'glow-gradient': 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
			},
			boxShadow: {
				'glow-sm': '0 0 10px rgba(16, 185, 129, 0.2)',
				'glow-md': '0 0 20px rgba(16, 185, 129, 0.3)',
				'glow-lg': '0 0 30px rgba(16, 185, 129, 0.4)',
				'glow-xl': '0 0 40px rgba(16, 185, 129, 0.5)',
			},
			textShadow: {
				'glow-sm': '0 0 5px rgba(16, 185, 129, 0.3)',
				'glow-md': '0 0 10px rgba(16, 185, 129, 0.4)',
				'glow-lg': '0 0 15px rgba(16, 185, 129, 0.5)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
