import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme} from '@mantine/core';
import PostShare from '../PostShare/PostShare';

function ShareModal({modalOpened, setModalOpened}) {
    const theme = useMantineTheme();
    const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={()=>setModalOpened(false)}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        size='55%'
      >
        <PostShare/>
      </Modal>
    </>
  );
}

export default ShareModal