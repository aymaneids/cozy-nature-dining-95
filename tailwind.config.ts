
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: 'hsl(var(--primary))',
				'primary-foreground': 'hsl(var(--primary-foreground))',
				secondary: 'hsl(var(--secondary))',
				'secondary-foreground': 'hsl(var(--secondary-foreground))',
				destructive: 'hsl(var(--destructive))',
				'destructive-foreground': 'hsl(var(--destructive-foreground))',
				muted: 'hsl(var(--muted))',
				'muted-foreground': 'hsl(var(--muted-foreground))',
				accent: 'hsl(var(--accent))',
				'accent-foreground': 'hsl(var(--accent-foreground))',
				popover: 'hsl(var(--popover))',
				'popover-foreground': 'hsl(var(--popover-foreground))',
				card: 'hsl(var(--card))',
				'card-foreground': 'hsl(var(--card-foreground))',
				// Custom colors
				'nature': {
					50: '#f6f7f1',
					100: '#e9eedc',
					200: '#d4dbbe',
					300: '#b9c596',
					400: '#9dac71',
					500: '#7e8f52',
					600: '#637041',
					700: '#4c5737',
					800: '#3e4730',
					900: '#363d2c',
					950: '#1b2116',
				},
				'warm': {
					50: '#fbf7f4',
					100: '#f5ebe4',
					200: '#ead6c8',
					300: '#dcb99f',
					400: '#cd9a78',
					500: '#be7d58',
					600: '#b0684a',
					700: '#92523f',
					800: '#774437',
					900: '#623a2f',
					950: '#351c16',
				},
				'cream': {
					50: '#fefefe',
					100: '#fcfcfb',
					200: '#f9f7f3',
					300: '#f3ede5',
					400: '#e8ddcf',
					500: '#dbc9b5',
					600: '#cdb499',
					700: '#b79777',
					800: '#9d7a5a',
					900: '#7d5f45',
					950: '#432f21',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'slide-down': 'slide-down 0.5s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'spin-slow': 'spin-slow 8s linear infinite',
			},
			backgroundImage: {
				'wood-texture': "url('https://images.unsplash.com/photo-1543469057-c252ff1e1f55?q=80&w=2064&auto=format&fit=crop')",
				'leaf-pattern': "url('https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=2067&auto=format&fit=crop')",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
