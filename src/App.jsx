import BillingCard from "./components2/BillingCard";

function App() {
  const billingInformation = [
    {
      id: 1,
      name: "Oliver Liam",
      company: "Viking Burrito",
      email: "oliver@burrito.com",
      vat: "FRB1235476",
    },
    {
      id: 2,
      name: "Lucas Harper",
      company: "Stone Tech Zone",
      email: "lucas@stone-tech.com",
      vat: "FRB1235476",
    },
    {
      id: 3,
      name: "Ethan James",
      company: "Fiber Notion",
      email: "ethan@fiber.com",
      vat: "FRB1235476",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <section className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-sm sm:p-8">

        <h1 className="mb-8 text-lg font-semibold text-slate-700">
          Billing Information
        </h1>

        <div className="space-y-6">
          {billingInformation.map((person) => (
            <BillingCard
              key={person.id}
              name={person.name}
              company={person.company}
              email={person.email}
              vat={person.vat}
            />
          ))}
        </div>

      </section>
    </main>
  );
}

export default App;