export const Background = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(180deg, #FFF5FD 0%, #F1F3F6 100%)",
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      {children}
    </div>
  );
};

export const Hero = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: "url(/home-gradient.png)",
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      {children}
    </div>
  );
};
