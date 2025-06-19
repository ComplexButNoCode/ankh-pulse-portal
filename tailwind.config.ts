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
				cosmos: {
					'50': '#f0f4ff',
					'100': '#e0e9ff',
					'200': '#c7d9ff',
					'300': '#a5c0ff',
					'400': '#7f9cff',
					'500': '#5b73ff',
					'600': '#4f46e5',
					'700': '#4338ca',
					'800': '#3730a3',
					'900': '#312e81',
					'950': '#1e1b4b'
				},
				void: {
					'50': '#f8fafc',
					'100': '#f1f5f9',
					'200': '#e2e8f0',
					'300': '#cbd5e1',
					'400': '#94a3b8',
					'500': '#64748b',
					'600': '#475569',
					'700': '#334155',
					'800': '#1e293b',
					'900': '#0f172a',
					'950': '#020617'
				},
				aurora: {
					'50': '#f0f9ff',
					'100': '#e0f2fe',
					'200': '#bae6fd',
					'300': '#7dd3fc',
					'400': '#38bdf8',
					'500': '#0ea5e9',
					'600': '#0284c7',
					'700': '#0369a1',
					'800': '#075985',
					'900': '#0c4a6e',
					'950': '#082f49'
				}
			},
			fontFamily: {
				'ankh': ['Orbitron', 'monospace'],
				'ethereal': ['Space Grotesk', 'sans-serif'],
				'Pilowlava': ['Pilowlava', 'cursive']
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
				'breathe': {
					'0%, 100%': { 
						transform: 'scale(1)',
						opacity: '0.8'
					},
					'50%': { 
						transform: 'scale(1.05)',
						opacity: '1'
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(91, 115, 255, 0.4)'
					},
					'50%': { 
						boxShadow: '0 0 60px rgba(91, 115, 255, 0.8), 0 0 100px rgba(91, 115, 255, 0.4)'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px)',
					},
					'50%': { 
						transform: 'translateY(-20px)',
					}
				},
				'aurora': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				},
				'aurora-flow': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'25%': {
						backgroundPosition: '100% 100%'
					},
					'50%': {
						backgroundPosition: '100% 0%'
					},
					'75%': {
						backgroundPosition: '0% 100%'
					}
				},
				'aurora-wave': {
					'0%, 100%': {
						backgroundPosition: '0% 0%'
					},
					'33%': {
						backgroundPosition: '100% 50%'
					},
					'66%': {
						backgroundPosition: '50% 100%'
					}
				},
				'fluid-move': {
					'0%, 100%': {
						transform: 'rotate(0deg) scale(1)',
						filter: 'hue-rotate(0deg)'
					},
					'25%': {
						transform: 'rotate(90deg) scale(1.1)',
						filter: 'hue-rotate(90deg)'
					},
					'50%': {
						transform: 'rotate(180deg) scale(1.05)',
						filter: 'hue-rotate(180deg)'
					},
					'75%': {
						transform: 'rotate(270deg) scale(1.1)',
						filter: 'hue-rotate(270deg)'
					}
				},
				'waveform': {
					'0%, 100%': { 
						transform: 'scaleY(0.3)'
					},
					'50%': { 
						transform: 'scaleY(1)'
					}
				},
				'morph': {
					'0%, 100%': { 
						borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
					},
					'25%': { 
						borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%'
					},
					'50%': { 
						borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%'
					},
					'75%': { 
						borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'breathe': 'breathe 4s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'aurora': 'aurora 15s ease infinite',
				'aurora-flow': 'aurora-flow 20s ease-in-out infinite',
				'aurora-wave': 'aurora-wave 15s ease-in-out infinite reverse',
				'fluid-move': 'fluid-move 25s ease-in-out infinite',
				'waveform': 'waveform 1s ease-in-out infinite',
				'morph': 'morph 8s ease-in-out infinite'
			},
			backgroundSize: {
				'400%': '400% 400%',
				'600%': '600% 600%'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
