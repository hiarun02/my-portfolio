"use client";

import { MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useState } from "react";

export default function AnonymousMessage() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!message.trim()) return;

        setStatus("sending");
        try {
            const response = await fetch("https://formsubmit.co/ajax/hiarun.works@gmail.com", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: new FormData(event.currentTarget),
            });

            if (!response.ok) throw new Error("Message could not be sent");
            setMessage("");
            setStatus("idle");
            setIsOpen(false);
        } catch {
            setStatus("error");
        }
    };

    return (
        <>
            <button
                type="button"
                onClick={() => {
                    setIsOpen(true);
                    setStatus("idle");
                }}
                aria-label="Leave an anonymous message"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-zinc-400 outline-none transition-colors hover:text-[#ffdb70] focus-visible:ring-3 focus-visible:ring-ring/50"
            >
                <MessageCircle size={17} />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4" role="presentation" onMouseDown={() => setIsOpen(false)}>
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="anonymous-message-title"
                        className="relative w-full max-w-lg border border-zinc-700 bg-zinc-950 p-6 text-zinc-100 shadow-2xl"
                        onMouseDown={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close message dialog"
                            className="absolute right-4 top-4 text-zinc-400 hover:text-white"
                        >
                            <X size={18} />
                        </button>
                        <h2 id="anonymous-message-title" className="pr-8 text-lg font-semibold">Leave an anonymous message</h2>
                        <p className="mt-1 text-sm text-zinc-400">No name or email is required.</p>

                        <form onSubmit={sendMessage} className="mt-5 space-y-4">
                            <input type="hidden" name="_subject" value="Anonymous message from hiarun.me" />
                            <input type="hidden" name="_captcha" value="false" />
                            <textarea
                                name="message"
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                placeholder="Type your message here..."
                                aria-label="Anonymous message"
                                required
                                maxLength={1000}
                                rows={5}
                                className="w-full resize-y border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-[#ffdb70] focus:ring-1 focus:ring-[#ffdb70]"
                            />
                            <div className="flex items-center justify-between gap-4">
                                <p aria-live="polite" className="text-xs text-zinc-400">
                                    {status === "sent" && "Message sent. Thank you."}
                                    {status === "error" && "Could not send. Please try again."}
                                </p>
                                <button
                                    type="submit"
                                    disabled={status === "sending" || !message.trim()}
                                    className="inline-flex h-9 items-center gap-2 bg-zinc-100 px-4 text-sm font-medium text-zinc-950 transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <Send size={15} />
                                    {status === "sending" ? "Sending..." : "Send message"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}