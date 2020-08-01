import React from 'react';
import { ComponentBlock, SystemWrapper, SystemBlock } from '../../_utils/storybook';
import { Box } from '..';
import { Stack } from '../common';
import { colors } from '../../_utils';
import { Paragraph, Heading } from '../typography';

export default {
  title: 'Core|color',
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: false },
    jsx: { disable: true },
  },
};
export const Example = () =>
  React.createElement(
    SystemBlock,
    null,
    React.createElement(
      Stack,
      { spacing: 'xl' },
      React.createElement(
        ComponentBlock,
        { title: 'Primary colors', scaleTitle: 'heading5', withBackground: true },
        React.createElement(
          Box,
          { display: 'grid', gridGap: '20px', gridTemplateRows: '340px', gridTemplateColumns: '600px' },
          React.createElement(
            Box,
            { display: 'flex' },
            React.createElement(
              Box,
              {
                flex: '1',
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'stretch',
                boxShadow: '0px 5px 20px rgba(128, 128, 128, 0.1)',
                color: colors.white,
              },
              React.createElement(
                Box,
                {
                  display: 'flex',
                  flex: '1',
                  flexDirection: 'column',
                  width: '100%',
                  p: '20px',
                  background: colors.biru,
                },
                React.createElement(Heading, { color: colors.white, scale: 'heading5' }, 'Biru'),
                React.createElement(Paragraph, { scale: 'subtitle1' }, 'HEX : ', colors.biru),
                React.createElement(Paragraph, { scale: 'subtitle1' }, 'RGB : ', colors.biru)
              ),
              React.createElement(
                Box,
                { flex: '0 0 40%', display: 'flex', flexDirection: 'column', overflow: 'hidden' },
                React.createElement(
                  Box,
                  {
                    flex: '1 1 auto',
                    background: colors.hitam,
                    display: 'flex',
                    position: 'relative',
                    overflow: 'hidden',
                    flexDirection: 'column',
                    p: '20px',
                  },
                  React.createElement(Heading, { color: colors.white, scale: 'heading5' }, 'Hitam'),
                  React.createElement(Paragraph, { scale: 'subtitle1' }, 'HEX : ', colors.hitam),
                  React.createElement(Paragraph, { scale: 'subtitle1' }, 'RGB : ', colors.hitam)
                ),
                React.createElement(
                  Box,
                  {
                    flex: '1 1 auto',
                    background: colors.putih,
                    display: 'flex',
                    position: 'relative',
                    overflow: 'hidden',
                    flexDirection: 'column',
                    p: '20px',
                    color: colors.black,
                  },
                  React.createElement(Heading, { color: colors.black, scale: 'heading5' }, 'Putih'),
                  React.createElement(Paragraph, { scale: 'subtitle1' }, 'HEX : ', colors.putih),
                  React.createElement(Paragraph, { scale: 'subtitle1' }, 'RGB : ', colors.putih)
                )
              )
            )
          )
        )
      ),
      React.createElement(
        ComponentBlock,
        { title: 'Secondary colors', scaleTitle: 'heading5', withBackground: true },
        React.createElement(
          Box,
          { mb: 24 },
          React.createElement(Box, {
            backgroundColor: colors.orange,
            display: 'inline-block',
            verticalAlign: 'top',
            width: '120px',
            height: '120px',
          }),
          React.createElement(
            Box,
            { ml: 12, display: 'inline-block', verticalAlign: 'top' },
            React.createElement(Heading, { color: colors.black, scale: 'heading5' }, 'Orange'),
            React.createElement(Paragraph, { scale: 'subtitle1' }, 'HEX : ', colors.orange),
            React.createElement(Paragraph, { scale: 'subtitle1' }, 'RGB : ', colors.orange)
          )
        ),
        React.createElement(
          Box,
          { mb: 24 },
          React.createElement(Box, {
            backgroundColor: colors.merah,
            display: 'inline-block',
            verticalAlign: 'top',
            width: '120px',
            height: '120px',
          }),
          React.createElement(
            Box,
            { ml: 12, display: 'inline-block', verticalAlign: 'top' },
            React.createElement(Heading, { color: colors.black, scale: 'heading5' }, 'Merah'),
            React.createElement(Paragraph, { scale: 'subtitle1' }, 'HEX : ', colors.merah),
            React.createElement(Paragraph, { scale: 'subtitle1' }, 'RGB : ', colors.merah)
          )
        ),
        React.createElement(
          Box,
          { mb: 24 },
          React.createElement(Box, {
            backgroundColor: colors.hijau,
            display: 'inline-block',
            verticalAlign: 'top',
            width: '120px',
            height: '120px',
          }),
          React.createElement(
            Box,
            { ml: 12, display: 'inline-block', verticalAlign: 'top' },
            React.createElement(Heading, { color: colors.black, scale: 'heading5' }, 'Hijau'),
            React.createElement(Paragraph, { scale: 'subtitle1' }, 'HEX : ', colors.hijau),
            React.createElement(Paragraph, { scale: 'subtitle1' }, 'RGB : ', colors.hijau)
          )
        )
      ),
      React.createElement(
        ComponentBlock,
        { title: 'Saturation dan Shade', scaleTitle: 'heading5', withBackground: true },
        React.createElement(
          Box,
          {
            display: 'grid',
            width: '75%',
            gridGap: '5%',
            gridTemplateColumns: 'repeat(3,1fr)',
            mb: 'calc(3px + 5%)',
            mx: 'auto',
          },
          React.createElement(
            Box,
            { display: 'flex', flexDirection: 'column', width: '100%', height: '50%' },
            React.createElement(Heading, { color: colors.black, scale: 'heading5', my: 15 }, 'Biru'),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.biru01 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.biru02 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.biru03 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.biru04 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.biru05 })
          ),
          React.createElement(
            Box,
            { display: 'flex', flexDirection: 'column', width: '100%', height: '50%' },
            React.createElement(Heading, { color: colors.black, scale: 'heading5', my: 15 }, 'Hitam'),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.hitam01 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.hitam02 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.hitam03 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.hitam04 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.hitam05 })
          ),
          React.createElement(
            Box,
            { display: 'flex', flexDirection: 'column', width: '100%', height: '50%' },
            React.createElement(Heading, { color: colors.black, scale: 'heading5', my: 15 }, 'Putih'),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.putih01 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.putih02 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.putih03 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.putih04 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.putih05 })
          ),
          React.createElement(
            Box,
            { display: 'flex', flexDirection: 'column', width: '100%', height: '50%' },
            React.createElement(Heading, { color: colors.black, scale: 'heading5', my: 15 }, 'Orange'),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.orange01 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.orange02 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.orange03 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.orange04 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.orange05 })
          ),
          React.createElement(
            Box,
            { display: 'flex', flexDirection: 'column', width: '100%', height: '50%' },
            React.createElement(Heading, { color: colors.black, scale: 'heading5', my: 15 }, 'Merah'),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.merah01 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.merah02 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.merah03 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.merah04 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.merah05 })
          ),
          React.createElement(
            Box,
            { display: 'flex', flexDirection: 'column', width: '100%', height: '50%' },
            React.createElement(Heading, { color: colors.black, scale: 'heading5', my: 15 }, 'Hijau'),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.hijau01 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.hijau02 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.hijau03 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.hijau04 }),
            React.createElement(Box, { width: '100%', height: '100%', p: 25, backgroundColor: colors.hijau05 })
          )
        )
      )
    )
  );
// # sourceMappingURL=index.stories.js.map
