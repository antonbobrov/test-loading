import Sequence from './SEQUENCE.json';

export const Ptyro = () => {

  return (
    <>
      {Sequence.map((item) => {
        return <img key={item.webp} src={'/ptyro/' + item.webp} />
      })}
    </>
  );
};
