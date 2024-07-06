import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme} from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
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
        <form action="infoForm">
            <h3>Your Info</h3>

            <div>
                <input type="text" placeholder="First Name" className="infoInput" name = "firstname" />
                <input type="text" placeholder="Last Name" className="infoInput" name = "lastname" />     
            </div>
            <div>
                <input type="text" placeholder="Works At" className="infoInput" name="works"/>
            </div>
            <div>
                <input type="text" placeholder="Lives In" className="infoInput" name = "lives" />
                <input type="text" placeholder="Country" className="infoInput" name = "country" />     
            </div>
            <div>
                <input type="text" placeholder="Relationship Status" className="infoInput" name="relship"/>
            </div>
            <div>
                Profile Image
                <input type="file" name="profileImg"/>
                Cover Image
                <input type="file" name="coverImg"/>
            </div>
            <button className='button info-btn'>Update</button>
        </form>

      </Modal>
    </>
  );
}

export default ProfileModal