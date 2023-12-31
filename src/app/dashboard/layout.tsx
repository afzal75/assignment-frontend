
import Sidebar from "@/components/ui/SideBar";
import PrivateRoute from "../../../middleware";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </section>
  );
}
