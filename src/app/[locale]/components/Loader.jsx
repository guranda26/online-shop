import "../../../styles/Loader.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-placeholder">
      <div className="spinner"></div>

      <div className="skeleton-grid">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="skeleton-card"></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;
