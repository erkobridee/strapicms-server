import { useState } from 'react';
import { useIntl } from 'react-intl';

import axios from 'axios';

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

const API_ENDPOINT = `/${PLUGIN_ID}/trigger-dispatch`;

const STATE = {
  SUCCESS: 'success',
  FAILED: 'failed',
  EMPTY: ''
} as const;

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
  const [ state, setState ] = useState<string>(STATE.EMPTY);

  const callTriggerDispatch = async () => {
    setLoading(true);

    setState(STATE.EMPTY);

    try {
      const response = await axios.get(API_ENDPOINT);

      console.log(response);

      setState(STATE.SUCCESS);
    } catch(error) {
      console.error(error);

      setState(STATE.FAILED);
    }

    setLoading(false);
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (_e) => {
    callTriggerDispatch();
  }

  const renderStatus = () => {

    if (state === STATE.EMPTY) return null;

    return (
      <Box>
        <Flex
          gap={{ initial: 2 }}
          direction={{ initial: 'row' }}
          alignItems={{ initial: 'center' }}
        >
          <Typography variant="epsilon">
            {formatMessage({
              id: getTranslation( state === STATE.SUCCESS ? STATE.SUCCESS : STATE.FAILED )
            })}
          </Typography>


          {state === STATE.SUCCESS ? <Check /> : <Cross />}
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
