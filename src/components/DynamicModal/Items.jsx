import React, { useState } from 'react';
import { Button } from '@mui/material';
import DynamicModal from './DynamicModal';
import { itemsText } from '../../Constants/text';

const App = () => {
  const [open, setOpen] = useState(false);

  // Define the items with their respective heights and content
  const items = [
    { percent: 20, content: itemsText.item1 },
    { percent: 40, content: itemsText.item2 },
    { percent: 10, content: itemsText.item3 },
    { percent: 30, content: itemsText.item4 },
  ];

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <DynamicModal open={open} onClose={() => setOpen(false)} items={items} />
    </div>
  );
};

export default App;
