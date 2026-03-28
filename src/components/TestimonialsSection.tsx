import { Star } from "lucide-react";

const reviews = [
    {
        name: "Lydia Tadesse",
        text: "The most luxurious coffee experience in Dire Dawa! The contemporary vibe and signature Spanish Latte are exactly what this city needed.",
        rating: 5,
    },
    {
        name: "Abdi Mohammed",
        text: "My favorite sanctuary for remote work. The high-speed Wi-Fi is reliable, and their artisan cakes are the best I've ever tasted.",
        rating: 5,
    },
    {
        name: "Sara Bekele",
        text: "The Gold Cappuccino is a complete game changer. I highly recommend visiting for the top-notch service and elegant atmosphere.",
        rating: 5,
    }
]

const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container">
                <div className="text-center mb-16 animate-fade-up">
                    <p className="text-warm-gold font-medium tracking-widest uppercase text-sm mb-3">
                        What People Say
                    </p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        Customer Reviews
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-card p-8 rounded-lg shadow-md border border-border flex flex-col items-center text-center hover:shadow-lg transition-shadow"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-warm-gold text-warm-gold" />
                                ))}
                            </div>
                            <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                            <h4 className="font-display font-semibold text-lg text-foreground">
                                {review.name}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
