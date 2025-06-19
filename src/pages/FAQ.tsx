// src/pages/FAQ.tsx
import React from 'react'; // Good practice
import { Helmet } from 'react-helmet-async'; // <--- 1. Import Helmet
import { Waves, HelpCircle, Sparkles } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const FAQ = () => {
  // --- SEO Metadata ---
  const pageTitle = "FAQ - Mosaic Art Questions | Arlene's Art"; // <--- Be specific
  const pageDescription = "Find answers to frequently asked questions about mosaic art, Arlene's creative process, art supplies, workshops, and getting started with your own mosaic projects in Amanzimtoti, South Africa.";
  const canonicalUrl = "https://www.arlenes.co.za/faq"; // <--- !! IMPORTANT: Replace YOURDOMAIN.com with your actual domain
  // Optional: An image for social sharing, perhaps a general branding image or a workshop photo
  //const ogImageUrl = "https://www.YOURDOMAIN.com/images/faq-og-image.jpg"; // <--- Replace with an actual image URL if you have one

  const faqs = [
    {
      id: "what-is-mosaic-art",
      question: "What is mosaic art and how did you get started?",
      answer: "Mosaic art is the technique of creating images or patterns using small pieces of colored glass, stone, or ceramic tiles. I discovered my passion for mosaics while living by the ocean in Amanzimtoti. The way light dances on water inspired me to capture that same shimmer and movement in my art pieces."
    },
    {
      id: "beginner-friendly",
      question: "Is mosaic art suitable for beginners?",
      answer: "Absolutely! Mosaic art is wonderfully accessible to beginners. I offer starter kits and step-by-step tutorials that guide you through your first project. Many of my students create beautiful pieces on their very first try. The key is starting with simple designs and gradually building your skills."
    },
    {
      id: "materials-needed",
      question: "What materials do I need to start creating mosaics?",
      answer: "For beginners, you'll need a base surface (wood or canvas board), mosaic tiles or broken ceramics, tile adhesive, grout, tile nippers for cutting, and basic safety equipment like glasses. I offer complete starter kits that include everything you need for your first project."
    },
    {
      id: "time-to-complete",
      question: "How long does it take to complete a mosaic project?",
      answer: "Project time varies greatly depending on size and complexity. A small decorative piece might take 4-6 hours over a weekend, while larger artworks can take several weeks. The beauty of mosaic art is that you can work at your own pace and enjoy the meditative process."
    },
    {
      id: "custom-commissions",
      question: "Do you accept custom commission work?",
      answer: "Yes, I love creating custom pieces! Whether you want a mosaic inspired by a special memory, your favorite colors, or a specific theme, I work closely with clients to bring their vision to life. Each commission is unique and crafted with the same ocean-inspired aesthetic that defines my work."
    },
    {
      id: "art-supplies-shipping",
      question: "Do you ship art supplies nationwide in South Africa?",
      answer: "Yes, I ship high-quality art supplies throughout South Africa. All orders are carefully packaged to ensure your materials arrive in perfect condition. I source the finest tiles, adhesives, and tools to support your creative journey, whether you're in Cape Town, Johannesburg, or anywhere in between."
    },
    {
      id: "workshops-classes",
      question: "Do you offer workshops or classes?",
      answer: "I offer both in-person workshops here in Amanzimtoti and virtual classes for those who can't join me by the sea. My workshops are designed to be supportive and inspiring, perfect for beginners or those looking to refine their technique. Check my contact section for upcoming session dates."
    },
    {
      id: "ocean-inspiration",
      question: "How does living in Amanzimtoti influence your art?",
      answer: "Living by the ocean is my greatest inspiration! The ever-changing colors of the sea, the way light reflects off the water, and the natural patterns in shells and sea glass all find their way into my mosaics. Amanzimtoti's coastal beauty provides endless inspiration for color palettes and organic designs."
    },
    {
      id: "care-maintenance",
      question: "How do I care for and maintain my mosaic artwork?",
      answer: "Mosaic art is quite durable when properly sealed. For indoor pieces, gentle dusting with a soft cloth is usually sufficient. Outdoor mosaics may need occasional resealing depending on weather exposure. I provide detailed care instructions with every piece and am always available for maintenance advice."
    },
    {
      id: "pricing-art-kits",
      question: "What's included in your art kits and how are they priced?",
      answer: "My art kits include everything needed for a complete project: pre-cut tiles, adhesive, grout, tools, and step-by-step instructions. Kits are priced based on project size and complexity, starting from beginner-friendly options. Each kit is designed to create a beautiful finished piece while teaching fundamental techniques."
    }
  ];

  // SEO Schema markup for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet> {/* <--- 2. Use the Helmet component */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {/* <meta property="og:image" content={ogImageUrl} /> */}

        {/* Twitter Card (optional) */}
        {/* <meta property="twitter:card" content="summary_large_image" /> */}
        {/* <meta property="twitter:url" content={canonicalUrl} /> */}
        {/* <meta property="twitter:title" content={pageTitle} /> */}
        {/* <meta property="twitter:description" content={pageDescription} /> */}
        {/* <meta property="twitter:image" content={ogImageUrl} /> */}

        {/* SEO Schema Markup for FAQPage (moved inside Helmet for better organization, though your original placement is also fine) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Helmet>

      {/* Your existing component structure remains the same below */}
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-teal-50">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg">
                  <Waves className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-800">Arlene</span>
              </Link>
              <Link
                to="/"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-medium hover:scale-105 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="flex justify-center items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                Frequently Asked Questions
              </h1>
              <div className="p-3 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about mosaic art, my creative process, and how to start your own
              artistic journey here in beautiful Amanzimtoti, South Africa.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border border-blue-100 rounded-2xl px-6 bg-gradient-to-r from-blue-50/50 to-teal-50/50 hover:from-blue-50 hover:to-teal-50 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                          {faq.question}
                        </h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pl-12 pr-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-gradient-to-br from-blue-100 via-teal-100 to-cyan-100 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                I'm always happy to chat about mosaic art, share creative tips, or help you plan your next project.
                Don't hesitate to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact" // Assuming you have a contact section on your homepage
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  Get In Touch
                </Link>
                <Link
                  to="/art-kits"
                  className="px-8 py-3 bg-white/50 backdrop-blur-sm border-2 border-white/70 text-gray-700 rounded-full font-medium hover:scale-105 hover:bg-white/70 transition-all duration-300"
                >
                  Browse Art Kits
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;