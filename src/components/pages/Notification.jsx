export default function Notification() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <p className="text-gray-600">Stay updated with alerts and reminders.</p>
      <ul className="mt-4 space-y-2">
        <li className="bg-white p-4 rounded-lg shadow">Tax report due next week</li>
        <li className="bg-white p-4 rounded-lg shadow">New market news available</li>
      </ul>
    </div>
  );
}
