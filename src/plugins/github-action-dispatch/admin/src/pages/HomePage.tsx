import { useIntl } from 'react-intl';

import {
  Main,

  // https://design-system.strapi.io/?path=/docs/components-box--docs
  Box,

  // https://design-system.strapi.io/?path=/docs/components-flex--docs
  Flex,

  // https://design-system.strapi.io/?path=/docs/components-divider--docs
  Divider,

  // https://design-system.strapi.io/?path=/docs/foundations-typography--docs
  Typography
} from '@strapi/design-system';

import TriggerButton from '../components/TriggerButton';

import { getTranslation } from '../utils/getTranslation';

//----------------------------------------------------------------------------//

const HomePage = () => {
  const { formatMessage } = useIntl();

  return (
    <Main padding={5}>
      <Flex
        gap={{ initial: 4, medium: 6, large: 8 }}
        direction={{ initial: 'column' }}
        alignItems={{ initial: 'flex-start' }}
      >

        <Box>
          <Typography variant="alpha">Welcome to {formatMessage({ id: getTranslation('name') })}</Typography>

          <Box>
            <Typography variant="delta">{formatMessage({ id: getTranslation('description') })}</Typography>
          </Box>
        </Box>

        <Divider width="100%" />

        <TriggerButton />

        <Divider width="100%" />
      </Flex>
    </Main>
  );
};

export { HomePage };
