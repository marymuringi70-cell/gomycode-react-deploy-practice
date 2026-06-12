import React, { useState } from 'react';
import { ChevronDown, Star, Clock, BookOpen } from 'lucide-react';

export default function CookieLearningPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const courses = [
    {
      id: 1,
      title: 'Cookie Basics 101',
      description: 'Master the fundamentals of cookie baking',
      lessons: 12,
      duration: '4 weeks',
      difficulty: 'Beginner',
      image: '🍪',
    },
    {
      id: 2,
      title: 'Advanced Decorating',
      description: 'Learn professional decorating techniques',
      lessons: 18,
      duration: '6 weeks',
      difficulty: 'Advanced',
      image: '🎨',
    },
    {
      id: 3,
      title: 'Ingredient Mastery',
      description: 'Understand ingredients and substitutions',
      lessons: 8,
      duration: '2 weeks',
      difficulty: 'Beginner',
      image: '🥣',
    },
    {
      id: 4,
      title: 'Gluten-Free Baking',
      description: 'Create delicious gluten-free cookies',
      lessons: 10,
      duration: '3 weeks',
      difficulty: 'Intermediate',
      image: '🌾',
    },
  ];

  const recipes = [
    {
      name: 'Classic Chocolate Chip',
      prep: '10 min',
      bake: '12 min',
      difficulty: 'Easy',
    },
    {
      name: 'Sugar Cookie Dreams',
      prep: '20 min',
      bake: '10 min',
      difficulty: 'Easy',
    },
    {
      name: 'Red Velvet Delight',
      prep: '15 min',
      bake: '14 min',
      difficulty: 'Medium',
    },
    {
      name: 'Matcha White Chocolate',
      prep: '25 min',
      bake: '13 min',
      difficulty: 'Hard',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Home Baker',
      text: 'This learning page transformed my baking skills! Now I run my own successful cookie business.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Professional Chef',
      text: 'Amazing resource for learning advanced techniques. Highly recommend to anyone serious about cookies.',
      rating: 5,
    },
    {
      name: 'Emma Wilson',
      role: 'Business Owner',
      text: 'The ingredient mastery course helped me reduce costs and improve quality dramatically.',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'How long do the courses take to complete?',
      answer:
        'Most courses take 2-6 weeks depending on difficulty level. You can work at your own pace!',
    },
    {
      question: 'Do I need special equipment?',
      answer:
        'No! You can start with basic tools. We provide guides for both minimal and advanced setups.',
    },
    {
      question: 'Are the recipes tested?',
      answer:
        'Yes, every recipe is tested by our team of professional bakers to ensure consistent results.',
    },
    {
      question: 'Can I get a certificate?',
      answer:
        'Absolutely! Complete any course and earn a digital certificate you can share with clients.',
    },
    {
      question: 'Is there a money-back guarantee?',
      answer:
        'Yes, we offer a 30-day satisfaction guarantee. Your success is our priority!',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-700">
            🍪 CookieMaster Academy
          </div>
          <div className="hidden md:flex gap-8 text-gray-700">
            <a href="#courses" className="hover:text-amber-700 transition">
              Courses
            </a>
            <a href="#recipes" className="hover:text-amber-700 transition">
              Recipes
            </a>
            <a href="#testimonials" className="hover:text-amber-700 transition">
              Success Stories
            </a>
            <a href="#faq" className="hover:text-amber-700 transition">
              FAQ
            </a>
          </div>
          <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition">
            Start Learning
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Master the Art of{' '}
          <span className="text-amber-600">Cookie Baking</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          From beginner to professional baker. Learn secrets, techniques, and
          recipes from master bakers around the world.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition">
            Explore Courses
          </button>
          <button className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-50 transition">
            Watch Demo
          </button>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="text-4xl font-bold text-amber-600">50+</div>
            <p className="text-gray-600 mt-2">Expert Recipes</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-600">10K+</div>
            <p className="text-gray-600 mt-2">Happy Learners</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-600">4.9/5</div>
            <p className="text-gray-600 mt-2">Average Rating</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Featured Courses
          </h2>
          <p className="text-center text-gray-600 mb-16">
            Structured learning paths designed by professional bakers
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 hover:shadow-lg transition transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{course.image}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {course.description}
                </p>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <BookOpen size={16} />
                    {course.lessons} lessons
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock size={16} />
                    {course.duration}
                  </div>
                  <div className="inline-block bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {course.difficulty}
                  </div>
                </div>
                <button className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition font-semibold text-sm">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section id="recipes" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Popular Recipes
          </h2>
          <p className="text-center text-gray-600 mb-16">
            Tried and tested recipes from our expert bakers
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {recipes.map((recipe, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border-2 border-amber-100 hover:border-amber-400 transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {recipe.name}
                  </h3>
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {recipe.difficulty}
                  </span>
                </div>
                <div className="flex gap-6 mb-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>Prep: {recipe.prep}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>Bake: {recipe.bake}</span>
                  </div>
                </div>
                <button className="text-amber-600 font-semibold hover:text-amber-700 transition">
                  View Full Recipe →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="bg-gradient-to-r from-amber-600 to-orange-500 py-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Success Stories from Our Learners
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-amber-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-2 border-amber-100 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full bg-amber-50 p-6 text-left font-semibold text-gray-800 hover:bg-amber-100 transition flex justify-between items-center"
                >
                  {faq.question}
                  <ChevronDown
                    size={24}
                    className={`transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="p-6 bg-white text-gray-700 border-t-2 border-amber-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-500 to-amber-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Cookie Journey?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Join thousands of successful bakers who transformed their passion
            into a thriving business.
          </p>
          <button className="bg-white text-amber-600 px-10 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition transform hover:scale-105">
            Get Started Today - It's Free! 🎉
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">
                CookieMaster Academy
              </h4>
              <p className="text-sm">
                Learn, Bake, and Succeed with our expert courses.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Recipes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Newsletter</h4>
              <p className="text-sm mb-4">
                Get weekly baking tips and recipes.
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 rounded text-gray-900 text-sm"
              />
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 CookieMaster Academy. All rights reserved. 🍪</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
