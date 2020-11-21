import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Table } from '../index';

import { productsGenerator } from '../../_utils/common';

import { Stack } from '../../_foundations/common';
import { SystemWrapper, SystemBlock, ComponentBlock } from '../../_utils/storybook';

export default {
  title: 'Component|Table/',
  component: Table,
  decorators: [SystemWrapper, withKnobs],
};

const products = productsGenerator(5);
const products1 = productsGenerator(99);
const columns = [
  {
    dataField: 'id',
    text: 'Product ID',
  },
  {
    dataField: 'name',
    text: 'Product Name',
  },
  {
    dataField: 'price',
    text: 'Product Price',
  },
];
const columns1 = [
  {
    dataField: 'id',
    text: 'Product ID',
  },
  {
    dataField: 'name',
    text: 'Product Name',
  },
  {
    dataField: 'price',
    text: 'Product Price',
    sort: false,
  },
];
export const Example = () => (
  <SystemBlock title="BCC Design System - Table">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table
          keyField="id"
          data={products1}
          columns={columns1}
          shape="Rounded Top"
          selection={true}
          sorted={true}
          striped={true}
          borderedVertical={false}
          pagin={[5, 10, 30]}
        />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

export const Selected = () => (
  <SystemBlock title="BCC Design System - Table">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table keyField="id" data={products} columns={columns} shape="Rounded Top" selection={true} />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

export const Sort = () => (
  <SystemBlock title="BCC Design System - Table">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table keyField="id" data={products} columns={columns1} shape="Rounded Top" sorted={true} />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

export const Strip = () => (
  <SystemBlock title="BCC Design System - Table">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table keyField="id" data={products} columns={columns} shape="Rounded Top" striped={true} />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

export const Pagination = () => (
  <SystemBlock title="BCC Design System - Table">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table keyField="id" data={products1} columns={columns} shape="Rounded Top" pagin={[10, 20, 30]} />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

export const Skelaton = () => (
  <SystemBlock title="BCC Design System - Table">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table keyField="id" data={products} columns={columns1} shape="Rounded Top" skelaton={true} />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);
