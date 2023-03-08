import { useRouter } from "next/router"
import { useAsync } from "@/hooks/useAsync";
import { getProductById } from "@/service/product";
import ProductSection from "./ProductSection";
import RelatedSection from "./RelatedSection";

export default function ProductDetail () {
    const { query } = useRouter()
    const { loading, error, value: currentItem } = useAsync(() => getProductById(query?.id), [query.id])
   

    if (loading) return <></>
    if (error) return <></>

    return (
    <>
        <ProductSection currentItem={currentItem} />
        <RelatedSection />
    </>
    )
}

