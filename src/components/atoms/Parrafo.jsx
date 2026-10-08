const Parrafo = ({ texto, clasePersonalizada = "text-muted fs-6 mb-4" }) => {
  return (
    <p className={clasePersonalizada}>
      {texto}
    </p>
  );
};

export default Parrafo;