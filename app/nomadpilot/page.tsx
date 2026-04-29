export default function Page() {
  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold">Work From Anywhere 🌍</h1>

      <p className="mt-4">
        NomadPilot helps you discover the best locations, tools and workflows to live and work remotely.
      </p>

      <form action="/api/lead" method="POST" className="mt-6">
        <input
          name="email"
          placeholder="Enter your email"
          className="border p-2 w-full"
          required
        />

        <input type="hidden" name="source" value="nomadpilot" />

        <button className="mt-3 w-full bg-black text-white p-2">
          Join Waitlist
        </button>
      </form>
    </div>
  );
}
