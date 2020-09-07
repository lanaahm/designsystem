import * as React from 'react';

import { Heading, Text, Paragraph } from '.';
import { ComponentBlock, SystemWrapper, SystemBlock } from '../../_utils/storybook';
import { Box } from '../../_foundations';
import { Stack } from '../common';

const readme = require('./README.md');

export default {
  title: 'Core|Typography',
  component: [Text, Heading, Paragraph],
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
    jsx: { skip: 2 },
  },
};

export const Example = () => (
  <SystemBlock>
    <Stack spacing="xl">
      <ComponentBlock title="Heading 1" scaleTitle="heading6">
        <Heading scale="heading1">Almost before we knew it, we had left the ground</Heading>
      </ComponentBlock>
      <ComponentBlock title="Heading 2" scaleTitle="heading6">
        <Heading scale="heading2">Almost before we knew it, we had left the ground</Heading>
      </ComponentBlock>
      <ComponentBlock title="Heading 3" scaleTitle="heading6">
        <Heading scale="heading3">Almost before we knew it, we had left the ground</Heading>
      </ComponentBlock>
      <ComponentBlock title="Heading 4" scaleTitle="heading6">
        <Heading scale="heading4">Almost before we knew it, we had left the ground</Heading>
      </ComponentBlock>
      <ComponentBlock title="Heading 5" scaleTitle="heading6">
        <Heading scale="heading5">Almost before we knew it, we had left the ground</Heading>
      </ComponentBlock>
      <ComponentBlock title="Heading 6" scaleTitle="heading6">
        <Heading scale="heading6">Almost before we knew it, we had left the ground</Heading>
      </ComponentBlock>
      <ComponentBlock title="Subtitle 1" scaleTitle="heading6">
        <Text scale="body1">Almost before we knew it, we had left the ground</Text>
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

export const Skelaton = () => (
  <SystemBlock>
    <Stack spacing="xl">
      <ComponentBlock title="Heading 1" scaleTitle="heading6">
        <Heading scale="heading1" className="skeleton">
          Almost before we knew it, we had left the ground
        </Heading>
      </ComponentBlock>
      <ComponentBlock title="Heading 2" scaleTitle="heading6">
        <Heading scale="heading2" className="skeleton">
          Almost before we knew it, we had left the ground
        </Heading>
      </ComponentBlock>
      <ComponentBlock title="Heading 3" scaleTitle="heading6">
        <Heading scale="heading3" className="skeleton">
          Almost before we knew it, we had left the ground
        </Heading>
      </ComponentBlock>
      <ComponentBlock title="Heading 4" scaleTitle="heading6">
        <Heading scale="heading4" className="skeleton">
          Almost before we knew it, we had left the ground
        </Heading>
      </ComponentBlock>
      <ComponentBlock title="Heading 5" scaleTitle="heading6">
        <Heading scale="heading5" className="skeleton">
          Almost before we knew it, we had left the ground
        </Heading>
      </ComponentBlock>
      <ComponentBlock title="Heading 6" scaleTitle="heading6">
        <Heading scale="heading6" className="skeleton">
          Almost before we knew it, we had left the ground
        </Heading>
      </ComponentBlock>
      <ComponentBlock title="Subtitle 1" scaleTitle="heading6">
        <Text scale="body1" className="skeleton" as="p">
          Almost before we knew it, we had left the ground
        </Text>
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);
Skelaton.story = {
  parameters: {
    notes: { markdown: false },
    jsx: { disable: true },
  },
};
