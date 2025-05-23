
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from 'next/link'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'

const banner = <Banner storageKey="some-key">🍷 Dartonic 0.0.3 Query Builder</Banner>
const navbar = (
  <Navbar
    logo={
      <Link href="/" style={{display: 'flex', alignItems: 'center', gap: 8}}>
        <img src="https://raw.githubusercontent.com/evandersondev/dartonic/main/assets/logo.png" alt="Darto Logo" width="32px" />
        <span style={{fontSize: 20, fontWeight: 700}}>Dartonic</span>
      </Link>
    }
    projectLink='https://github.com/evandersondev/dartonic'
  />
)
const footer = <Footer>Made by<a href="https://evandersondev.com.br" target="_blank" style={{marginInline: 4}}>evandersondev</a> {new Date().getFullYear()} © Dartonic.</Footer>
 
export default async function RootLayout({ children, params }) {
  return (
    <html
      lang="en"
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        <Search />
         <link rel="icon" type="image/png" href="/logo.png" />
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          sidebar={{
            toggleButton: false,
          }}
        >
          {children}
        </Layout>
        <SpeedInsights/>
      </body>
    </html>
  )
}