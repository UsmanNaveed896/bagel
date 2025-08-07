import React, { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "Do you offer delivery or online ordering?",
      answer:
        "Yes! We offer both delivery and online ordering for your convenience. You can place orders through our website or mobile app. Delivery is available within a 5-mile radius of our locations, with a typical delivery time of 30-45 minutes. We also partner with popular delivery services like DoorDash and Uber Eats.",
    },
    {
      id: 2,
      question: "What makes your bagels different from others?",
      answer:
        "Our bagels are handcrafted daily using traditional New York-style methods. We use high-quality ingredients, including unbleached flour and natural sea salt. Each bagel is kettle-boiled before baking, giving them that perfect chewy texture and authentic taste. We also offer unique flavor combinations you won't find elsewhere.",
    },
    {
      id: 3,
      question: "Do you provide catering services?",
      answer:
        "Absolutely! We offer comprehensive catering services for events of all sizes. Our catering menu includes bagel platters, cream cheese varieties, lox spreads, and fresh coffee service. We require 24-48 hours notice for most orders, and we can accommodate special dietary requirements with advance notice.",
    },
    {
      id: 4,
      question: "What are your most popular bagel flavors?",
      answer:
        "Our top sellers include Everything, Sesame, Poppy Seed, Plain, and Cinnamon Raisin. We also have seasonal specialties like Pumpkin Spice in fall and Blueberry Lemon in summer. Our signature flavor, the 'Brooklyn Supreme' with garlic, onion, and herbs, is also extremely popular among our regulars.",
    },
    {
      id: 5,
      question: "Do you have vegetarian and vegan options?",
      answer:
        "Yes! We have extensive vegetarian options including various cream cheese flavors, fresh vegetables, and plant-based proteins. For our vegan customers, we offer several bagel varieties made without eggs or dairy, plus vegan cream cheese, hummus, and fresh vegetable toppings.",
    },
    {
      id: 6,
      question: "Can I freeze your bagels?",
      answer:
        "Definitely! Our bagels freeze beautifully for up to 3 months. For best results, slice them before freezing and store in airtight freezer bags. To enjoy, simply toast directly from frozen - no need to thaw first. This way you can always have fresh-tasting bagels on hand whenever you crave them.",
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div
      className=""
      style={{
        background:
          "linear-gradient(282deg,rgba(27, 20, 73, 1) 0%, rgba(148, 32, 104, 1) 69%, rgba(255, 42, 131, 1) 99%)",
      }}
    >
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-12">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-6 lg:mb-6">
          <h1 className="text-sm sm:text-sm lg:text-2xl xl:text-2xl font-bold text-white mb-2 sm:mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto px-4">
            Find answers to common questions about our bagels and services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 sm:px-8 py-6 sm:py-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <span className="text-base sm:text-lg lg:text-xl font-semibold text-white pr-4 leading-relaxed">
                  {item.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openItems[item.id] ? (
                    <IoRemove className="text-white text-xl sm:text-2xl transition-transform duration-200" />
                  ) : (
                    <IoAdd className="text-white text-xl sm:text-2xl transition-transform duration-200" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems[item.id]
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <div className="border-t border-white/20 pt-4 sm:pt-6">
                    <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <p className="text-white/80 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8">
            Have more questions? We'd love to help!
          </p>
          <button className="bg-white text-purple-700 font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-white/90 transition-colors duration-200 text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
