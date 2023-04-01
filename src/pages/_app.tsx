import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { AppType } from "next/app";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider, useTheme } from "next-themes";
import { type FC, type PropsWithChildren } from "react";

import { api } from "~/utils/api";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const AuthProvider: FC<PropsWithChildren> = ({ children, ...properties }) => {
  const theme = useTheme();

  return (
    <ClerkProvider
      {...properties}
      appearance={{
        baseTheme: theme.resolvedTheme === "dark" ? dark : undefined,
      }}
    >
      {children}
    </ClerkProvider>
  );
};

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
        }
      }`}</style>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AuthProvider {...pageProps}>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
