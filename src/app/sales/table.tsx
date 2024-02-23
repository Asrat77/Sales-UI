'use client'
import React from 'react'
import { DataTable } from 'mantine-datatable';
import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea } from '@mantine/core';


interface SalesTableProps {
    data: any[];
  }

  const SalesTable: React.FC<SalesTableProps> = ({ data }) => {
    console.log("data", data);
    const dataArray = Object.values(data);
    //console.log("dataArray", dataArray);
    const [scrolled, setScrolled] = useState(false);

  return (


    <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table miw={700}>
        <Table.Thead >
          <Table.Tr>
            <Table.Th>Item</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Quantity</Table.Th>
            <Table.Th>Unit Price</Table.Th>
            <Table.Th>Total Price</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{dataArray[0]}</Table.Tbody>
        <Table.Tbody>{dataArray[1]}</Table.Tbody>
        <Table.Tbody>{dataArray[2]}</Table.Tbody>
        <Table.Tbody>{dataArray[3]}</Table.Tbody>
        <Table.Tbody>{dataArray[4]}</Table.Tbody>

      </Table>
    </ScrollArea>
  );


  };


export default SalesTable;
