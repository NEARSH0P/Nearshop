export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Nearshop</h1>
      <p className="text-foreground/70 max-w-md text-lg">
        Encuentra comercios cercanos que tienen el producto que buscas.
      </p>
      <p className="text-foreground/50 text-sm">Próximamente.</p>
    </main>
  );
}
