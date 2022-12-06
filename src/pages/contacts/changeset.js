function Changeset({versions}) {
  return(
    <div className="my-3 col-6 m-auto card">
      <div className="card-header">Change Set</div>
      <div className="card-body">
        <ul className="list-group">
          {versions.map((version) => {
            return(
              <li className="list-group-item d-flex justify-content-between align-items-start"
                  key={version.id}>
                <div className="ms-2 me-auto">
                  {Object.entries(version.changeset).map((value) => {
                    return <div key={value[0]}>{value[0]}: {value[1][0]} => {value[1][1]}</div>
                  })}
                </div>
                <small>{version.created_at} ago</small>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default Changeset;
