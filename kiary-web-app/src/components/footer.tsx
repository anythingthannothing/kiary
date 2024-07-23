export default function Footer() {
  return (
    <footer className={"absolute bottom-0 flex flex-col items-center"}>
      <p className={"text-xs"}>&copy; {new Date().getFullYear()} KKU</p>
    </footer>
  );
}
