function Container(props) {
  return (
    <main className="container pt-4 pl-5 pr-5 clearfix">
      {props.children}
    </main>
  );

}

export default Container;