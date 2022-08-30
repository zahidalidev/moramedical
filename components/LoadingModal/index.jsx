import { Box, CircularProgress, Modal } from '@mui/material'

import styles from './styles.module.scss'

const LoadingModal = ({ show }) => (
  <Modal open={show}>
    <Box className={styles.modalBox}>
      <CircularProgress />
    </Box>
  </Modal>
)

export default LoadingModal
