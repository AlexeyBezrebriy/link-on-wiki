import "./Main.css"

function Main(props) {
  return (
    <div className="Main">
      <ul>
        {props.data.map((article) => {
          return (
            <li key={article.title}>
              {article.title}
              <br />
              {article.text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Main
