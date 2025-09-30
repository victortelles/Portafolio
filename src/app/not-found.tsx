import content from "./404/content.json";
import PageNotFound from "./404/PageNotFound";
import type { NotFoundContent } from "@/types/notFound";

//Hacer referencia al contenido de /404
export default function NotFoundPage() {
    return <PageNotFound content={content as NotFoundContent} />;
}