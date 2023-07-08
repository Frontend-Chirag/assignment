import { Navbar } from "../components";

export const metadata = {
    title: 'Next Assignment',
    description: 'Next Assigment for interview'
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <main className="bg-black gridclass">
                <Navbar/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;