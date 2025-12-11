import React from 'react';
import { Star } from 'lucide-react';

const defaultReviews = [
    {
        text: "We live in a listed building, so the slate had to match perfectly. Summit Roofing sourced the exact materials and the craftsmanship is invisible—it looks like it's always been there.",
        author: "Mr. & Mrs. Davies",
        location: "Oxford",
        rating: 5,
        role: "Heritage Restoration"
    },
    {
        text: "Three other roofers tried to patch our flat roof. Summit stripped it back, installed a Firestone rubber system, and it hasn't leaked a drop since.",
        author: "Peter K.",
        location: "Leeds",
        rating: 5,
        role: "Flat Roofing"
    },
    {
        text: "The drone survey was brilliant. They showed me the photos of the cracked tiles so I knew exactly what I was paying for. No hidden costs.",
        author: "Sarah Thompson",
        location: "York",
        rating: 5,
        role: "Roof Repair"
    }
];

const Testimonials = ({ reviews = defaultReviews }) => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-accent">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        The Height of Customer Service
                    </p>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {reviews.map((review, index) => (
                        <div key={index} className="flex flex-col justify-between bg-white p-8 shadow-sm ring-1 ring-gray-900/5 sm:rounded-2xl sm:p-10 hover:shadow-md transition-shadow">
                            <div className="flex gap-1 mb-4 text-accent">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <blockquote className="text-gray-900 text-lg leading-8 grow">
                                <p>“{review.text}”</p>
                            </blockquote>
                            <div className="mt-8 flex items-center gap-x-4">
                                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500">
                                    {review.author.charAt(0)}
                                </div>
                                <div className="text-sm leading-6">
                                    <div className="font-semibold text-gray-900">{review.author}</div>
                                    <div className="text-gray-600">{review.role || review.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
