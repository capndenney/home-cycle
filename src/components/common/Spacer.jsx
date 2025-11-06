const Spacer = ({ marginX, marginY, character }) => {
    return (
        <div style={{ margin: `${marginX || 0} ${marginY || 0}` }}>{character || ''}</div>
    )
}

export default Spacer