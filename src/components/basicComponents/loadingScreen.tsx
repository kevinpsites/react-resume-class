import React from "react";

interface LoadingScreenProps {
  loading: boolean;
  children: any;
}

const LoadingScreen = ({ loading, children }: LoadingScreenProps) => {
  return (
    <>
      {children}

      {loading && (
        <article className={`loading-screen-bg`}>
          <section>Loading...</section>
        </article>
      )}
    </>
  );
};

export default LoadingScreen;
