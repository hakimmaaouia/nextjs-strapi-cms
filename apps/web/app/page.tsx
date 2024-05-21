import "@repo/tailwind-config/styles.css";
import Button from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <main className="flex bg-[red]">
      <Button className="flex w-full bg-black" appName={"tesgd"}>
        test
      </Button>
    </main>
  );
}
