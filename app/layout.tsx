import type { Metadata } from 'next';
import './globals.css';
import ReduxProvider from './StateManagement/Provider';
import { Roboto_Slab } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';
import Header from './Components/Header';
const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Learn',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.className}  bg-gray-100 text-black  
        dark:bg-black dark:text-white capitalize`}
      >
        <ReduxProvider>
          <Header />
          <main className="mt-[4.52rem]">{children}</main>
          <ToastContainer
            draggablePercent={60}
            transition={Zoom}
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ReduxProvider>
      </body>
    </html>
  );
}
