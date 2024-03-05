import { highlightMatch } from '../../functions/stringManipulations';
import useGetData from '../hooks/useGetData';
import styles from './styles.module.css';

const ResultMenu = ({
  searchInput,
  setSearchInput,
  closeMenu,
}: {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  closeMenu: () => void;
}) => {
  const { data } = useGetData();

  const chooseOption = (option: string) => {
    setSearchInput(option);
    closeMenu();
  };

  if (!data || data.length === 0) return null;

  return (
    <div className={styles.container} data-testid='result-menu'>
      <ul className={styles.listContainer}>
        {data.map(
          (item) =>
            item.name.common.toLowerCase().includes(searchInput.toLowerCase()) && (
              <li
                key={item.name.official}
                className={styles.listItem}
                onClick={(e) => chooseOption(item.name.common)}
              >
                {highlightMatch(item.name.common, searchInput)}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default ResultMenu;
