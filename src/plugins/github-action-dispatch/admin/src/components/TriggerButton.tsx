import { useState } from 'react';
import { useIntl } from 'react-intl';

// import axios from 'axios';

import {
  // https://design-system.strapi.io/?path=/docs/components-box--docs
  Box,

  // https://design-system.strapi.io/?path=/docs/components-flex--docs
  Flex,

  // https://design-system.strapi.io/?path=/docs/foundations-typography--docs
  Typography,

  // https://design-system.strapi.io/?path=/docs/components-button--docs
  Button
} from '@strapi/design-system';
import { PaperPlane, Loader, Check, Cross } from '@strapi/icons';
import { styled, keyframes } from 'styled-components';

import { getTranslation } from '../utils/getTranslation';

import { PLUGIN_ID } from '../pluginId';

//----------------------------------------------------------------------------//

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const LoaderAnimated = styled(Loader)`
  animation: ${rotation} 2s infinite linear;
  will-change: transform;
`;

const TriggerButton = () => {
  const { formatMessage } = useIntl();
  const [ loading, setLoading ] = useState(false);
  const [ state, setState ] = useState('');

  const callTriggerDispatch = async () => {
    setLoading(true);
    setState('');

    console.log(`TODO: define the backend call to trigger the dispatch >> plugin::${PLUGIN_ID}`);

    setTimeout(() => {
      setLoading(false);
      setState('success');
    }, 1000)
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (_e) => {
    callTriggerDispatch();
  }

  const renderStatus = () => {

    if (state === '') return null;

    return (
      <Box>
        <Flex
          gap={{ initial: 2 }}
          direction={{ initial: 'row' }}
          alignItems={{ initial: 'center' }}
        >
          <Typography variant="epsilon">{formatMessage({ id: getTranslation( state === 'success' ? 'success' : 'failed') })}</Typography>


          {state === 'success' ? <Check /> : <Cross />}
        </Flex>
      </Box>
    );
  }

  return (
    <Flex
      gap={{ initial: 4 }}
      direction={{ initial: 'row' }}
      alignItems={{ initial: 'center' }}
    >

      <Button
        disabled={loading}
        variant="second"
        size="M"
        onClick={handleClick}
        endIcon={loading ? <LoaderAnimated /> : <PaperPlane />}
      >
        {formatMessage({ id: getTranslation('triggerButtonLabel') })}
      </Button>

      {renderStatus()}
    </Flex>
  );
}

export default TriggerButton;
