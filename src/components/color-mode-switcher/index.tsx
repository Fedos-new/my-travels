import React from 'react';

import { FaMoon, FaSun } from 'react-icons/fa';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';

const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('light', 'dark');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      variant="ghost"
      color="current"
      aria-label={`Переключить на ${text} режим`}
      fontSize="lg"
      margin="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  );
};

export default ColorModeSwitcher;
