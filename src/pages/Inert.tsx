import Dropdown from "../components/Dropdown/Dropdown"

const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]

export default function Inert() {
  return (
    <>
      <h1>inert</h1>
      <Dropdown options={options} onSelect={() => {}} />
    </>
  )
}
