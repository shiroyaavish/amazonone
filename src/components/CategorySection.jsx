import React from "react";
import Section from "./Section";

export default function CategorySection({ categories = [] }) {
    return (
        <section className="mt-12">
            {categories.map((cat) => (
                <div key={cat._id} className="mb-10">
                    <Section key={cat._id} title={cat.name} products={cat.products.slice(0,5)} />
                    {/*<div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold">{cat.name}</h3>
                        <a href="#" className="text-green-600 text-sm hover:underline">
                            See All →
                        </a>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        {cat.products.slice(0, 8).map((p) => (
                            <div key={p._id} className="min-w-[200px]">
                                <ProductCard product={p} />
                            </div>
                        ))}
                    </div>*/}
                </div>
            ))}
        </section>
    );
}
