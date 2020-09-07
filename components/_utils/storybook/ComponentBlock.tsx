import * as React from 'react';
import { Box, Heading, Stack, StackProps } from '../../_foundations';
import { HeadingScale } from '../../Theme';

interface ComponentBlockProps extends Omit<StackProps, 'spacing'> {
  title?: string;
  withBackground?: boolean;
  scaleTitle?: HeadingScale;
  pd?: string;
}

const ComponentBlock: React.FC<ComponentBlockProps> = ({
  children,
  title,
  withBackground,
  pd,
  scaleTitle,
  ...rest
}) => {
  if (title) {
    return (
      <Stack spacing="md" {...rest}>
        <Heading color="hitam02" scale={scaleTitle}>
          {title}
        </Heading>
        <Box backgroundColor={withBackground ? 'white' : undefined} padding={pd || undefined}>
          {children}
        </Box>
      </Stack>
    );
  } else {
    return (
      <Stack spacing="md" {...rest}>
        <Box backgroundColor={withBackground ? 'white' : undefined} padding={pd || undefined}>
          {children}
        </Box>
      </Stack>
    );
  }
};

export default ComponentBlock;
