import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import  {  NextUIProvider  }  from  "@nextui-org/react" 
import  {  ThemeProvider  as  NextThemesProvider  }  from  'next-themes' ;


export default function App({ Component, pageProps }: AppProps) {

  return(
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  ) 
}
