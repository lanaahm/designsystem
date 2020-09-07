import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Table } from '../index';

import { productsGenerator } from '../../_utils/common';

import { Stack } from '../../_foundations/common';
import { SystemWrapper, SystemBlock, ComponentBlock } from '../../_utils/storybook';

export default {
  title: 'Component|Table/Table Relaxing',
  component: Table,
  decorators: [SystemWrapper, withKnobs],
};

const products = productsGenerator(5);
const columns = [
  {
    dataField: 'id',
    text: 'Product ID',
  },
  {
    dataField: 'name',
    text: 'Product Name',
    sort: false,
  },
  {
    dataField: 'price',
    text: 'Product Price',
  },
];

export const Reguler1 = () => (
  <SystemBlock title="BCC Design System - Table Relaxing">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table keyField="id" data={products} columns={columns} relaxed={true} />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

Reguler1.story = {
  name: 'Relaxing Grid',
};

export const Reguler2 = () => (
  <SystemBlock title="BCC Design System - Table Relaxing">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table keyField="id" data={products} columns={columns} borderedVertical={false} relaxed={true} />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

Reguler2.story = {
  name: 'Relaxing Horizontal Line',
};

export const Reguler3 = () => (
  <SystemBlock title="BCC Design System - Table Relaxing">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table keyField="id" data={products} columns={columns} borderedVertical={false} striped={true} relaxed={true} />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

Reguler3.story = {
  name: 'Relaxing Zebra Stripe',
};
