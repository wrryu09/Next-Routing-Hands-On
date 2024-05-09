import TopBar from "./TopBar";

export default function Layout({ sopt, sumsims, children }) {
  return (
    <>
      <TopBar />
      <div className="flex w-full justify-between gap-4 p-4">
        {sopt}
        {sumsims}
        {children}
      </div>
    </>
  );
}
