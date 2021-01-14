function Thumbnail(props) {
  return (
    <div className="project">
      <a rel="noopener noreferrer" href={props.link}>
        <img src={props.image} alt="Project Logo" />
        {props.title}
      </a>
    </div>
  );
}
export default Thumbnail;