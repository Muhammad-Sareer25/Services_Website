import React, { useEffect, useState } from 'react';
import { Users, Mail, Clock, Activity, CheckCircle2 } from 'lucide-react';
import AdminLayout from '../../layouts/AdminLayout';
import DashboardCard from '../../components/DashboardCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import { fetchDashboardStats } from '../../services/dataService';
import { getErrorMessage } from '../../services/api';

const AdminDashboardPage = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadStats = async () => {
    setLoading(true);
    setError('');
    try {
      const { stats: data } = await fetchDashboardStats();
      setStats(data);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <AdminLayout title="Dashboard" description="An overview of users, enquiries and service requests.">
      {loading && <LoadingSpinner label="Loading dashboard…" />}
      {error && <ErrorMessage message={error} onRetry={loadStats} />}

      {!loading && !error && stats && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <DashboardCard icon={Users} label="Total Users" value={stats.totalUsers} accent="navy" />
          <DashboardCard icon={Mail} label="Total Enquiries" value={stats.totalEnquiries} accent="accent" />
          <DashboardCard icon={Clock} label="Pending Requests" value={stats.pendingRequests} accent="amber" />
          <DashboardCard icon={Activity} label="Active Requests" value={stats.activeRequests} accent="accent" />
          <DashboardCard icon={CheckCircle2} label="Completed Requests" value={stats.completedRequests} accent="green" />
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminDashboardPage;
