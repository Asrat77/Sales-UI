"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, FormData } from "@/Models/sale.model";
import SalesTable from "./table";

// Make all fields required except description (show alert if a value is missing), Update total price on submit using useEffect

export default function Home() {

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>(
  {
    resolver: zodResolver(schema),
  });

  const [salesData, setSalesData] = useState({});

  const watchFields = watch(["quantity", "unit_price"])
  const submitData = (data: FormData, e: any) => {
    //console.log(data);
    e.preventDefault();
    setSalesData(data);
  };

  useEffect (()=>{
      setValue("total_price", watchFields[0] * watchFields[1])
  }), [watchFields[0], watchFields[1]]

  //console.log(salesData);


  return (
    <>
    <form onSubmit={handleSubmit(submitData)} className="max-w-xl mx-auto p-4 bg-green-900 rounded-lg">
      <label className="block mb-4 text-white">Item: </label>
      <input type="text" {...register("item")} className="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg text-white" />
        {errors.item && <span className="text-red-500"> {errors.item.message}</span>}

      <label className="block mb-4 text-white">Description:
        <input type="text" {...register("description")} className="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg text-white" />
      </label>
      {errors.description && <span className="text-red-500"> {errors.description.message}</span>}

      <label className="block mb-4 text-white">Quantity:
        <input type="number" {...register("quantity", { valueAsNumber: true })} className="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg text-white" />
      </label>
      {errors.quantity && <span className="text-red-500"> {errors.quantity.message}</span>}

      <label className="block mb-4 text-white">Unit Price:
        <input type="number" {...register("unit_price", { valueAsNumber: true })} className="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg text-white" />
      </label>
      {errors.unit_price && <span className="text-red-500"> {errors.unit_price.message}</span>}

      <label className="block mb-4 text-white">Total Price:
        <input type="number" {...register("total_price", { valueAsNumber: true })}  className="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg text-white" />
      </label>
      {errors.total_price && <span className="text-red-500"> {errors.total_price.message}</span>}

      <input type="submit" value="Submit" className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer" />

    </form>
    <SalesTable data={salesData}/>
    </>
      );
}
