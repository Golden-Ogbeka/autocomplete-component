import styles from './style.module.css';

const LoadingIndicator = ({ text, size = 10 }: { text?: string; size?: number }) => {
  return (
    <div className={styles.container}>
      {/* Spinner */}
      <div
        className={styles.loader}
        style={{
          height: size,
          width: size,
        }}
      />
      {/* Loading Text */}
      {text && <span>{text}</span>}
    </div>
  );
};

export default LoadingIndicator;
