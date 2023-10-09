const Timer = ({ time }) => {
  const seconds = `${time % 60}`.padStart(2, "0");
  const minutes = `${Math.floor(time / 60)}`.padStart(2, "0");

  return <div className="border-l pl-4">{`${minutes}:${seconds}`}</div>;
};

export default Timer;
