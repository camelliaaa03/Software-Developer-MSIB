import {
    Card,
    CardHeader,
    CardBody,
    Typography,

  } from "@material-tailwind/react";
import React from "react";
    
  export function FormTransaksi() {
    return (
      <div>
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="blue" className="mb-5 p-4">
            <Typography variant="h6" color="white">
              Data Produk
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["No", "ID Obat", "Nama", "Kategori", "Harga", "Action"].map((el) => (
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
      <div className="mt-12 mb-8 flex flex-nowrap gap-6">
        <Card>
          <CardHeader variant="gradient" color="blue" className="mb-5 p-4">
            <Typography variant="h6" color="white">
              Detail Order
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["No", "Nama", "Harga Satuan", "Qty", "Total", "Action"].map((el) => (
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

        <Card>
          <CardBody className="px-0 pt-0 pb-2 w-96">
            <CardHeader color="transparent" floated={false} shadow={false} className="m-0 p-4">
              <Typography variant="h5" color="blue-gray" className="text-center">
                Invoice
              </Typography>
            </CardHeader>
          </CardBody>
        </Card>
      </div>
      </div>
    );
  }
  export default FormTransaksi;
  