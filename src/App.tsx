import { useState } from "react"
import { Button } from "./components/shadcn-ui/button"
import { PlusIcon } from "lucide-react"
import Profile from "./components/profile/Profile"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="text-2xl font-semibold">
        Current count is {count}
      </div>
      <Button
        variant="default"
        size="lg"
        onClick={() => setCount(count + 1)}
        className="cursor-pointer"
      >
        <PlusIcon className="mr-2 h-4 w-4" />
        Increment count
      </Button>
      <Profile />
    </div>
  )
}

export default App