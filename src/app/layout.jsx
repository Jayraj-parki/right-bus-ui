
import "@/styles/globals.scss";
import StoreProvider from "@/providers/StoreProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import Toast from "@/components/common/Toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"


export const metadata = { title: "Bus Booking", description: "Modern bus travel booking" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-vh-100 d-flex flex-column justify-content-between ">
        <StoreProvider>
          <ThemeProvider>
            <Navbar />
            {children}
            <Toast />
            <Footer />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
