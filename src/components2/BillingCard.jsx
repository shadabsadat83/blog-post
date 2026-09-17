import { Trash2, Pencil } from "lucide-react";

function BillingCard({ name, company, email, vat }) {
  return (
    <div className="rounded-xl bg-gray-50 p-6">
      <div className="flex items-start justify-between">

        <div>
          <h2 className="mb-5 text-base font-semibold text-slate-700">
            {name}
          </h2>

          <div className="space-y-2 text-sm">
            <p>
              <span className="mr-2 text-gray-500">
                Company Name:
              </span>
              <span className="font-semibold text-slate-600">
                {company}
              </span>
            </p>

            <p>
              <span className="mr-2 text-gray-500">
                Email Address:
              </span>
              <span className="font-semibold text-slate-600">
                {email}
              </span>
            </p>

            <p>
              <span className="mr-2 text-gray-500">
                VAT Number:
              </span>
              <span className="font-semibold text-slate-600">
                {vat}
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-7 pt-1">

          <button className="flex items-center gap-1 text-sm font-semibold text-red-500">
            <Trash2 size={16} />
            DELETE
          </button>

          <button className="flex items-center gap-1 text-sm font-semibold text-slate-600">
            <Pencil size={16} />
            EDIT
          </button>

        </div>

      </div>
    </div>
  );
}

export default BillingCard;