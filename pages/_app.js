import { CartProvider } from "../components/UI/CartContext";
import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}