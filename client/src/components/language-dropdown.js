import "./language.scss"
const Languageoption = (props) => {
    return (
        <select style={{ cursor: "pointer", border:"none" }} onChange={props.onChange}>
            <option style={{ cursor: "pointer" }} value={"en"}>Eng</option>
            <option style={{ cursor: "pointer" }} value={"az"}>Aze</option>
            <option style={{ cursor: "pointer" }} value={"ru"}>Ru</option>
        </select>
    )
}
export default Languageoption   