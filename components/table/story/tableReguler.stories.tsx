import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Table } from '../index';

import { productsGenerator } from '../../_utils/common';

import { Stack } from '../../_foundations/common';
import { SystemWrapper, SystemBlock, ComponentBlock } from '../../_utils/storybook';

export default {
  title: 'Component|Table/Table Reguler',
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
  <SystemBlock title="BCC Design System - Table">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table keyField="id" data={products} columns={columns} />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

Reguler1.story = {
  name: 'Reguler Grid',
};

export const Reguler2 = () => (
  <SystemBlock title="BCC Design System - Table">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table keyField="id" data={products} columns={columns} borderedVertical={false} />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

Reguler2.story = {
  name: 'Reguler Horizontal Line',
};

export const Reguler3 = () => (
  <SystemBlock title="BCC Design System - Table">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table keyField="id" data={products} columns={columns} borderedVertical={false} striped={true} />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

Reguler3.story = {
  name: 'Reguler Zebra Stripe',
};
