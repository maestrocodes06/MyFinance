export default function Portfolio() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Portfolio</h1>
      <p className="text-gray-600">Here you can view and manage all your investments.</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">Asset Summary</div>
        <div className="bg-white p-4 rounded-lg shadow">Investment Breakdown</div>
      </div>
    </div>
  );
}
