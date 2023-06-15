import { useState } from "react"
import { GoChevronLeft, GoChevronDown } from "react-icons/go"

export default function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="mb-2 border rounded">
      <div className="flex items-center justify-between p-2 cursor-default">
        <div className="flex items-center justify-between">
          {header}
        </div>
        <div className="cursor-pointer" onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <GoChevronDown />
          ) : (
            <GoChevronLeft />
          )}
        </div>
      </div>
      {expanded && (
        <div className="p-2 border-t">
          {children}
        </div>
      )}
    </div>
  )
}
