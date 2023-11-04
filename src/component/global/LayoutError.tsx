import { Link } from "react-router-dom";

export default function LayoutError() {
  return (
    <div className="min-w-full min-h-screen flex flex-col gap-5 justify-center items-center">
      <p className="text-2xl">This page not exist</p>
      <Link className="px-4 py-2 border hover:bg-slate-300" to="/">
        click here return to /
      </Link>
    </div>
  );
}
