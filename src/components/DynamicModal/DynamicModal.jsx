import React, { useEffect, useRef, useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';

const DynamicModal = ({ open, onClose, items }) => {
  const [modalHeight, setModalHeight] = useState('auto');
  console.log(modalHeight)
  const contentRefs = useRef([]);
  useEffect(() => {
    if (open) {
      // Measure heights after the elements are rendered
      setTimeout(() => {
        const heights = contentRefs.current.map(ref => ref ? ref.offsetHeight   : 0);
        const totalHeight = heights.reduce((sum, height) => sum + height, 0);
        setModalHeight(totalHeight > window.innerHeight * 0.9 ? '80vh' : `${totalHeight}px`);
      }, 0);
      
    }else{
        setModalHeight('auto')
    }
  }, [open, items]);
  // Calculate the total percentage of the existing items
  const totalPercentage = items.reduce((sum, item) => sum + item.percent, 0);

  // Adjust the height of each item based on the total percentage
  const adjustedItems = items.map(item => ({
    ...item,
    adjustedHeight: `${(item.percent / totalPercentage) * 100}%`,
  }));
  
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
          maxHeight: modalHeight,
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
            ref={el => (contentRefs.current[index] = el)}
          >
            <Typography variant="body1">{item.content}</Typography>
          </Box>
        ))}
        <Box
            key={111}
            sx={{
              maxHeight: '10px',
              overflowY: 'auto', // Enable scrolling for individual sections
              p: 2,
              marginTop:'auto'
            }}
            
          >
            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates in, iure ipsam delectus eveniet a illo obcaecati? Velit doloribus atque aspernatur modi veniam repellendus, nihil provident ipsum minus hic ea?</Typography>
          </Box>
      </Box>
    </Modal>
  );
};

export default DynamicModal;
