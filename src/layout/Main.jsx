const Main = ({ children }) => {
  return (
    <main className="flex w-full flex-grow flex-col px-8 pb-8 pt-[8rem] sm:pt-[12rem] lg:px-16">
      {children}
    </main>
  );
};

export default Main;
