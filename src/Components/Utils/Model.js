import * as React from 'react';
import Container from '@mui/material/Container';
import {Button,Input }from '@mui/material/';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  bordrRadius:30,
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container maxWidth="sm" sx={style} style={{borderRadius:'10px'}}>
            <Input/>
        </Container>
      </Modal>
    </div>
  );
}
