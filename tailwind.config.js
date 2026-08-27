/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--canvas)',
        'canvas-subtle': 'var(--canvas-subtle)',
        'canvas-inset': 'var(--canvas-inset)',
        border: 'var(--border)',
        'border-muted': 'var(--border-muted)',
        fg: 'var(--fg)',
        'fg-muted': 'var(--fg-muted)',
        'fg-subtle': 'var(--fg-subtle)',
        accent: 'var(--accent)',
        'accent-subtle': 'var(--accent-subtle)',
        success: 'var(--success)',
        'success-emphasis': 'var(--success-emphasis)',
        danger: 'var(--danger)',
        header: 'var(--header-bg)',
        link: 'var(--link)',
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Noto Sans KR',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'SF Mono',
          'Menlo',
          'Consolas',
          'Liberation Mono',
          'monospace',
        ],
      },
      boxShadow: {
        gh: 'var(--shadow)',
      },
      borderRadius: {
        gh: '6px',
      },
    },
  },
  plugins: [],
}
