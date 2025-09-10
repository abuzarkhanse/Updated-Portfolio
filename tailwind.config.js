export default function MyApp({ Component, pageProps }) {
  return (
    <div className="dark">  {/* forces dark mode */}
      <Component {...pageProps} />
    </div>
  )
}
