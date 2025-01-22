import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

export default withUt({
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
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
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			letter: {
    				'0%': {
    					transform: 'translate(0, 0) rotate(0deg)'
    				},
    				'10%': {
    					transform: 'translate(1px, -1px) rotate(1deg)'
    				},
    				'20%': {
    					transform: 'translate(-1px, 1px) rotate(-1deg)'
    				},
    				'30%': {
    					transform: 'translate(1px, 1px) rotate(1deg)'
    				},
    				'40%': {
    					transform: 'translate(-1px, -1px) rotate(-1deg)'
    				},
    				'50%': {
    					transform: 'translate(1px, -1px) rotate(1deg)'
    				},
    				'60%': {
    					transform: 'translate(-1px, 1px) rotate(-1deg)'
    				},
    				'70%': {
    					transform: 'translate(1px, 1px) rotate(1deg)'
    				},
    				'80%': {
    					transform: 'translate(-1px, -1px) rotate(-1deg)'
    				},
    				'90%': {
    					transform: 'translate(1px, -1px) rotate(1deg)'
    				},
    				'100%': {
    					transform: 'translate(0, 0) rotate(0deg)'
    				}
    			},
    			sphere: {
    				'0%': {
    					transform: 'translate(0, 0) rotate(0deg)'
    				},
    				'25%': {
    					transform: 'translate(10px, -10px) rotate(1deg)'
    				},
    				'50%': {
    					transform: 'translate(-10px, 20px) rotate(-1deg)'
    				},
    				'75%': {
    					transform: 'translate(-20px, -10px) rotate(1deg)'
    				},
    				'100%': {
    					transform: 'translate(0, 0) rotate(0deg)'
    				}
    			},
    			border: {
    				to: {
    					'--border-angle': '360deg'
    				}
    			},
    			skill_1: {
    				'0%': {
    					transform: 'translate(0, 0) rotate(0deg)'
    				},
    				'25%': {
    					transform: 'translate(50px, 0) rotate(1deg)'
    				},
    				'50%': {
    					transform: 'translate(-50px, 0) rotate(-1deg)'
    				},
    				'75%': {
    					transform: 'translate(50px, 0) rotate(1deg)'
    				},
    				'100%': {
    					transform: 'translate(0, 0) rotate(0deg)'
    				}
    			},
    			skill_2: {
    				'0%': {
    					transform: 'translate(0, 0) rotate(0deg)'
    				},
    				'25%': {
    					transform: 'translate(0, 50px) rotate(1deg)'
    				},
    				'50%': {
    					transform: 'translate(0, -50px) rotate(-1deg)'
    				},
    				'75%': {
    					transform: 'translate(0, 50px) rotate(1deg)'
    				},
    				'100%': {
    					transform: 'translate(0, 0) rotate(0deg)'
    				}
    			}
    		},
    		animation: {
    			letter: 'letter 5s ease-in-out infinite',
    			sphere: 'sphere 5s ease-in-out infinite',
    			border: 'border 4s linear infinite',
    			skill_1: 'skill_1 5s ease-in-out infinite',
    			skill_2: 'skill_2 5s ease-in-out infinite'
    		}
    	},
    	fontFamily: {
    		bloop: [
    			'var(--font-dx-bloop)'
    		],
    		mono: [
    			'JetBrains Mono',
    			'monospace'
    		],
    		neueMontreal: [
    			'var(--font-neue-montreal)'
    		]
    	}
    },
	plugins: [require("tailwindcss-animate")],
 }) satisfies Config;
