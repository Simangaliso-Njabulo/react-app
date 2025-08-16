function ListGroup() {
  const items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
