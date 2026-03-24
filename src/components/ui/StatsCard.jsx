export const StatsCard = ({ title, value, icon: Icon, trend, color = 'blue' }) => {
  const colorMap = {
    blue: 'text-blue-600 bg-blue-50',
    green: 'text-green-600 bg-green-50',
    purple: 'text-purple-600 bg-purple-50',
    orange: 'text-orange-600 bg-orange-50',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition group">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {trend && (
            <p className={`text-xs mt-2 font-medium ${trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {trend} <span className="text-gray-400 font-normal">than last month</span>
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg transition-colors ${colorMap[color] || colorMap.blue}`}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
};
