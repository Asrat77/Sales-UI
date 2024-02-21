"use client";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { useForm, Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import { z } from "zod";

// Make all feilds required except description (show alert if a value is missing), Update total price on submit using useEffect

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
    <form onSubmit={handleSubmit(submitData)} style={styles.form}>
      <label style={styles.label}>Item: </label>
      <input type="text" {...register("item")} style={styles.input}/>
        {errors.item && <span> {errors.item.message}</span>}

      <label style={styles.label}>Description:
        <input type="text" {...register("description")} style={styles.input} />
      </label>
      {errors.description && <span> {errors.description.message}</span>}

      <label style={styles.label}>quantity:
        <input type="number" {...register("quantity", { valueAsNumber: true })} style={styles.input}/>
      </label>
      {errors.quantity && <span> {errors.quantity.message}</span>}

      <label style={styles.label}>Unit Price:
        <input type="number" {...register("unit_price", { valueAsNumber: true })} style={styles.input}/>
      </label>
      {errors.unit_price && <span> {errors.unit_price.message}</span>}

      <label style={styles.label}>Total Price:
        <input type="number" {...register("total_price", { valueAsNumber: true })} style={styles.input}/>
      </label>
      {errors.total_price && <span> {errors.total_price.message}</span>}

    <input type="submit" value="Submit" style={styles.submitButton}/>

    </form>
      );
}

const styles = {
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'f0000',
    borderRadius: '8px'
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    color: '#FFFFFF'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    color: '#000000',
  },
  submitButton: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};



