const SellerEarningsSummary = () => {
  const summary = {
    totalEarnings: 21500,
    totalOrders: 32,
    totalProducts: 10,
    completedOrders: 27,
    pendingOrders: 3,
    cancelledOrders: 2,
    avgOrderValue: 672,
    lastPayout: '2025-06-07',
    nextPayout: '2025-06-15',
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-black">
        Seller Earnings Summary
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <InfoCard title="Total Earnings" value={`$ ${summary.totalEarnings}`} />
        <InfoCard title="Total Orders" value={summary.totalOrders} />
        <InfoCard title="Total Products" value={summary.totalProducts} />
        <InfoCard title="Completed Orders" value={summary.completedOrders} />
        <InfoCard title="Pending Orders" value={summary.pendingOrders} />
        <InfoCard title="Cancelled Orders" value={summary.cancelledOrders} />
        <InfoCard
          title="Avg. Order Value"
          value={`৳ ${summary.avgOrderValue}`}
        />
        <InfoCard title="Last Payout" value={summary.lastPayout} />
        <InfoCard title="Next Payout" value={summary.nextPayout} />
      </div>

      <div className="mt-10 p-4 bg-gray-100 rounded-md">
        <p className="text-black font-medium">
          💡 <span className="font-semibold">Note:</span> Your next payout will
          be processed on <strong>{summary.nextPayout}</strong>. Keep track of
          your completed orders to increase your earnings.
        </p>
      </div>
    </div>
  );
};

const InfoCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => (
  <div className="bg-white shadow-md rounded-xl p-6 text-center">
    <h3 className="text-lg font-semibold text-black">{title}</h3>
    <p className="text-2xl font-bold text-black mt-2">{value}</p>
  </div>
);

export default SellerEarningsSummary;
