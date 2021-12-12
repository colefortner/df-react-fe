import "./LoadingSpinner.css";

const LoadingSpinner = (props) => {
  return (
    <div className={`${props.Overlay && "loading-spinner__overlay"}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
