import { Button } from "@/components/shadcn-ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/shadcn-ui/card"
import { ScrollArea } from "./components/shadcn-ui/scroll-area"
import { Checkbox } from "./components/shadcn-ui/checkbox"
import { Input } from "./components/shadcn-ui/input"

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 flex items-center justify-center">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-center text-gray-100 text-2xl font-bold">Todo App</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Add a new task..."
              className="flex-1 bg-gray-700 text-gray-100 placeholder-gray-400"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">Add</Button>
          </div>

          <ScrollArea className="h-[300px]">
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-700 border-gray-600 w-full">
                <div className="flex items-center space-x-3">
                  <Checkbox id="task1" />
                  <label htmlFor="task1" className="text-sm font-medium leading-none text-gray-100">
                    Complete project setup
                  </label>
                </div>
                <Button variant="ghost" size="sm" className="h-8 px-2 text-red-500 cursor-pointer">
                  Delete
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-700 border-gray-600 w-full">
                <div className="flex items-center space-x-3">
                  <Checkbox id="task2" />
                  <label htmlFor="task2" className="text-sm font-medium leading-none text-gray-100">
                    Design new landing page
                  </label>
                </div>
                <Button variant="ghost" size="sm" className="h-8 px-2 text-red-500">
                  Delete
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-700 border-gray-600 w-full">
                <div className="flex items-center space-x-3">
                  <Checkbox id="task3" checked />
                  <label htmlFor="task3" className="text-sm font-medium leading-none line-through text-gray-500">
                    Write documentation
                  </label>
                </div>
                <Button variant="ghost" size="sm" className="h-8 px-2 text-red-500">
                  Delete
                </Button>
              </div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}

export default App