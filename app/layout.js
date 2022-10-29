import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <div>HEADER</div>
        {children}
        <div>FOOTER</div>
      </body>
    </html>
  )
}
