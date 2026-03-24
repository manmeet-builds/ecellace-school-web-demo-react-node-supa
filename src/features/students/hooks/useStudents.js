import { useState, useEffect } from 'react';
import { supabase } from '../../../services/supabase';

// This is a placeholder hook. In a real app, it would fetch from 'students' table.
export const useStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        // const { data, error } = await supabase.from('students').select('*');
        // if (error) throw error;
        
        // Mock data for demonstration
        const mockData = [
          { id: 1, name: 'John Doe', email: 'john@example.com', grade: '10th', status: 'Active' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', grade: '12th', status: 'Active' },
          { id: 3, name: 'Michael Brown', email: 'mike@example.com', grade: '9th', status: 'Inactive' },
          { id: 4, name: 'Emily Davis', email: 'emily@example.com', grade: '11th', status: 'Active' },
        ];
        
        setTimeout(() => {
          setStudents(mockData);
          setLoading(false);
        }, 800);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return { students, loading, error };
};
