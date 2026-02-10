import { useIntl } from 'react-intl';

import {
  Main,

  // https://design-system.strapi.io/?path=/docs/components-box--docs
  Box,

  // https://design-system.strapi.io/?path=/docs/foundations-typography--docs
  Typography
} from '@strapi/design-system';

// import { getTranslation } from '../utils/getTranslation';

//----------------------------------------------------------------------------//

const HomePage = () => {
  const { formatMessage } = useIntl();

  /*
  return (
    <Main padding={5}>
      <Box paddingBottom={4} margin={20}>
        <Typography variant="alpha">Welcome to {formatMessage({ id: getTranslation('plugin.name') })}</Typography>

        <Box>
          <Typography variant="epsilon">{formatMessage({ id: getTranslation('plugin.description') })}</Typography>
        </Box>
      </Box>
    </Main>
  );
  */

  return (
    <Main padding={5}>
      <Box paddingBottom={4} margin={20}>
        <Typography variant="alpha">Welcome to {`GitHub Action Dispatch`}</Typography>

        <Box>
          <Typography variant="epsilon">{`Make it possible to dispatch an event into a specific GitHub repository`}</Typography>
        </Box>
      </Box>
    </Main>
  );
};

export { HomePage };
