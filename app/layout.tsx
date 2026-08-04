import type {Metadata} from "next";import "./globals.css";export const metadata:Metadata={title:"NYC Student Hub | Everyday Student Links",description:"A customizable everyday links hub for New York City students.",icons:{icon:"/favicon.svg"}};export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}

