import './globals.css'

export const metadata = {
  title: 'Grainy SVG',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
