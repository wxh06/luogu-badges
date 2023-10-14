import Header from "@/components/header";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <div className="sm:mx-4">
        <div className="mx-auto mt-4 max-w-2xl">{children}</div>
      </div>
    </>
  );
}
