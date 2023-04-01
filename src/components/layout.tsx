import { SiteHeader } from "./site-header";

interface LayoutProperties {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProperties) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
    </>
  );
}
