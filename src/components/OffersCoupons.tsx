import { useState } from "react";

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
  status: 'upcoming' | 'active' | 'expired';
};

export default function OffersCoupons() {
  // Coupons state with sample data
  const [coupons, setCoupons] = useState<Coupon[]>([
    { id: 1, code: "SUMMER20", discount: 20, expiry: "2024-08-31", used: 142 },
    { id: 2, code: "WELCOME10", discount: 10, expiry: "2024-12-31", used: 89 },
  ]);

  // Campaigns state with sample data
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: 1,
      name: "Summer Blowout",
      discount: 15,
      startDate: "2024-07-01",
      endDate: "2024-07-31",
      status: "upcoming"
    },
    {
      id: 2,
      name: "Back to School",
      discount: 25,
      startDate: "2024-08-15",
      endDate: "2024-09-05",
      status: "upcoming"
    },
  ]);

  // Coupon form state
  const [showCouponForm, setShowCouponForm] = useState(false);
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    discount: 10,
    expiry: "",
  });

  // Campaign form state
  const [showCampaignForm, setShowCampaignForm] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    name: "",
    discount: 10,
    startDate: "",
    endDate: ""
  });

  // Coupon handlers
  const handleCouponInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCoupon({ ...newCoupon, [name]: name === "discount" ? Number(value) : value });
  };

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const coupon: Coupon = {
      id: coupons.length + 1,
      code: newCoupon.code,
      discount: newCoupon.discount,
      expiry: newCoupon.expiry || "2024-12-31",
      used: 0,
    };
    setCoupons([...coupons, coupon]);
    setShowCouponForm(false);
    setNewCoupon({ code: "", discount: 10, expiry: "" });
  };

  // Campaign handlers
  const handleCampaignInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCampaign({ ...newCampaign, [name]: name === "discount" ? Number(value) : value });
  };

  const handleCampaignSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentDate = new Date();
    const startDate = new Date(newCampaign.startDate);
    const endDate = new Date(newCampaign.endDate);
    
    const status = currentDate < startDate ? 'upcoming' : 
                  currentDate <= endDate ? 'active' : 'expired';

    const campaign: Campaign = {
      id: campaigns.length + 1,
      name: newCampaign.name,
      discount: newCampaign.discount,
      startDate: newCampaign.startDate,
      endDate: newCampaign.endDate,
      status
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

  const deleteCoupon = (id: number) => {
    setCoupons(coupons.filter(coupon => coupon.id !== id));
  };

  const deleteCampaign = (id: number) => {
    setCampaigns(campaigns.filter(campaign => campaign.id !== id));
  };

  return (
    <div className="p-6">
      {/* Offers & Coupons Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Offers & Coupons</h1>
        <button
          onClick={() => setShowCouponForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + New Coupon
        </button>
      </div>

      {/* Coupons Table */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Code</th>
              <th className="px-4 py-2 text-left">Discount</th>
              <th className="px-4 py-2 text-left">Expiry</th>
              <th className="px-4 py-2 text-left">Used</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon.id} className="border-b">
                <td className="px-4 py-2 font-medium">{coupon.code}</td>
                <td className="px-4 py-2">{coupon.discount}%</td>
                <td className="px-4 py-2">{coupon.expiry}</td>
                <td className="px-4 py-2">{coupon.used}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => alert(`Edit ${coupon.code}`)}
                    className="text-blue-500 hover:underline mr-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteCoupon(coupon.id)}
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

      {/* Campaigns Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Upcoming Campaigns</h2>
          <button
            onClick={() => setShowCampaignForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            + New Campaign
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Discount</th>
                <th className="px-4 py-2 text-left">Start Date</th>
                <th className="px-4 py-2 text-left">End Date</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b">
                  <td className="px-4 py-2 font-medium">{campaign.name}</td>
                  <td className="px-4 py-2">{campaign.discount}%</td>
                  <td className="px-4 py-2">{campaign.startDate}</td>
                  <td className="px-4 py-2">{campaign.endDate}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      campaign.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800' :
                      campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => deleteCampaign(campaign.id)}
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

      {/* Coupon Form Modal */}
      {showCouponForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Create New Coupon</h2>
            <form onSubmit={handleCouponSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Coupon Code</label>
                <input
                  type="text"
                  name="code"
                  value={newCoupon.code}
                  onChange={handleCouponInputChange}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Discount (%)</label>
                <input
                  type="number"
                  name="discount"
                  value={newCoupon.discount}
                  onChange={handleCouponInputChange}
                  className="mt-1 p-2 border rounded w-full"
                  min="1"
                  max="100"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Expiry Date</label>
                <input
                  type="date"
                  name="expiry"
                  value={newCoupon.expiry}
                  onChange={handleCouponInputChange}
                  className="mt-1 p-2 border rounded w-full"
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
                  onClick={() => setShowCouponForm(false)}
                  className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Campaign Form Modal */}
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
    </div>
  );
}
