import {
  ShieldCheckIcon,
  PlusCircleIcon,
  FolderPlusIcon,
} from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

export const statisticsCardsData = [
  {
    color: "blue",
    icon: ShieldCheckIcon,
    title: "Transaksi",
    value: "Pembelian",
    to: "/form/transaksi",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "pink",
    icon:   PlusCircleIcon,
    title: "Tambah Data ",
    value: "Obat",
    to: "/form/produk",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
 
  },
  {
    color: "green",
    icon: FolderPlusIcon,
    title: "Tambah Data",
    value: "Kategori",
    to: "/form/category",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
