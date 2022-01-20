export const Background = ({ src, title }) => {
  return (
    <div className="absolute top-0 w-full overflow-x-clip h-screen z-0">
      <img src={src} alt={title} />
    </div>
  );
};
