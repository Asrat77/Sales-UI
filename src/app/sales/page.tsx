"use client";
import { Sale } from "@/Models/sale.model";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
// Make all feilds required except description (show alert if a value is missing), Update total price on submit using useEffect

export default function Home() {

  const [formData, setFormData] = useState<Sale>(
    {
      item: "",
      description: "",
      quantity: 0,
      unit_price: 0,
      total_price: 0
    }
  )

  useEffect(() => {
    const quantity = formData.quantity
    const unitPrice = formData.unit_price
    const totalPrice = quantity * unitPrice;
    console.log(typeof totalPrice)

    setFormData((prevState) => ({ ...prevState, total_price: totalPrice }));
  }, [formData.quantity, formData.unit_price]);



  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'total_price' ? String(value) : value
    }));
  };

  const validateForm = () => {
    const errors:any = {};

     if (!formData.item) {
      errors.item = "Item is required";
    }

    if (!formData.quantity) {
      errors.quantity = "Quantity is required";
    }

    if (!formData.unit_price) {
      errors.unit_price = "Unit Price is required";
    }

    setFormData((prevState) => ({ ...prevState, errors }));

    return Object.keys(errors).length === 0;
  };


  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (validateForm()){
      console.log(formData);
    }
    else{

    }

  };

  return (
    <form action="" onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>Item:
        <input type="text" name="item" value={formData.item}  onChange={handleChange}  style={styles.input} required/>
      </label>

      <label style={styles.label}>Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} style={styles.input} />
      </label>

      <label style={styles.label}>Quantity:
        <input type="number" name="quantity"value={formData.quantity} onChange={handleChange} style={styles.input} required />
      </label>

    <label style={styles.label}>Unit price:
      <input type="number" name="unit_price"value={formData.unit_price} onChange={handleChange}  style={styles.input} required />
    </label>

    <label style={styles.label}>TotalPrice:
      <input type="number" name="total_price"value={formData.total_price} onChange={handleChange} style={styles.input} required readOnly/>
    </label>

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



