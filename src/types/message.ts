export type Message = {
    messages: string[];
    addMessage: (message: string) => void;
    clearMessages: () => void;
}