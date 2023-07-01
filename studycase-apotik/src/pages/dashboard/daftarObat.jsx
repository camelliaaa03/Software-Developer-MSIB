import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import React from "react";
  
  
  export function DaftarObat() {
    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <div className="basis-1/2 hover:basis-1/2">
        <div className="basis-1/2 hover:basis-1/2">
          <Link to="/form/produk"><Button>Tambah Data</Button></Link>
        </div>
        </div>
        <Card>
          <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Daftar Obat
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["No", "ID Obat", "Nama", "Kategori", "Harga", "Stok", ""].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
            </table>
          </CardBody>
        </Card>
      </div>
    );
  }
  export default DaftarObat;
  