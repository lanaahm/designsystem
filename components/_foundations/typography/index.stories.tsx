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
  <SystemBlock title="BCC Design System - Typography" subtitle="">
    <Stack spacing="xl">
      <Box display="grid" gridTemplateColumns="2fr 1fr">
        <Stack spacing="sm">
          <Paragraph className="skeleton w15">
            Open sans merupakan humanist sans-serif typeface didesign oleh Steve Matteson setela diberi tugas oleh
            google dan dirilis pada tahun 2011. Font ini merupakan font sebelumnya yaitu Droid sans, yang didesign untuk
            digunakan pada android
          </Paragraph>
          <Paragraph className="skeleton">
            Open sans umum digunakan pada halaman web, browser (digunakan mozilla sampai tahun 2019), dekstop app
            (Telegram). Penggunaan open sans dioptimalkan untuk bacaan dengan blbalbala
          </Paragraph>
          <Paragraph className="skeleton">
            Open sans sebagai sans-serif dengan sifat tegas dan moern dipilih sesuai dari init dari hasil research yang
            didapatkan yaitu kekeluargaan dan visioner segabagai ciri khas dan pandangan orang lain terpadahp BCC
            FILKOM.
          </Paragraph>
          <Paragraph className="skeleton">
            Pros
            <br />
            -tersedia banyak variasi
            <br />
            -mudah dibaca bagi berbagai kalangan (modern but ortu suruh baca ok)
            <br />
            -umum dan sering dipakai media, website, cetak, design, dll
            <br />
            -bcc sans serif
          </Paragraph>
          <Paragraph className="skeleton">
            Cons
            <br />
            -tidak tersedia versi thin and book?
            <br />
            -karena umum dan sering dipakai tadi jdnya malah kyk mainstream?
          </Paragraph>
        </Stack>
      </Box>
    </Stack>
  </SystemBlock>
);
Skelaton.story = {
  parameters: {
    notes: { markdown: false },
    jsx: { disable: true },
  },
};
