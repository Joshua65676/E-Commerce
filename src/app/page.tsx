import Images from "@/components/Images";
import Details from "@/components/Details";
export default function Home() {
  return (
    <main className="container max-w-[75rem] mx-auto w-full">
      <section className="flex w-full justify-between items-center py-20 gap-40 ml-8">
        <div className="">
          <Images />
        </div>
        <div className="">
          <Details />
        </div>
      </section>
    </main>
  );
}
