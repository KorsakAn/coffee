import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface MenuCoffeeProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
}

const MenuCoffee: React.FC<MenuCoffeeProps> = ({ anchorEl, open, onClose }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={onClose}>Profile</MenuItem>
      <MenuItem onClick={onClose}>My account</MenuItem>
      <MenuItem onClick={onClose}>Logout</MenuItem>
    </Menu>
  );
};

export default MenuCoffee;