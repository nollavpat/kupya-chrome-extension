import React from 'react';
import { useChromeStorageSync } from 'use-chrome-storage';
import {
  Button,
  Center,
  Container,
  Flex,
  Link,
  Switch,
  Text,
} from '@chakra-ui/react';

import YTMusic from './YTMusic';

const App = () => {
  // const [ytMusicCookie] = useChromeStorageSync('ytMusicCookie');
  const [updateCookie, setUpdateCookie] = useChromeStorageSync(
    'updateYtMusicCookie',
    false
  );

  const handleUpdateCookie = () => {
    setUpdateCookie(!updateCookie);
  };

  return (
    <Container minW="sm" padding="4" border="1px" minH="sm">
      <Text fontSize="lg">Kupya</Text>
      <Flex>
        <Center marginRight="2">
          <Text fontSize="sm">Update cookie:</Text>
        </Center>
        <Center>
          <Switch
            id="update-cookie"
            size="sm"
            isChecked={updateCookie}
            onChange={handleUpdateCookie}
          />
        </Center>
      </Flex>
      {updateCookie && (
        <Link
          color="teal.500"
          href="https://music.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          YT Music
        </Link>
      )}
      <Button
        onClick={async () => {
          const response = await YTMusic.getXGoogVisitorId();

          console.log(response);
        }}
      >
        Test
      </Button>
    </Container>
  );
};

export default App;
