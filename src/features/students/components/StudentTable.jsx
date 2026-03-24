import { useStudents } from '../hooks/useStudents';

export const StudentTable = () => {
  const { students, loading, error } = useStudents();

  if (loading) return <div className="p-8 text-center text-gray-500 animate-pulse">Loading students...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="py-4 px-4 font-semibold text-gray-700">Name</th>
            <th className="py-4 px-4 font-semibold text-gray-700">Email</th>
            <th className="py-4 px-4 font-semibold text-gray-700">Grade</th>
            <th className="py-4 px-4 font-semibold text-gray-700">Status</th>
            <th className="py-4 px-4 font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">
              <td className="py-4 px-4 font-medium text-gray-900">{student.name}</td>
              <td className="py-4 px-4 text-gray-600">{student.email}</td>
              <td className="py-4 px-4 text-gray-600">{student.grade}</td>
              <td className="py-4 px-4">
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {student.status}
                </span>
              </td>
              <td className="py-4 px-4">
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
