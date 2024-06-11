import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onDismiss: () => void;
}

const Alert = ({ children, onDismiss }: Props) => {
  return (
    <>
      <div className="alert alert-warning alert-dismissible fade show">
        {children}
        <button
          type="button"
          onClick={onDismiss}
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

export default Alert;
