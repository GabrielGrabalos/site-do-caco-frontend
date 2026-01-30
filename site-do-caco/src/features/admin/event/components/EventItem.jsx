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
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                        {event.name}
                    </h3>
                    <div className="flex items-center justify-between space-x-2">
                        <button
                            onClick={() => onUpdate(id)}
                            className="flex-1 px-3 py-1 bg-primary text-white rounded-md hover:bg-primary/90 transition"
                        >
                            Editar
                        </button>
                        <button
                            onClick={() => onDelete(id)}
                            className="flex-1 px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                        >
                            Deletar
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}