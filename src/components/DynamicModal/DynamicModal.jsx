import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const DynamicModal = ({ open, onClose, items }) => {
  // Calculate the total percentage of the existing items
  const totalPercentage = items.reduce((sum, item) => sum + item.percent, 0);

  // Adjust the height of each item based on the total percentage
  const adjustedItems = items.map(item => ({
    ...item,
    adjustedHeight: `${(item.percent / totalPercentage) * 100}%`,
  }));
  console.log(adjustedItems)
console.log(adjustedItems);
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40%',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          maxHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'auto',
          height:'100%'
        }}
      >
        {adjustedItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              maxHeight: item.adjustedHeight,
              overflowY: 'auto', // Enable scrolling for individual sections
              borderBottom: index < adjustedItems.length - 1 ? '1px solid #ddd' : 'none',
              p: 2,
            }}
          >
            <Typography variant="body1">{item.content}</Typography>
          </Box>
        ))}
      </Box>
    </Modal>
  );
};

export default DynamicModal;
