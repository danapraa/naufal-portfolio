export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="bg-grid absolute inset-0" />
      <div className="blob absolute -top-32 -left-24 h-[30rem] w-[30rem] bg-indigo-300" />
      <div className="blob blob-2 absolute top-1/3 -right-32 h-[28rem] w-[28rem] bg-sky-300" />
      <div className="blob blob-3 absolute -bottom-40 left-1/4 h-[26rem] w-[26rem] bg-violet-300" />
    </div>
  );
}