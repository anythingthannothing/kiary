import Link from "next/link";

export default function MainHeader() {
  return (
    <header
      className={
        "flex justify-between items-center px-4 py-2 max-w-[1440px] mx-auto"
      }
    >
      <Link href={"/"}>
        <h1 className={"text-2xl font-semibold"}>Kiary</h1>
      </Link>
      <nav>
        <ul className={"flex gap-16"}>
          <li>
            <Link href={"/to-dos"}>ToDo</Link>
          </li>
          <li>
            <Link href={"/calendar"}>Calendar</Link>
          </li>
          <li>
            <Link href={"/albums"}>Album</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link href={"/my-page"}>My Page</Link>
      </div>
    </header>
  );
}
