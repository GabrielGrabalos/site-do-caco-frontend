import { ImageIcon } from "lucide-react";

export function EventItem({ id, event, onUpdate, onDelete }) {
    return (
        <>
            <div className="border rounded-lg overflow-hidden max-w-64 w-full">
                <div className="aspect-square bg-muted relative">
                    {event.coverImage ? (
                        <img
                            src={event.coverImage}
                            alt={event.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <ImageIcon className="h-10 w-10 text-muted-foreground/30" />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}