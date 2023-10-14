import Header from "@/components/header";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
