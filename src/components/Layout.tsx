export const Layout = ({ children }: any) => {
  return (
    <div className="bg-gray-100 ">
      <div className="container h-screen p-8 m-auto ">
        <div className="h-full p-4 bg-white border">{children}</div>
      </div>
    </div>
  );
};
