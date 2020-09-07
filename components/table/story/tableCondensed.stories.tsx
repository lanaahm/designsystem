import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Table } from '../index';

import { productsGenerator } from '../../_utils/common';

import { Stack } from '../../_foundations/common';
import { SystemWrapper, SystemBlock, ComponentBlock } from '../../_utils/storybook';

export default {
  title: 'Component|Table/Table Condensed',
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
  <SystemBlock title="BCC Design System - Table Condensed">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table keyField="id" data={products} columns={columns} condensed={true} />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

Reguler1.story = {
  name: 'Condensed Grid',
};

export const Reguler2 = () => (
  <SystemBlock title="BCC Design System - Table Condensed">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table keyField="id" data={products} columns={columns} borderedVertical={false} condensed={true} />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

Reguler2.story = {
  name: 'Condensed Horizontal Line',
};

export const Reguler3 = () => (
  <SystemBlock title="BCC Design System - Table Condensed">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table
          keyField="id"
          data={products}
          columns={columns}
          borderedVertical={false}
          striped={true}
          condensed={true}
        />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

Reguler3.story = {
  name: 'Condensed Zebra Stripe',
};
