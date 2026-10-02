import type { Metadata } from "next";
import AdminDashboardView from "@/modules/admin/components/AdminDashboardView";

export const metadata: Metadata = {
  title: "Officer Command Center",
};

export default function AdminPage() {
  return <AdminDashboardView />;
}
