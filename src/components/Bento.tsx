export default function BentoBox() {
  return (
    <div id="bentofeatures" className="relative z-10 grid max-w-5xl mx-auto gap-4 grid-cols-3 auto-rows-auto h-screen w-full mt-24 bg-transparent">
      {/* First row: 3 columns */}
      <div className="bg-blue-200 dark:bg-neutral-800 bg-opacity-50 rounded-lg"></div>
      <div className="bg-blue-200 dark:bg-neutral-800 bg-opacity-50 rounded-lg"></div>
      <div className="bg-blue-200 dark:bg-neutral-800 bg-opacity-50 rounded-lg"></div>

      {/* Second row: 1 big column and 1 small column */}
      <div className="col-span-2 bg-blue-200 dark:bg-neutral-800 bg-opacity-50 rounded-lg"></div>
      <div className="bg-blue-200 dark:bg-neutral-800 bg-opacity-50 rounded-lg"></div>
    </div>
  );
}
