import { useState } from "react";

// Types
type Coupon = {
  id: number;
  code: string;
  discount: number;
  expiry: string;
  used: number;
};

type Campaign = {
  id: number;
  name: string;
  discount: number;
  startDate: string;
  endDate: string;
};

export default function OffersCoupons() {
  // State for coupons and form (your existing code)
  const [coupons, setCoupons] = useState<Coupon[]>([
    { id: 1, code: "SUMMER20", discount: 20, expiry: "2024-08-31", used: 142 },
    { id: 2, code: "WELCOME10", discount: 10, expiry: "2024-12-31", used: 89 },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    discount: 10,
    expiry: "",
  });

  // New state for campaigns
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: 1,
      name: "Summer Sale",
      discount: 15,
      startDate: "2024-06-01",
      endDate: "2024-08-31"
    },
    {
      id: 2,
      name: "Holiday Special",
      discount: 20,
      startDate: "2024-12-01",
      endDate: "2024-12-31"
    }
  ]);

  // New state for campaign form
  const [showCampaignForm, setShowCampaignForm] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    name: "",
    discount: 10,
    startDate: "",
    endDate: ""
  });

  // Your existing form handlers (unchanged)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCoupon({ ...newCoupon, [name]: name === "discount" ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const coupon: Coupon = {
      id: coupons.length + 1,
      code: newCoupon.code,
      discount: newCoupon.discount,
      expiry: newCoupon.expiry || "2024-12-31",
      used: 0,
    };
    setCoupons([...coupons, coupon]);
    setShowForm(false);
    setNewCoupon({ code: "", discount: 10, expiry: "" });
  };

  // New handlers for campaigns
  const handleCampaignInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCampaign({ ...newCampaign, [name]: name === "discount" ? Number(value) : value });
  };

  const handleCampaignSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const campaign: Campaign = {
      id: campaigns.length + 1,
      name: newCampaign.name,
      discount: newCampaign.discount,
      startDate: newCampaign.startDate,
      endDate: newCampaign.endDate
    };
    setCampaigns([...campaigns, campaign]);
    setShowCampaignForm(false);
    setNewCampaign({
      name: "",
      discount: 10,
      startDate: "",
      endDate: ""
    });
  };

  const handleDeleteCampaign = (id: number) => {
    setCampaigns(campaigns.filter(campaign => campaign.id !== id));
  };

  return (
    <div className="p-6">
      {/* Your existing header and coupon form (unchanged) */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Offers & Coupons</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + New Coupon
        </button>
      </div>

      {/* Your existing coupon form modal (unchanged) */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* ... existing coupon form ... */}
        </div>
      )}

      {/* Your existing coupons table (unchanged) */}
      <div className="overflow-x-auto mb-8">
        {/* ... existing coupons table ... */}
      </div>

      {/* New Campaigns Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Campaign Offers</h2>
          <button
            onClick={() => setShowCampaignForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            + New Campaign
          </button>
        </div>

        {/* New Campaign Form Modal */}
        {showCampaignForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Create New Campaign</h2>
              <form onSubmit={handleCampaignSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Campaign Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newCampaign.name}
                    onChange={handleCampaignInputChange}
                    className="mt-1 p-2 border rounded w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Discount (%)</label>
                  <input
                    type="number"
                    name="discount"
                    value={newCampaign.discount}
                    onChange={handleCampaignInputChange}
                    className="mt-1 p-2 border rounded w-full"
                    min="1"
                    max="100"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={newCampaign.startDate}
                    onChange={handleCampaignInputChange}
                    className="mt-1 p-2 border rounded w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={newCampaign.endDate}
                    onChange={handleCampaignInputChange}
                    className="mt-1 p-2 border rounded w-full"
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCampaignForm(false)}
                    className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Discount</th>
                <th className="px-4 py-2 text-left">Start Date</th>
                <th className="px-4 py-2 text-left">End Date</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b">
                  <td className="px-4 py-2">{campaign.name}</td>
                  <td className="px-4 py-2">{campaign.discount}%</td>
                  <td className="px-4 py-2">{campaign.startDate}</td>
                  <td className="px-4 py-2">{campaign.endDate}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDeleteCampaign(campaign.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
