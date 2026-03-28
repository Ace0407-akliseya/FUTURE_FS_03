import cafeExterior from "@/assets/cafe-exterior.jpg";
import { Heart, Leaf, Medal } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
        <div className="order-2 md:order-1 relative">
          <img
            src={cafeExterior}
            alt="Simoo Coffee & Pastry exterior"
            className="rounded-lg shadow-2xl w-full object-cover aspect-[4/5]"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-warm-gold/30 rounded-lg -z-10" />
        </div>

        <div className="order-1 md:order-2 animate-fade-up">
          <p className="text-warm-gold font-medium tracking-widest uppercase text-sm mb-3">Where</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Luxury Meets <span className="text-primary">The Bean</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
           Simoo Coffee & Pastry was born from a simple passion: bringing the finest coffee culture to the heart of Dire Dawa. We believe that every cup should be an experience, and every visit should feel like coming home. We source premium beans and pair them with artisan pastries, all served in a contemporary space designed to inspire.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            From our signature lattes to our freshly baked specialty cakes, every detail is crafted with care. Whether you’re here to power through a workday, catch up with friends, or simply enjoy a quiet moment of luxury—you belong at Simoo
          </p>

          <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div className="text-center md:text-left">
              <p className="text-4xl font-display font-bold text-primary mb-1">1+</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Years</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-display font-bold text-primary mb-1">5K</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Guests</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-display font-bold text-primary mb-1">100%</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Organic</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-muted/30 p-8 rounded-xl border border-border/50 hover:border-warm-gold/50 transition-colors group">
          <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <Medal className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display font-bold text-xl mb-3">Unmatched Quality</h3>
          <p className="text-muted-foreground">
            From our hand-picked beans to our artisan pastries, excellence is baked into everything we do
          </p>
        </div>

        <div className="bg-muted/30 p-8 rounded-xl border border-border/50 hover:border-warm-gold/50 transition-colors group">
          <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display font-bold text-xl mb-3">Community First</h3>
          <p className="text-muted-foreground">
            More than a cafe—we’re a vibrant hub where every guest is treated like part of the Simoo family
          </p>
        </div>

        <div className="bg-muted/30 p-8 rounded-xl border border-border/50 hover:border-warm-gold/50 transition-colors group">
          <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <Leaf className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display font-bold text-xl mb-3">Sustainability</h3>
          <p className="text-muted-foreground">
            Committed to a greener future by sourcing ethically grown beans and using eco-friendly packaging
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
