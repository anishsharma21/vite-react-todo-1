import { useState } from "react"
import { Input } from "../shadcn-ui/input"
import { Button } from "../shadcn-ui/button"

export default function Profile() {
    const [username, setUsername] = useState<string>('')
    const [newUsername, setNewUsername] = useState<string>('')

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <h1 className="text-2xl font-bold">{username}</h1>
            <div className="w-full max-w-sm space-y-2">
                <Input
                    placeholder="Type in new username"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                />
                <Button
                    className="w-full"
                    onClick={() => setUsername(newUsername)}
                >
                    Set username
                </Button>
            </div>
        </div>
    )
}