import {
  HomeIcon,
  TableCellsIcon,
  ChartPieIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Home, DaftarObat, Kategori, Transaksi, Management } from "@/pages/dashboard";
import { Produk, Category, FormTransaksi, User } from "@/pages/form";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Home",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Daftar Obat",
        path: "/daftarObat",
        element: <DaftarObat />,
      },
      {
        icon: <ChartPieIcon {...icon} />,
        name: "Kategori Obat",
        path: "/kategori",
        element: <Kategori />,
      },
      {
        icon: <ShieldCheckIcon {...icon} />,
        name: "Transaksi",
        path: "/transaksi",
        element: <Transaksi />,
      },
    ],
  },

  {
    title: "Settings",
    layout: "dashboard",
    pages: [
      {
        icon: <UserGroupIcon {...icon} />,
        name: "Manajemen User",
        path: "/managementUser",
        element: <Management />,
      },
      {
        icon: <ArrowLeftOnRectangleIcon {...icon} />,
        name: "Logout",
        // path: "/",
        // element: <DaftarObat />,
      },
    ],
  },

  {
    layout: "form",
    pages: [
      {
        path: "/produk",
        element: <Produk />
      },
      {
        path: "/category",
        element: <Category />
      },
      {
        path: "/formTransaksi",
        element: <FormTransaksi />
      },
      {
        path: "/user",
        element: <User />
      },
    ],
  },
];

export default routes;
