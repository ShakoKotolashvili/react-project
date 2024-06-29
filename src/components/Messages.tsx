import { useMessages } from "../context/MessageContext"

export default function Messages() {
    const { messages, clearMessages } = useMessages();

    return (
        <div>
            <div className="flex gap-3">
                <h2 className="text-2xl">User Activity</h2>
                <button onClick={clearMessages} className="btn">
                    Activity - ს გაწმენდა
                </button>
            </div>

            {messages.map((message, index) => (
                <div key={index} className="my-2">
                    {message}
                </div>
            ))}
        </div>
    )
}
