import React from 'react';
import styles from './styles.module.css';

const TextInput = ({
  searchInput,
  updateInput,
  openMenu,
  closeMenu,
}: {
  searchInput: string;
  updateInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openMenu: () => void;
  closeMenu: () => void;
}) => {
  return (
    <input
      placeholder='Enter Country Name'
      className={styles.textField}
      value={searchInput}
      onChange={updateInput}
      onFocus={() => {
        openMenu();
      }}
    />
  );
};

export default TextInput;
