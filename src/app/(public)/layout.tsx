export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>Header Public</p>
      {children}
      <p>Footer Public</p>
    </div>
  );
}
