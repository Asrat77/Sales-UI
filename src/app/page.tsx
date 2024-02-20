"use client";
import Image from "next/image";
import { useState } from "react";
// Make all feilds required except description (show alert if a value is missing), Update total price on submit using useEffect

export default function Home() {

  const [formData, setFormData] = useState(
    {
      item: "",
      description: "",
      quantity: "",
      unit_price: "",
      total_price: ""
    }
  )

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };


  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label>Item:
        <input type="text" name="item" value={formData.item}  onChange={handleChange} />
      </label>

      <label>Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange}/>
      </label>

      <label>Quantity:
        <input type="text" name="description"value={formData.unit_price} onChange={handleChange} />
      </label>

    <label>Unit price:
      <input type="text" name="unit_price"value={formData.total_price} onChange={handleChange} />
    </label>

    <label>TotalPrice:
      <input type="text" name="total_price"value={formData.total_price} onChange={handleChange} />
    </label>

    <input type="submit" value="Submit"/>

    </form>
      );
}
