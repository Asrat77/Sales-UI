"use client";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { useForm, Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import { z } from "zod";

// Make all fields required except description (show alert if a value is missing), Update total price on submit using useEffect

const schema = z.object({
  item: z
  .string().min(1).max(30),
  description: z
  .string().optional(),
  quantity: z
  .number().min(1),
  unit_price: z
  .number().min(1),
  total_price: z
  .number().min(1)
});
type FormData = z.infer<typeof schema>

export default function Home() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    console.log(data);
  };


  return (
    <form onSubmit={handleSubmit(submitData)} className="max-w-xl mx-auto p-4 bg-green-900 rounded-lg">
      <label className="block mb-4 text-white">Item: </label>
      <input type="text" {...register("item")} className="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg text-black" />
        {errors.item && <span className="text-red-500"> {errors.item.message}</span>}

      <label className="block mb-4 text-white">Description:
        <input type="text" {...register("description")} className="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg text-black" />
      </label>
      {errors.description && <span className="text-red-500"> {errors.description.message}</span>}

      <label className="block mb-4 text-white">Quantity:
        <input type="number" {...register("quantity", { valueAsNumber: true })} className="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg text-black" />
      </label>
      {errors.quantity && <span className="text-red-500"> {errors.quantity.message}</span>}

      <label className="block mb-4 text-white">Unit Price:
        <input type="number" {...register("unit_price", { valueAsNumber: true })} className="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg text-black" />
      </label>
      {errors.unit_price && <span className="text-red-500"> {errors.unit_price.message}</span>}

      <label className="block mb-4 text-white">Total Price:
        <input type="number" {...register("total_price", { valueAsNumber: true })} className="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg text-black" />
      </label>
      {errors.total_price && <span className="text-red-500"> {errors.total_price.message}</span>}

      <input type="submit" value="Submit" className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer" />

    </form>
      );
}
