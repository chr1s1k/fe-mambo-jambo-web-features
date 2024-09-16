import { useEffect, useState } from "react"
import "./Dropdown.css"
import clsx from "clsx"

type DropdownProps = {
  options: string[]
  placeholder?: string
  onSelect: (option: string) => void
}

export default function Dropdown({
  options,
  placeholder = "Select an option",
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
    onSelect(option)
  }

  return (
    <div className="dropdown">
      <button
        type="button"
        className={clsx("dropdown__header", {
          "dropdown__header--open": isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || placeholder}
        <span className="dropdown__arrow" aria-hidden="true">
          ▼
        </span>
      </button>
      <ul
        className={clsx("dropdown__list", {
          "dropdown__list--open": isOpen,
        })}
        // @ts-expect-error The inert prop is not yet in the React typings (https://github.com/facebook/react/issues/17157)
        inert={!isOpen ? "" : undefined}
      >
        {options.map((option, index) => (
          <li
            key={`${index}_${option}`}
            className="dropdown__list-item"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  )
}
