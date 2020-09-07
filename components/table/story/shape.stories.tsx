import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Table } from '../index';

import { productsGenerator } from '../../_utils/common';

import { Stack } from '../../_foundations/common';
import { SystemWrapper, SystemBlock, ComponentBlock } from '../../_utils/storybook';

export default {
  title: 'Component|Table/Shape',
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

export const Shape1 = () => (
  <SystemBlock title="BCC Design System - Table">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table keyField="id" data={products} columns={columns} shape="Rounded Top" />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

Shape1.story = {
  name: 'Rounded Top',
};

export const Shape2 = () => (
  <SystemBlock title="BCC Design System - Table">
    <Stack spacing="xl">
      <ComponentBlock title="" withBackground pd="0">
        <Table keyField="id" data={products} columns={columns} shape="Sharp" />
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

Shape2.story = {
  name: 'Sharp',
};
