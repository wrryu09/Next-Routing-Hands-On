import Board from "./Board";
import TopBar from "./TopBar";

export default function Layout({ sopt, sumsims, children }) {
  return (
    <>
      <TopBar />
      <div className="flex w-full justify-between gap-4 p-4">
        {/* <Board>{sopt}</Board>
        <Board>{sumsims}</Board> */}
        <Board>{children}</Board>
      </div>
    </>
  );
}
