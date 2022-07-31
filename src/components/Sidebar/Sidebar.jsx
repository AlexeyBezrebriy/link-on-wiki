import "./Sidebar.css"

function Sidebar(props) {
  return (
    <div className="Sidebar">
      <div className="Sidebar-link">
        {props.data.map((links) => {
          return (
            <li key={links.link}>
              <a href={links.link}>{links.title}</a>
            </li>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
