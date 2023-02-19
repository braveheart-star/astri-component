export const Layout = ({ children }: any) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="container p-8 m-auto ">
        <div className="p-8 px-12 text-lg bg-white border ">{children}</div>
      </div>
    </div>
  );
};
